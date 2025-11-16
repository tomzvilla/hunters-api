const { Customer } = require('../models');
const { ServiceError } = require('./errors')

class CustomerService {
    async getCustomers() {
        const customers = await Customer.find().lean();
        return customers;
    }

    async createCustomer(customer, userId) {
        const customerExists = await Customer.findOne({ documentNumber: customer.documentNumber }).lean();
        if(customerExists) {
            throw new ServiceError({ code: 1409, message: 'El cliente ingresado ya existe'});
        }
        const createdCustomer = await Customer.createWithUser(customer, userId);
        return createdCustomer;
    }

    async deleteCustomer(customerId) {
        const result = await Customer.deleteOne({ _id: customerId });
        console.log(result);
        // if(customerExists) {
        //     throw new ServiceError({ code: 1409, message: 'El cliente ingresado ya existe'});
        // }
    }

}

module.exports = new CustomerService();