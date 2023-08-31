const knex = require("../database/knex");
class TagsController {
    async index(request, response) {
        const tags = await knex("tags").orderBy("tags.name");
        
        return response.json(tags)
    }    
};

module.exports = TagsController;
