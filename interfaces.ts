const oldCivic = {
    name: 'civic',
    year: 2000,
    broken: true
};

const printVehicle = (vehicle: {name: string, year: number, broken: boolean}): void => {
    console.log(`Name: ${vehicle.name}`);
    console.log(`Year: ${vehicle.year}`);
    console.log(`Is broken: ${vehicle.broken?'yes':'no'}`);
};

printVehicle(oldCivic);