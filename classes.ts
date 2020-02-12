class Vehicle{
    constructor(public color: string) {
    }

    protected  honk():void{
        console.log('beep');
    }
}

class Car extends Vehicle{
    private drive(): void{
        console.log('vroooooom!');
    }

    startDrivingProcess():void{
        this.drive();
        this.honk()
    }
}

const car = new Car('blue');
car.startDrivingProcess();
console.log(car.color);
const vehicle = new Vehicle('orange');
console.log(vehicle);