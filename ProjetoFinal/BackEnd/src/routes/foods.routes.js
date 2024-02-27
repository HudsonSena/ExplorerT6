const { Router } = require("express");

const FoodsController = require("../controllers/FoodsController");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

const foodsController = new FoodsController();

const foodsRoutes = Router();
foodsRoutes.get("/", foodsController.index);
foodsRoutes.get("/:id", foodsController.show)

foodsRoutes.use(ensureAuthenticated)

foodsRoutes.post("/", foodsController.create);
foodsRoutes.delete("/", foodsController.delete);

foodsRoutes.put("/", foodsController.update);

module.exports = foodsRoutes;