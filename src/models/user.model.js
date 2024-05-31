const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    userName: { type: String, required: true },
    password: { type: String, required: true },
    roles: { type: Array, required: true }
}, { collection: "users" });

module.exports = mongoose.model('User', UserSchema);