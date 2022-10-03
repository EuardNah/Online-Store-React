class ApiError extends Error{
    constructor(status, messege) {
        super();
        this.status = status
        this.message = messege
    }

    static badRequest(message) {
        return new ApiError( 404, message)
    }

    static internal(message) {
        return new ApiError(508, message)
    }

    static forbidden(message) {
        return new ApiError(403, message)
    }

}

module.exports = ApiError