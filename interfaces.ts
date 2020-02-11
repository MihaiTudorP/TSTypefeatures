interface Vehicle {
  name: string;
  year: number;
  broken: boolean;
  summary(): string;
}

const oldCivic = {
  name: 'civic',
  year: 2000,
  broken: false,
  summary(): string {
    return `This is a ${this.name} made in ${this.year} and it is ${
      this.broken ? 'broken' : 'running like a charm'
    }.`;
  }
};

const printVehicle = (vehicle: Vehicle): void => {
  console.log(`${vehicle.summary()}`);
};

printVehicle(oldCivic);
