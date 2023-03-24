const express = require("express");

const app = express();
app.use(express.json());

app.post("/users", (request, response) => {
    const {name, email, password} = request.body;

    //response.send(`User name: ${name}</br>E-mail: ${email}</br>Password: ${password}`);

    response.json({name, email, password});
});

const PORT = 3333;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
