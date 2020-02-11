let apples: number = 5;
let speed: string = 'fast';
let hasName: boolean = true;

let nothingMuch : null = null;
let nothing: undefined = undefined;

// built-in objects
let now: Date = new Date();

// Array
let colors : string[] = ['red', 'green', 'blue'];
let numbers: number[] = [1, 2, 3, 10, 17];
let truths: boolean[] = [true, true, false];

// Classes
class Car{

}

let car : Car;

// Object literal
let point : {x: number, y: number} = {
    x: 10,
    y:20
};

// Functions
const logNumber: (i: number) => void = (i: number) => {
    console.log(i);
}

// type inference
let velocity = 400;

// When to use annotations

// 1: Function that returns the 'any' type
const json = '{"x": 10, "y": 20}'
const coordinates : {x: number, y: number} = JSON.parse(json);
console.log(coordinates);

// 2: Delayed initialization
let words = ['red', 'green', 'blue'];
let foundWord : boolean;

for (let i=0;i<words.length;i++){
    if ('green'===words[i]){
        foundWord = true;
    }
}

// 3: Type cannot be inferred correctly
numbers = [10, 20, -7, -9];
let numberAboveZero: boolean|number = false;

for (let i=0; i< numbers.length; i++){
    if (numbers[i]>0){
        numberAboveZero = numbers[i];
    }
}
