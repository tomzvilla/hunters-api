const BaseController = require("./base.controller");
const httpStatus = require('http-status');
const { generateRefreshToken } = require('../utils/generateTokens')
const { authenticationService: service } = require('../services');
const { authenticationValidation: validation } = require('../validations');

class AuthenticationController extends BaseController {
    constructor () {
        super(service, validation);
    }

    get methods () {
        return ['authenticate', 'refresh', 'logout'];
    }

    async _authenticate (req, res) {
        const { token, expiresIn, _id } = await this.service.authenticate(req.body);
        const refreshExpiresIn = generateRefreshToken(_id, res);
        res.status(httpStatus.OK).send({ token, expiresIn, refreshExpiresIn });
    }

    async _refresh (req, res) {
        const { token, expiresIn, _id } = await this.service.refreshToken(req.userId);
        const refreshExpiresIn = generateRefreshToken(_id, res);
        res.status(httpStatus.OK).send({ token, expiresIn, refreshExpiresIn });
    }

    async _logout(req, res) {
        res.clearCookie("refreshToken", {
            httpOnly: true,
            sameSite: 'none',
            secure: true,
        });
        res.status(httpStatus.OK).send();
    }

}

module.exports = new AuthenticationController();