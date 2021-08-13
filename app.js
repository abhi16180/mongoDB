const express = require('express');
const app = express();
const mongoose = require('mongoose');
const User = require("./model/user");
require("dotenv/config")

app.use(express.json())



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
        res.send('user');
    } catch (err) {
        res.send({ 'message': err });
    }

});
mongoose.connect(process.env.DB_STRING,
    {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    }
    , (req, res) => {

        console.log('connected to database');
    })
app.listen(3000, () => {
    console.log('listening to 3000')
});