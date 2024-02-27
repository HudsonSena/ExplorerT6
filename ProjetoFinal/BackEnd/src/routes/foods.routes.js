const { Router } = require("express");
const multer = require("multer");
const uploadConfig = require("../configs/upload");

const FoodsController = require("../controllers/FoodsController");
const FoodsImageController = require("../controllers/FoodsImageController");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

const foodsController = new FoodsController();
//const foodsImageController = new FoodsImageController();

const foodsRoutes = Router();
const upload = multer(uploadConfig.MULTER);

foodsRoutes.get("/", foodsController.index);
foodsRoutes.get("/:id", foodsController.show)

foodsRoutes.use(ensureAuthenticated)

foodsRoutes.post("/", foodsController.create);
foodsRoutes.delete("/", foodsController.delete);
foodsRoutes.patch("/foodimage", upload.single("foodimage"),(request, response) => {
    console.log(request.file.filename);
    response.json();
});
foodsRoutes.put("/", foodsController.update);

module.exports = foodsRoutes;