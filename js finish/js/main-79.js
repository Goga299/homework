import { getTodosFromLocalStorage } from "./storage.js";
import { renderTodos, initaTodohandlers } from "./dom.js";

const todos = getTodosFromLocalStorage() || [];


document.addEventListener("DOMContentLoaded", () => {
  renderTodos(todos);
  initaTodohandlers(todos);
});




