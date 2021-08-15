const mongoose = require('mongoose');

const taskPair = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: false,
        }
    }
)

module.exports = mongoose.model("taskpair", taskPair);