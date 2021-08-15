const express = require('express');
const app = express();
const mongoose = require('mongoose');
const User = require("./model/user");
require("dotenv/config");
const functions = require('./methods/functions');
app.use(express.json()) //for json req


/*
app.get('/', (req, res) => {
    res.send('first req');
});
app.get("/users", (req, res) => {

    let users = ["abhi", "cooper"];
    res.send({
        Users: users,
    });
})


app.post('/create-user', async (req, res) => {
    try {
        const myuser = new User(req.body);
        await myuser.save();
        res.send(`${myuser}`);
    } catch (err) {
        res.send({ 'message': err });
    }

});
mongoose.connect(process.env.DB_STRING,
    {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    }
    , (err, conn) => {

        console.log('connected to database');
    })
app.listen(3000, () => {
    console.log('listening to 3000')
}); */
app.get('/', (req, res) => {
    res.send({
        user: ["abhi", "hegde"],
    })
});

app.post('/create', functions.register);
app.post('/login', functions.login);
app.post('/delete', functions.delete);
app.post('/add', (req, res) => {
    User.collection.findOne(
        {
            name: req.body.name,
        },
    ).then(
        (err, user) => {

            if (err != null) {
                res.send("found");
            }
            else {
                res.send("not found");
            }
        }
    );
})
mongoose.connect(
    process.env.DB_STRING,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
    (err, conn) => {
        console.log('DB connected');
    }

);

const p = process.env.PORT || 3000
app.listen(p, () => {
    console.log(`running at ${p}`);
})