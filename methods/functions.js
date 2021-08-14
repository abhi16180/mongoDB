const mongoose = require('mongoose');
const express = require('express');
const app = express();

var functions = {
    register: function (req,res) {
    console.log(req.body);
    res.send(req.body);
    },
    login: () => {

    },

    delete: () => {

    }



}

module.exports=functions;