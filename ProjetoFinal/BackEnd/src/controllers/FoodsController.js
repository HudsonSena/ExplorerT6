const knex = require("../database/knex");

class FoodsController{
    async create(request, response){
        const { title, description, cost, tags } = request.body;
        const { user_id } = request.params;

        const [ food_id ] = await knex("foods").insert({
            title,
            description,
            cost,
            user_id
        });

        const tagsInsert = tags.map(title => {
            return {
                food_id,
                title
            }
        });

        await knex("tags").insert(tagsInsert);

        response.json();
    }
    async show(request, response){
        const { id } = request.params;

        const food = await knex("foods").where({ id}).first();
        const tags = await knex("tags").where({ food_id: id}).orderBy("title");

        return response.json({
            ...food,
            tags
        });
    }
}

module.exports = FoodsController;