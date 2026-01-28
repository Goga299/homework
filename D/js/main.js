"use strict";

const todoKeys = {
  id: "id",
  text: "text",
  is_completed: "is_completed",
};

const todos = [];

const errTodoNotFound = todoId => `Todo with id ${todoId} not found`;

const getNewTodoId = todos =>
  todos.reduce((maxId, todo) => Math.max(maxId, todo[todoKeys.id]), 0) + 1;

const createTodo = (todos, text) => {
  const newTodo = {
    [todoKeys.id]: getNewTodoId(todos),
    [todoKeys.text]: text,
    [todoKeys.is_completed]: false,
  };
  todos.push(newTodo);
  return newTodo;
};

const completeTodoById = (todos, todoId) => {
  const todo = todos.find(todo => todo[todoKeys.id] === todoId);

  if (!todo) {
    console.error(errTodoNotFound(todoId));
    return null;
  }
  todo[todoKeys.is_completed] = !todo[todoKeys.is_completed];
  return todo;
};

const deleteTodoById = (todos, todoId) => {
  const todoIndex = todos.findIndex(todo => todo[todoKeys.id] === todoId);
  if (todoIndex === -1) {
    console.error(errTodoNotFound(todoId));
    return todos;
  }
  todos.splice(todoIndex, 1);
  return todos;
};

// При помощи метода querySelector получаем элементы .form, .input и .todos
const form = document.querySelector(".form");
console.log(form);
const input = document.querySelector(".input");
console.log(input);
const todo = document.querySelector(".todos");
console.log(todo); 
// Создаем функцию createTodoElement(text), которая будет создавать todo в виде разметки
function createTodoElement(text) {
  const li = document.createElement("li");
  li.className = "todo-item";
  li.innerHTML = 
  `<li class="todo">
          <div class="todo-text">Задача 2</div>
          <div class="todo-actions">
            <button class="button-complete button">&#10004;</button>
            <button class="button-delete button">&#10006;</button>
          </div>
  </li>`;
  return li;
}
// const todoList = document.querySelector(".todos");
// const newTodo = createTodoElement();
// todoList.appendChild(newTodo);

// Создаем функцию handleCreateTodo(todos, text), которая будет вызывать createTodo и createTodoElement
function handleCreateTodo(todos, text) {
    const todoList = document.querySelector(".todos");
    const newTodo = createTodoElement();
    todoList.appendChild(newTodo);
};

