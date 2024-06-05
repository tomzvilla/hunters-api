const simpleConflictErrorNames = ['SequelizeDatabaseError', 'SequelizeForeignKeyConstraintError'];

class ServiceError extends Error {
    constructor (error, isOperational = true) {
        super(error);
        this.date = new Date();
        this.details = [];
        this.isOperational = error.isOperational ?? isOperational;

        if (simpleConflictErrorNames.includes(error.name)) {
            this.code = 1409;
            this.message = error.message;
        } else if (error.name === 'SequelizeUniqueConstraintError') {
            this.message = 'uniqueViolation';
            this.code = 1409;
            this.details = [{
                name: Object.keys(error.fields).join(', '),
                message: 'mustBeUnique',
                code: '1409',
                entity: error.original?.table
            }];
        } else if (error.name === 'SequelizeValidationError') {
            this.message = 'validationError';
            this.code = 1400;
            this.details = error.errors.map((error, i) => (
                {
                    code: `${this.code + i}`,
                    name: error.path,
                    message: error.validatorKey === 'customValidator' ? error.message : error.validatorKey
                }));
        } else {
            this.message = error.type || error.message || 'Unexpected error';
            this.code = error.code || 1500;
            if (error.details) {
                this.details = error.details;
            }
        }
    }
}

module.exports = ServiceError;
