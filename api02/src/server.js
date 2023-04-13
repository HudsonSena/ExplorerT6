const express = require("express");

const app = express();
app.use(express.json());

app.post("/movies", (request, response) => {
    const { name, description, grade } = request.body;

    response.json({ name, description, grade });
})

const PORT = 3333;
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));