const knex = require("../database/knex");
const AppError = require("../utils/AppError");
const DiskStorage = require("../provides/DiskStorage");

class FoodsImageController {
    async update(request, response) {
        const food_id = request.params;
        const foodImageFilename = request.file.filename;
        const diskStorage = new DiskStorage();

        const food = await knex("foods").where({ id: food_id }).first();

        //Essa função é para colocar na parte de atualização(const user_id = request.user.id;) 
        /*if(!user) {
            throw new AppError("Somente usuários autenticados podem atualizar a imagem", 401);
        }*/

        if(food.foodimage){
            await diskStorage.deleteFile(food.foodimage);
        }

        const filename = await diskStorage.saveFile(foodImageFilename)
        food.foodimage = filename;

        await knex("foods").update(food).where({ id: food_id });

        return response.json(food);
    }
}

module.exports = FoodsImageController;

//lembrar as propriedades/requisições do insomnia. os modos de busca por imagem e outros