interface Reportable {
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

const printVehicle = (vehicle: Reportable): void => {
  console.log(`${vehicle.summary()}`);
};

printVehicle(oldCivic);
