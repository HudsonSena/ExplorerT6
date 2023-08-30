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
            user_id,
        });

        const tagsInsert = tags.map(name => {
            return {
                food_id,
                user_id,
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

    async index(request, response) {
        const { title, tags } = request.query;
    
        let foods;
    
        if (tags) {
            const filterTags = tags.split(",").map(tag => tag.trim());
    
            foods = await knex("foods")
                .select([
                    "foods.id",
                    "foods.title"
                ])
                .where("foods.title", "like", `%${title}%`)
                .join("tags", "foods.id", "tags.food_id")
                .whereIn("tags.name", filterTags)
                .orderBy("foods.title");
        } else {
            foods = await knex("foods")
                .select([
                    "foods.id",
                    "foods.title"
                ])
                .where("foods.title", "like", `%${title}%`)
                .leftJoin("tags", "foods.id", "tags.food_id")
                .orderBy("foods.title");
        }
    
        const foodIds = foods.map(food => food.id);
    
        const tagsFood = await knex("tags")
            .select([
                "tags.food_id",
                "tags.name"
            ])
            .whereIn("tags.food_id", foodIds)
            .orderBy("tags.name");
    
        const foodsWithTags = foods.map(food => {
            const foodTags = tagsFood
                .filter(tag => tag.food_id === food.id)
                .map(tag => tag.name);
    
            return {
                id: food.id,
                title: food.title,
                tags: foodTags
            };
        });
    
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