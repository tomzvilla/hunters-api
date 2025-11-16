const BaseController = require("./base.controller");
const httpStatus = require('http-status');

const { customerService: service } = require('../services');
const { customerValidation: validation } = require('../validations');

class CustomerController extends BaseController {
    constructor () {
        super(service, validation);
    }

    get methods () {
        return ['getCustomers', 'createCustomer', 'deleteCustomer'];
    }

    async _getCustomers (req, res) {
        const customers = await this.service.getCustomers();
        res.status(httpStatus.OK).send(customers);
    }

    async _createCustomer(req, res) {
        const customer = await this.service.createCustomer(req.body, req.userId);
        res.status(httpStatus.CREATED).send(customer);
    }

    async _deleteCustomer(req, res) {
        console.log(req.params)
        await this.service.deleteCustomer(req.params.customerId);
        res.status(httpStatus.OK).send();
    }

}

module.exports = new CustomerController();