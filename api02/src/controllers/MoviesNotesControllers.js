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
}

module.exports = MoviesNotesController;