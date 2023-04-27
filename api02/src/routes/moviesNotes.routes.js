const { Router } = require("express");

const MoviesNotesController = require("../controllers/MoviesNotesControllers");

const moviesNotesRoutes = Router();

const moviesNotesController = new MoviesNotesController();

moviesNotesRoutes.post("/:user_id", moviesNotesController.create);

module.exports = moviesNotesRoutes;