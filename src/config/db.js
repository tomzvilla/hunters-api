const mongoose = require('mongoose');
const { db: dbConfig } = require('./config');
const { username, password, host, port, database } = dbConfig;

const credentials = username ? `${username}:${password}@` : '';

const uri = `mongodb+srv://${credentials}${host}/${database}`;

const onConnect = mongoose.connect(uri);

module.exports = {
    mongoose,
    onConnect,
};
