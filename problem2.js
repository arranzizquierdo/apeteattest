'use strict';

let dividersArr=[];
let sum = 0;

function poorNumber (number) {
    for (let i=0; i<number; i++) {
        if (number % i === 0) {
            dividersArr.push(i)
        }
    }
    for (let i=0; i<dividersArr.length; i++) {
        sum += dividersArr[i];
    }
    if ( sum > number) {
        return false
    } else {
        return true
    }
}


console.log('Número deficiente () =>', poorNumber(30))
console.log(dividersArr);
console.log(sum)