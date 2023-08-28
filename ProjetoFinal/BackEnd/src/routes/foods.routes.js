const { Router, response } = require("express");

const FoodsController = require("../controllers/FoodsController");

const foodsController = new FoodsController();

const foodsRoutes = Router();

foodsRoutes.post("/:user_id", foodsController.create);
foodsRoutes.get("/:id", foodsController.show);

module.exports = foodsRoutes;