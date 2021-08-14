const mongoose = require('mongoose');
const express = require('express');
const app = express();

var functions = {
    register: function async (req,res) {
    console.log(req.body);
    var user= new User(req.body);
    user.save();
    res.send(req.body);
    },
    login: () => {

    },

    delete: () => {

    }



}

module.exports=functions;