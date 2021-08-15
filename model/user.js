const mongoose = require('mongoose');

var Schema = new mongoose.Schema;
const User = new mongoose.Schema({
    name: {
        required: true,
        type: String,
    },
    age: {
        type: Number,
        required: true,
    },
    uid: {
        type: Number,
        required: true,
    },
    task: {
        type: Array,
        required: false,
    }

});

module.exports = mongoose.model("UserList", User);