const user = {
    name: 'Grigor',
    age: 21,
    isAdmin: true
}

console.log(user.name)
console.log(user.age)
console.log(user.isAdmin)

const fill = {    
    fills: function(name) {  
    return `Hello ${name}`;  
    }  
};

console.log(fill.fills('Alice')); 
console.log(fill.fills('Bob'));    

const users = [
    {
        id: 1,
        name: 'гога',
        role: 'user'
    },
    {
        id: 2,
        name: 'Армен',
        role: 'admin'
    },
    {
        id: 3,
        name: 'Вова',
        role: 'user'
    },
    {
        id: 4,
        name: 'Галина',
        role: 'admin'
    },
    {
        id: 5,
        name: 'Лусинэ',
        role: 'user'
    },
    {
        id: 6,
        name: 'Владислав',
        role: 'admin'
    },
]

let regularusers = 0;

for(let user of users) {
    if (user.role !== 'admin')
        regularusers++
}

console.log ('Количество простых пользоватклей',  regularusers)