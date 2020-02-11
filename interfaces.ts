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
