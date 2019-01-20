'use strict';

function perfectSquare (number) {
    const root = Math.sqrt(number);
    if (number % root === 0) {
        return true;
    } else {
        return false;
    }
}

console.log(perfectSquare(121));
