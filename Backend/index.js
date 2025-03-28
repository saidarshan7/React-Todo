const express = require('express');
const app = express();
const zod = require('zod')
const bodyParser = require('body-parser')
var jwt = require('jsonwebtoken');
const {createTodo} = require('./types.js')

app.use(express.json())


app.use(bodyParser.urlencoded())

// parse application/json
app.use(bodyParser.json())

app.post("/todo", (req,res)=>{
const payLoad = req.body;
const parsePayload = createTodo.safeParse(payLoad);

if(!parsePayload.success) {
    res.status(411).json({
        msg: "you sent the wrong inputs",
    })
    return;



}


})

app.get("/todo", (req,res)=>{

})

app.put("/completed", (req,res)=>{

    const payLoad = req.body;
    const parsePayload = updateTodo.safeParse(payLoad);
    
    if(!parsePayload.success) {
        res.status(411).json({
            msg: "you sent the wrong inputs",
        })
        return;
    }
    
})

