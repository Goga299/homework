"use strict"

const numbar = [1, 2, 3, 4, 5];


let sum = 0;
// numbar.forEach(function (numbar) {
//     sum += numbar;
// });



function forEach (array, callbackFunc) {
    for(let i = 0; i < array.length; i++) {
    callbackFunc(array[i], i, array);
    }
}


forEach(numbar, function (numbar) {
    sum += numbar;
});
console.log(sum);

