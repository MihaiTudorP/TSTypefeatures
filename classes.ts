class Vehicle{
    constructor(public color: string) {
    }

    protected  honk():void{
        console.log('beep');
    }
}

class Car extends Vehicle{
    constructor(public wheels, color) {
        super(color);
    }
    private drive(): void{
        console.log('vroooooom!');
    }

    startDrivingProcess():void{
        this.drive();
        this.honk()
    }
}

const car = new Car(4, 'blue');
console.log(`The car has ${car.wheels} wheels`);
car.startDrivingProcess();
console.log(car.color);
const vehicle = new Vehicle('orange');
console.log(vehicle);
console.log(car);