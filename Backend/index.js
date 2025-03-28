const express = require('express');
const app = express();
const zod = require('zod')
const bodyParser = require('body-parser')
var jwt = require('jsonwebtoken');
const {createTodo} = require('./types.js')
const {todo} = require('./db.js')

app.use(express.json())


app.use(bodyParser.urlencoded())

// parse application/json
app.use(bodyParser.json())

app.post("/todo", async (req,res)=>{
const payLoad = req.body;
const parsePayload = createTodo.safeParse(payLoad);

if(!parsePayload.success) {
    res.status(411).json({
        msg: "you sent the wrong inputs",
    })
    return;
}
try {
    await todo.create({
        title:payLoad.title,
        description: payLoad.description,
        completed:false,
    })
     
    res.status(200).json({
        msg: "Task Added Succesfully!!"
    })
    
} catch (error) {
    res.status(400).json({
        msg: "Sorry there was an error !!!"
    })
}





})

app.get("/todo",async (req,res)=>{

    await todo.find({})
    .then((result)=>{
      res.json({
        result
      })
    })

})

app.put("/completed", async (req,res)=>{

    const payLoad = req.body;
    const parsePayload = updateTodo.safeParse(payLoad);
    
    if(!parsePayload.success) {
        res.status(411).json({
            msg: "you sent the wrong inputs",
        })
        return;
    }

    try {
        await todo.findByIdAndUpdate({_id:payLoad._id},{
            completed:true
        }, {
            new: true
          })

          res.status(200).json({
            msg: "congrats TASK is COmpleted!!!!!!"
          })
    } catch (error) {
        res.json({
            msg: "there was an error while deleting Task"
        })
    }
    
})

