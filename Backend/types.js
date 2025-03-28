const zod = require('zod');






const createTask = zod.object({
    title : zod.string(),
    description: zod.string()
})

const updateTodo = zod.object({
    id: zod.string()
})  

module.export = {
    createTask,updateTodo
}  