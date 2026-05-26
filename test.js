"use strict"
const prompt = require('prompt-sync')({sigint: true});

// Task1
function pyramid(size, char) {
    let str ='';
    for (let i = 1; i <= size; i++){
        for (let j = 0; j < size - i; j++){
            str += ' ';
        }
        for (let k = 1; k <= i; k++){
            str += `${char} `; 
        }
        console.log(str);
        str = ''; 
    }
}



// Task 2
function checkFever(temp) {
    if (temp < 35) console.log('Hypothermia');
    else if (temp < 37.7) console.log('No fever');
    else if (temp < 38.5) console.log('You have a fever, but nothing to worry about');
    else console.log('Hyperthermia')
}

let temp;
do {
    temp = Number(prompt('Enter your body-temperature: '));
} while(Number.isNaN(temp));
feverCheck(temp);



// Task 3
function areaOfCircle(radius) {
    return (radius ** 2) * Math.PI;
}

let radius;
do {
    radius = Number(prompt('Enter radius of the circle: '));
} while(Number.isNaN(radius) || radius < 0);
console.log(`Area: ${areaOfCircle(radius).toFixed(2)}`);

