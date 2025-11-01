/*
    Todo {
        title: string,
        description: string,
        completed: boolean
    }
*/
const mongoose = require("mongoose");
// mongodb url handy
// .env
mongoose.connect("mongodb+srv://admin:admin@cluster0.xoe1huc.mongodb.net/todos")
const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
}