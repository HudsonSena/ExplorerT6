class UsersController {
    create(request, response) {
        const { name, email, password, avatar, created_at, updated_at } = request.body;
        
        response.json({ name, email, password, avatar, created_at, updated_at });        
    }

}

module.exports = UsersController