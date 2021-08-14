const express = require('express');
const app = express();
const mongoose = require('mongoose');
const User = require("./model/user");

require("dotenv").config();
//TODO: EE import eethara ne iravu bcoz this config function loads the key=value that u enter in the .env file
//TODO:aa file li key=value format li iravu
//TODO:This function will then change it to {key:"value"} format and load it to process.env
//TODO:That is how we get access to the value

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
    , (err, conn) => {
        if (err) console.log(`Error in connecting ${err}`)
        else {
            console.log(`connected to database ${conn.connection.host}`);
        }
    });
//TODO:Ee function na callback li req an res irtille , bcoz it is not a request
//TODO:idralli just err and returned connection irtu ashte


app.listen(3000, () => {
    console.log('listening to 3000')
});