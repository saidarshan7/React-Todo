const mongoose = require('mongoose');
const dotenv = require('dotenv').config({path:'./.env'})


mongoose.connect(process.env.MONGO_URI)
.then(()=>{
console.log("helo g connectedd to database")
})
.catch((err)=>{
    console.log(err)
})



const createSchema = new mongoose.Schema({
    title: String,
    description: String,
    completed : Boolean 
})

const todo = mongoose.model('todos',createSchema)

module.exports = {
    todo
}