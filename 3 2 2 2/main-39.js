// Задача 1.
// Создайте объект person с несколькими свойствами, содержащими информацию о вас. Затем выведите значения этих свойств в консоль.
const person = {
    name: "grigor",
    age: 20,
    surname: "Gambaryan",
    profession: "programmer"
}

console.log(person);
// Задача 2.
// Создайте функцию isEmpty, которая проверяет является ли переданный объект пустым. Если объект пуст - верните true, в противном случае false.
function isEmpty(obj) {
    if (obj == null) return true;
    return Object.keys(obj).length === 0;
}

console.log(isEmpty({}));                  
console.log(isEmpty({ name: "Alex" }));       

// Задача 3.
// Создайте объект task с несколькими свойствами: title, description, isCompleted.
// Напишите функцию cloneAndModify(object, modifications), которая с помощью оператора spread создает копию объекта и применяет изменения из объекта modifications.
// Затем с помощью цикла for in выведите все свойства полученного объекта.
// 1. Создаём исходный объект task
const task = {
    title: "goga",
    description: "gambaryna"
};

function cloneAndModify(object, modifications) {
    return {
    ...object,
    ...modifications
    };
}

const updatedTask1 = cloneAndModify(task, {
    title: "grigor"
});

const updatedTask2 = cloneAndModify(task, {
    priority: "high",
    description: "amirxanyan"
});


console.log("Обновлённая задача 1:");
for (let key in updatedTask1) {
    console.log(`${key}: ${updatedTask1[key]}`);
}


console.log("Обновлённая задача 2:");
for (let key in updatedTask2) {
    console.log(`${key}: ${updatedTask2[key]}`);
}
// Задача 4.
// Создайте функцию callAllMethods, которая принимает объект и вызывает все его методы.

// Пример использования:
// const myObject = {
//     method1() {
//         console.log('Метод 1 вызван');
//     },
//     method2() {
//         console.log('Метод 2 вызван');
//     },
//     property: 'Это не метод'
// };
// callAllMethods(myObject);
