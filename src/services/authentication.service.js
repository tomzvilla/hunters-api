const { User } = require('../models');
const bcrypt = require('bcrypt');
const { generateToken } = require('../utils/generateTokens');
const ServiceError = require('../services/errors/ServiceError');

class AuthenticationService {
    async authenticate(user) {
        try {
            const userDb = await User.findOne({ userName: user.userName }).lean();
            if(!userDb) {
                throw new ServiceError({ code: 1404, message: 'User not found' });
            }
            const match = await bcrypt.compare(user.password, userDb.password);
            if(!match) {
                throw new ServiceError({ code: 1401, message: 'Wrong username or password' });
            }
            const { token, expiresIn } = generateToken(userDb._id);

            return { token, expiresIn, _id: userDb._id };
        } catch (error) {
            throw error;
        }
    }

    async refreshToken(_id) {
        try {
            const userDb = await User.findOne({ _id }).lean();
            if(!userDb) {
                throw new ServiceError({ code: 1404, message: 'User not found' });
            }
            const { token, expiresIn } = generateToken(userDb._id);

            return { token, expiresIn, _id: userDb._id };
        } catch (error) {
            throw error;
        }
    }

}

module.exports = new AuthenticationService();