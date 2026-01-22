// Задание 1.
const users = [
    { name: 'Alex', age: 24, isAdmin: false },
    { name: 'Bob', age: 13, isAdmin: false },
    { name: 'John', age: 31, isAdmin: true },
    { name: 'Jane', age: 20, isAdmin: false },
];

users.push(
    { name: 'Ann', age: 19, isAdmin: false },
    { name: 'Jack', age: 43, isAdmin: true }
);

console.log(users);

// Задание 2.
function getUserAverageAge(users) {
    if (users.length === 0) return 0;

    let sum = 0;

    for (const user of users) {
        sum += user.age;
    }

    return sum / users.length;
}

console.log(getUserAverageAge(users));
// Задание 3.
// Используя массив пользователей users из предыдущего задания, напишите функцию getAllAdmins(users), которая возвращает массив всех администраторов.
function getAllAdmins(users) {
    const admins = [];

    for (const user of users) {
        if(user.isAdmin) {
            admins.push(user);
        }
    }
    return admins;
}

const admins = getAllAdmins(users);
console.log(admins);

// Задание 4.
// Напишите функцию first(arr, n), которая возвращает первые n элементов массива. Если n == 0, возвращается пустой массив [], если n == undefined, то возвращается массив с первым элементом.
