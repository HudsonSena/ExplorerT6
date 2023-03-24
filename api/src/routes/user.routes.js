const { Router } = require("express");

const userRoutes = Router();

userRoutes.post("/", (request, response) => {
    const {name, email, password} = request.body;

    //response.send(`User name: ${name}</br>E-mail: ${email}</br>Password: ${password}`);

    response.json({name, email, password});
});

module.exports = userRoutes;