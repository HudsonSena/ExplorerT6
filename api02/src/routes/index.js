const { Router } = require("express");

const userRouter = require("./users.routes");
const moviesNotesRouter = require("./moviesNotes.routes");

const routes = Router();
routes.use("/users", userRouter);
routes.use("/moviesNotes", moviesNotesRouter);

module.exports = routes;