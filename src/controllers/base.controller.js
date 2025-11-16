const catchAsync = require('../utils/catchAsync')
const httpStatus = require('http-status');
class BaseController {
    constructor (service, validation) {
        this.service = service;
        this.validation = validation;
        this.methods.forEach(k => { this[k] = catchAsync(this[`_${k}`].bind(this)); });
    }

    get methods () {
        const baseMethods = ['list', 'create', 'get', 'remove', 'update'];
        return [...baseMethods, ...this.customMethods];
    }

    get customMethods () {
        return [];
    }

    get defaultPageSize () {
        return this.service.limit;
    }

    get entityName () {
        return this.constructor.name.replace('Controller', '');
    }

    get idProperty () {
        return this.entityName[0].toLowerCase() + this.entityName.substr(1) + 'Id';
    }

    pick (object, keys) {
        return pick(object, keys);
    }

    async _create (req, res, next) {
        const instance = await this.service.create(req.body, req.user);
        res.header('Location', this.getLocationHeader(req, instance.id));
        res.status(httpStatus.CREATED).send();
    }

    async _remove (req, res, next) {
        await this.service.deleteById(req.params[this.idProperty]);
        res.status(httpStatus.NO_CONTENT).send();
    }

    async _list (req, res, next) {
        //const filter = this.getFilters(req);
        //const options = this.getOptions(req);

        const results = await this.service.list();

        return res.status(httpStatus.OK).send(results);
    }

    async _get (req, res, next) {
        const entity = await this.service.getById(req.params[this.idProperty]);
        res.send(entity);
    }

    async _update (req, res, next) {
        await this.service.updateById(req.params[this.idProperty], req.body, req.user);
        res.send();
    }

    getLocationHeader (req, id) {
        const { baseUrl, path } = req;
        const originalUrl = `${baseUrl}${path.replace(/\/?$/, '/')}`;

        return `${originalUrl}${id}`;
    }

}

module.exports = BaseController;

