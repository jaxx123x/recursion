



function fibs(number) {
    const array = [];
    if (number >= 2) {
        array[0] = 0;
        array[1] = 1;
        for (let i = 0; i < number - 2; i++) {
            array.push(array[array.length - 2] + array[array.length - 1]);
        }
    } 
    else if (number === 1) {
        array[0] = 0;
    }
    
    console.log(array);
}

 
fibs(8);






function fibsRec(number, array = [0, 1]) {
    const newNum = number - 2;
    if (newNum <= 0) {
        console.log(array);
        return;
    }
    array.push(array[array.length - 1] + array[array.length - 2]);
    fibsRec(number - 1, array);
}

fibsRec(8);



secondFibsRec(8);
