const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userid: {
        type: String,
        required: true
    },
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    confirmPass: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    
});

const User = mongoose.model('users', userSchema);

module.exports = User;




