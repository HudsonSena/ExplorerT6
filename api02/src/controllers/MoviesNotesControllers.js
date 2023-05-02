const knex = require("../database/knex");

class MoviesNotesController {
    async create(request, response) {
        const { title, description, rating, moviesTags } = request.body;
        const { user_id } = request.params;

        const [ moviesNotes_id ] = await knex("moviesNotes").insert({
            title,
            description,
            rating,
            user_id
        });

        const moviesTagsInsert = moviesTags.map(name => {
            return {
                moviesNotes_id,
                user_id,
                name
            }
        });

        await knex("moviesTags").insert(moviesTagsInsert);

        response.json();
    }

    async show(request, response) {
        const { id } = request.params;
        
        const note =  await knex("moviesNotes").where({ id }).first();
        const tags = await knex("moviesTags").where({ moviesNotes_id: id }).orderBy("name");

        return response.json({
            ...note,
            tags
        });
    }

    async delete(request, response) {
        const { id } = request.params;

        await knex("moviesNotes").where({ id }).delete();

        return response.json("Nota deletada");
    }

    async index(request, response) {
        const { title, user_id, moviesTags } = request.query;

        let notes;
        
        if(moviesTags) {
            notes = await knex("moviesTags")
            .whereIn("name", filterMoviesTags)
             
        } else {            
            notes = await knex("moviesNotes")
            .where({ user_id })
            .whereLike( title, `%${title}`)
            .orderBy("title");
        }

        

        return response.json(notes)
    }
}

module.exports = MoviesNotesController;