const { Router } = require("express");

const usersRouter = require("./users.routes");
const foodsRouter = require("./foods.routes");
const tagsRouter = require("./tags.routes");
const sessionsRouter = require("./sessions.routes");

const routes = Router();

routes.use("/users", usersRouter);
routes.use("/sessions", sessionsRouter);
routes.use("/foods", foodsRouter);
routes.use("/tags", tagsRouter);

module.exports = routes;