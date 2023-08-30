const knex = require("../database/knex");
const sqliteConnection = require("../database/sqlite");
const AppError = require("../utils/AppError");

class FoodsController{
    async create(request, response){
        const { title, description, cost, tags } = request.body;
        const { user_id } = request.params;
        const database = await sqliteConnection();

        const checkFoodExists = await database.get("SELECT * FROM foods  WHERE title = (?)", [title])

        if(checkFoodExists){
            throw new AppError("Este prato já existe no menu.");
        }

        const [ food_id ] = await knex("foods").insert({
            title,
            description,
            cost,
            user_id
        });

        const tagsInsert = tags.map(name => {
            return {
                food_id,
                name
            }
        });

        await knex("tags").insert(tagsInsert);

        response.json();
    }

    async show(request, response){
        const { id } = request.params;

        const food = await knex("foods").where({ id }).first();
        const tags = await knex("tags").where({ food_id: id }).orderBy("name");

        return response.json({
            ...food,
            tags
        });
    }

    async delete(request, response){
        const { id } = request.params;

        await knex("foods").where({ id }).delete();

        return response.json();
    }

    async index(request, response){
        const { title, tags } = request.query;

        let foods;

        if(tags){
            const filterTags = tags.split(",").map(tag => tag.trim());

            foods = await knex("tags")
                .select([
                    "foods.id",
                    "foods.title"
                ])
                .whereLike("foods.title", `%${title}%`)
                .whereLike("name", `%${filterTags}%`)
                .innerJoin("foods", "foods.id", "tags.food_id")
                .orderBy("foods.title")

        } else {
            foods = await knex("foods")
            .whereLike("title", `%${title}%`)
            .orderBy("title");
        }

        const foodTags = await knex("tags").where("foods_id");

        const foodsWithTags = foods.map(food => {
            const tagsInFood = foodTags.filter(tag => tag.food_id === food.id);

            return {
                ...food,
                tags: tagsInFood,
            }
        })

        return response.json(foodsWithTags);
    }

    async update(request, response){
        const { title, description, cost } = request.body;
        const { id } = request.params;

        const database = await sqliteConnection();
        const food = await database.get("SELECT * FROM foods WHERE id = (?)", [id]);

        if(!food) {
            throw new AppError("Prato não encontrado no menu");
        }

        const foodWithUpdatedTitle = await database.get("SELECT * FROM foods WHERE title = (?)", [title]);

        if(foodWithUpdatedTitle && foodWithUpdatedTitle.id !== food.id) {
            throw new AppError("Já existe um prato com esse título.");
        }

        food.title = title ?? food.title;
        food.description = description ?? food.description;
        food.cost = cost ?? food.cost;

        await database.run(`
            UPDATE foods SET
            title = ?,
            description = ?,
            cost = ?,
            updated_at = DATETIME('now')
            WHERE id = ?`,
            [food.title, food.description, food.cost, id]
        );

        return response.json();        
    }    
}

module.exports = FoodsController;