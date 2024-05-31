const jwt = require('jsonwebtoken');
const config = require('../config/config')

const generateToken = (_id) => {
    const expiresIn = 60 * 15 // 60seg x 15 = 15 min
    try {
        const token = jwt.sign({ _id }, config.jwt.secret, { expiresIn });
        return { token, expiresIn };
    } catch (error) {
        console.log(error)
    }
}

const generateRefreshToken = (_id, res) => {
    const expiresIn = 60 * 60 * 24 * 7 // 7 dias
    try {
        const refreshToken = jwt.sign({ _id }, config.jwt.refresh, { expiresIn });
        
        // Guardamos el Refresh Token en cookie segura
        // secure: !(config.env === "development"),
        res.cookie("refreshToken", refreshToken, {
            httpOnly: true,
            sameSite: 'none',
            secure: true,
            expires: new Date(Date.now() + expiresIn  * 1000) //*1000 porque está en milisegundos
            
        })
        const refreshExpiresIn = new Date(Date.now() + expiresIn * 1000)
        return refreshExpiresIn;

    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    generateToken,
    generateRefreshToken,
}