// Задача 1.
// Напишите функцию calculateFinalPrice, которая принимает базовую цену товара, процент скидки и налоговую ставку. Функция должна вычислять скидку, затем прибавлять налог и возвращать итоговую цену.

// Пример работы:
// console.log(calculateFinalPrice(100, 10, 0.2)); // 108
// console.log(calculateFinalPrice(100, 10, 0)); // 90

// function calculateFinalPrice (price,discount,bet){
//     const discount = price * (discount / 100);
//     const result = discount * bet;

// }
// console.log(calculateFinalPrice(100, 10, 0.2)); 

function calculateFinalPrice(price,discount,bet) {

    const discountAmount = price * (discount / 100);
    const priceDiscount = price - discount;
    const Amount = priceDiscount * (bet / 100);
    const finalPrice = priceDiscount + bet;
    return finalPrice;
}
console.log(calculateFinalPrice(1000, 20, 20));     
console.log(calculateFinalPrice(2500, 15, 22));     
console.log(calculateFinalPrice(4999, 5, 9));       
// Задача 2.
// Напишите функцию checkAccess, которая принимает имя пользователя и пароль. Если имя пользователя равно "admin" и пароль равен "123456", функция должна возвращать строку "Доступ разрешен", иначе — "Доступ запрещен".
function checkAccess(username, password) {
    if (username === "admin" && password === "123456") {
        return "Доступ разрешен";
    }
    return "Доступ запрещен";
}

console.log(checkAccess("admin", "123456"));     
console.log(checkAccess("admin", "12345"));      
console.log(checkAccess("user", "123456"));      
console.log(checkAccess("Admin", "123456"));     
// Задача 3.
// Напишите функцию getTimeOfDay, которая принимает текущее время (число от 0 до 23) и возвращает строку:
// "Ночь" (с 0 до 5 часов),
// "Утро" (с 6 до 11 часов),
// "День" (с 12 до 17 часов),
// "Вечер" (с 18 до 23 часов).
// Если введённое значение не попадает в этот диапазон, возвращайте `"Некорректное время"`.
function getTimeOfDay(hour) {

    if (hour < 0 || hour > 23 || !Number.isInteger(hour)) {
        return "Некорректное время";
    }

    if (hour >= 0 && hour <= 5) {
        return "Ночь";
    }

    if (hour >= 6 && hour <= 11) {
        return "Утро";
    }

    if (hour >= 12 && hour <= 17) {
        return "День";
    }

    return "Вечер";
}
console.log(getTimeOfDay(3));    
console.log(getTimeOfDay(8));    
console.log(getTimeOfDay(14));  
console.log(getTimeOfDay(21));   
console.log(getTimeOfDay(24));   
console.log(getTimeOfDay(-1));   
console.log(getTimeOfDay(3.5));  
// Задача 4.
// Напишите функцию findFirstEven, которая принимает два числа start и end и находит первое чётное число в указанном диапазоне.
// Если чётного числа в этом диапазоне нет, функция должна вернуть "Чётных чисел нет".

// Пример работы:
// console.log(findFirstEven(1, 10)); // 2
// console.log(findFirstEven(9, 9)); // "Чётных чисел нет"
function findFirstEven(start, end) {
    for (let i = start; i <= end; i = i + 1) {
        if (i % 2 === 0) {
            return i;          
        }
    }
    return "Чётных чисел нет";
}
console.log(findFirstEven(3, 10));   
console.log(findFirstEven(7, 15));   
console.log(findFirstEven(19, 13));   
console.log(findFirstEven(2, 2));   
console.log(findFirstEven(8, 5));  
console.log(findFirstEven(4, 100));  
