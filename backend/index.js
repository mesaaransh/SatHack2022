const express = require('express')
const bodyParser = require("body-parser")
const cors = require('cors')

const app = express()
app.use(cors())

app.get("/", function(req, res){
    res.json('hello');
})

app.post("/api/login", function(req, res){
    var username = req.body.username;
    res.send(username);
})


app.listen(8000, ()=>{console.log("----------AppStarted-----------");})