const Todo = require('../../types/Todo.js');
const todoInput = require('../../inputs/todoInput');
const todos = [
    {
        id: 1,
        todo: "Comer"
    }, 
    {
        id: 2,
        todo: "Respirar"
    }
]

const agregarTodo = (id, todo) => {
    const todoObject = {
        id: id,
        todo: todo
    }
    todos.push(todoObject);
    console.log("TODOS:", todos);
    return todoObject;
};

module.exports = {
    type: Todo,
    args: {
        todo: {
            type: todoInput
        }
    },
    resolve(root, args) {
         return agregarTodo(args.todo.id, args.todo.todo);
    }
}