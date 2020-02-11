const drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40
};

// The array value order matters - will throw an error if wrongly set.
// Tuples are useful for csv file processing
type Drink = [string, boolean, number];
const pepsi: Drink = ['browm', true, 40];
console.log(pepsi);