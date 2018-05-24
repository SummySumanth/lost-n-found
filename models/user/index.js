let mongoose = require('mongoose');
let Schema = mongoose.Schema;

//Create Schema and Model
const userSchema = new Schema({
    name: String,
    email: String,
    phone: Number,
    display_picture: String,
    address: String,
    blood_group: String,
    facebook: String,
    twitter: String
});

const user = mongoose.model('user', userSchema);

module.exports = user;