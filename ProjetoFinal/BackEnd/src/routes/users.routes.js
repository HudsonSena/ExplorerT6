const { Router, response } = require("express");

const UserController = require("../controllers/UserController");
const userController = new UserController();

const usersRoutes = Router();

function myMiddleware(request, response, next){
    next();
};

usersRoutes.post("/", myMiddleware, userController.create);

module.exports = usersRoutes;