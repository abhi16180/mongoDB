const express = require('express');
const app = express();
const mongoose = require('mongoose');
const User = require("./model/user");
require("dotenv/config");

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
app.get( '/',(req,res)=>{
res.send('get request')
});

app.get('/display',(req,res)=>{
    var user=['one','two'];
    res.send({
        'user':user
    })
})
mongoose.connect(  
    process.env.DB_STRING, 
    {
        useNewUrlParser:true, 
        useUnifiedTopology:true, 
    }, 
    (err,conn)=>{
    console.log('DB connected');
    }
    
);

const p=process.env.PORT
app.listen(p,()=>{
console.log( `running at ${p}`);
})