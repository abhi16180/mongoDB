const mongoose = require("mongoose");
const express = require("express");
const User = require("../model/user");
const user = require("../model/user");
const app = express();

var functions = {
    register: function (req, res) {
        console.log(req.body);
        var user = new User(req.body);
        user.save();
        res.send(req.body);
    },
    login: function (req, res) {
        res.send('working')
        User.findOne({
            name: req.body.name,
        }).then((err) => {
            if (!err) {
                console.log("working");
            } else {
                console.log("working");
            }
        });
    },

    delete: () => { },
};

module.exports = functions;
