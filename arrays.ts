const carMakers = ['Ford', 'Toyota', 'Mitsubishi', 'Dacia', 'Renault'];
const dates = [new Date(), new Date()];
const carsByMake = [['Escort'], ['Corolla'], ['Lancer'], ['Sandero'], ['Megane']];

// Help with inference when extracting values
const car = carMakers[0];
console.log(car);
const myCar = carMakers.pop();
console.log(myCar);

// Prevent incompatible values
// Help with map
let makers = carMakers.map((carMaker)=>{
    return carMaker.toUpperCase();
});
console.log();
makers.map((maker)=>{console.log(maker)});

// Flexible types
const importantDates: (Date|string)[] = [new Date(), 'Valentine\'s day'];
importantDates.push('2020-09-14');
importantDates.push(new Date());
console.log(importantDates);