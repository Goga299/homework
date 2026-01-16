const getFactiroal = num => {
    let factorial = 1;
    for (let i = 1; i <= num; i++ ) {
        factorial *= i;
    }
    return factorial;
}

const factorial = getFactiroal(7);

// стрелачная функция

const isOdd = num => {
    return num % 2 !==0;
}

console.log(isOdd
    
    