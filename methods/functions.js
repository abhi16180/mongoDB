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
        res.send(user.id);
    },
    login: function (req, res) {

        User.findOne({
            uid: req.body.uid,
        }).then((err) => {
            if (!err) {
                console.log("working1");
            } else {
                console.log("working2");
            }
        });
    },

    delete: () => { },
};

module.exports = functions;
