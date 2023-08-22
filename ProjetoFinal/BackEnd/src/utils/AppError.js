class AppError {
    message;
    statusCode;

    construtor(message, statusCode=400){
        this.message = message;
        this.statusCode = statusCode;
    }
}

module.exports = AppError;