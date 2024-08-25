class ApiError extends Error {
    constructor(
        statusCode,
        message,
        isOperational = true,
        stack = "",
        errors = []
    ) {
        super(message);
        this.statusCode = statusCode;
        this.isOperational = isOperational;
        this.errors = errors;
        this.success = false;
        this.data = null;
        this.message = message;

        if (stack) {
            this.stack = stack;
        } else {
            Error.captureStackTrace(this, this.constructor);
        }
    }
}

export { ApiError };
