const { Customer } = require('../models');
const { ServiceError } = require('./errors')

class CustomerService {
    async getCustomers() {
        const customers = await Customer.find().lean();
        return customers;
    }

    async createCustomer(customer) {
        const customerExists = await Customer.findOne({ documentNumber: customer.documentNumber }).lean();
        if(customerExists) {
            throw new ServiceError({ code: 1409, message: 'El cliente ingresado ya existe'});
        }
        await Customer.create(customer);
        return customer;
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