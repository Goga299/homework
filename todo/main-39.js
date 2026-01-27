"use strict"

// {
//     id: 1,
//     text: "Todo",
//     is_completed: false,
// };
const todoKeys = {
    id: 'id',
    text: 'text',
    is_completed: 'is_completed'
};

const todos = [];

const getNewTodoId = (todos) => {
    return todos.reduce((maxId, todo) => {
        return Math.max(maxId, todo[todoKeys.id]);
    }, 0) + 1;
};

const createTodo = (todos, text) => {
    const newTodo = { 
        [todoKeys.id]: getNewTodoId(todos), 
        [todoKeys.text]: text, 
        [todoKeys.is_completed]: false
    };
    todos.push(newTodo);
    return newTodo;
};


const completedTodoById = (todos, todoId) => {
    const todo = todos.find((todo) => todo[todoKeys.id] === todoId);
    if (todo === undefined) {
        console.error(`Todo with id ${todoId} not found`);
        return null;
    }
    todo[todoKeys.is_completed] = !todo[todoKeys.is_completed];
    return todo;
};

const deletTodoById = (todos, todoId) => {
    const todoIndex = todos.findIndex((todo) => todo[todoKeys.id] === todoId);
    if (todoIndex === -1) {
        console.error(`Todo with id ${todoId} not found`);
        return todos;
    }
    todos.splice(todoIndex, 1);
    return todos;
};

