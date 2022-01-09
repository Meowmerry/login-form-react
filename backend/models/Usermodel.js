const mongoose = require('mongoose');

// Create todo schema and model
const todoSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true,
    },
});

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    todos: [todoSchema]

});


const Todomodel = mongoose.model('Todo', todoSchema);

const userModel = mongoose.model('User', userSchema);

module.exports = { Todomodel, userModel };