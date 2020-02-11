const drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40
};

// The array value order matters - will throw an error if wrongly set.
// Tuples are useful for csv file processing
type Drink = [string, boolean, number];
const pepsi: Drink = ['browm', true, 40];
const tea: Drink = ['red', false, 10];
const espresso: Drink = ['black', false, 0];
console.log(pepsi);
console.log(espresso);
console.log(tea);

// Tuple vs object
// Standard - objects are preferred
const carSpecs: [number, number] = [400, 3354];
const carStats = {
    horsePower: 400,
    weight: 3354
};