const express = require('express');
const app = express();
const bodyParser = require('body-parser')
var jwt = require('jsonwebtoken');
app.use(express.json())


app.use(bodyParser.urlencoded())

// parse application/json
app.use(bodyParser.json())

app.post("/todo", (req,res)=>{

})

app.get("/todo", (req,res)=>{

})

app.put("/completed", (req,res)=>{

})

