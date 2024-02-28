const knex = require("../database/knex");
const AppError = require("../utils/AppError");
const DiskStorage = require("../provides/DiskStorage");

class FoodsImageController {
    async update(request, response) {
        const { id } = request.params;
        const foodImageFilename = request.file.filename;
        const diskStorage = new DiskStorage();

        const food = await knex("foods").where({ id }).first();

        if(food.foodimage){
            await diskStorage.deleteFile(user.foodimage);
        }

        const filename = await diskStorage.saveFile(foodImageFilename)
        food.foodimage = filename;

        await knex("foods").update(food).where({ id });

        return response.json(food);
    }
}

module.exports = FoodsImageController;

//lembrar as propriedades/requisições do insomnia. os modos de busca por imagem e outros