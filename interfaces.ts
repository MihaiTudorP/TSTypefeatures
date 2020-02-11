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

const printSummary = (item: Reportable): void => {
  console.log(`${item.summary()}`);
};

printSummary(oldCivic);

const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `This is a ${this.color} ${this.carbonated?'carbonated':'still'} drink with ${this.sugar} grams of sugar.`;
  }
};

printSummary(drink);