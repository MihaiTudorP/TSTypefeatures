class ArrayOfNumbers{
    constructor(public collection: number[]) {
    }

    get(index: number):number{
        return this.collection[index];
    }
}

class ArrayOfStrings{
    constructor(public collection:string[]){
    }

    get(index: number):string{
        return this.collection[index];
    }
}

class ArrayOfAnything<T>{
    constructor(public collection:T) {
    }

    get(index:number):T{
        return this.collection[index];
    }
}

const collection = new ArrayOfAnything(['a', 'b', 'c']);
console.log(collection.get(2));

function printStrings(arr: string[]) {
    for(let i=0; i<arr.length; i++){
        console.log(arr[i])
    }
}

function printIntegers(arr: number[]){
    for(let i=0; i<arr.length; i++){
        console.log(arr[i])
    }
}

function printAnything<T>(arr: T[]) {
    for(let i=0; i<arr.length; i++){
        console.log(arr[i])
    }
}

printAnything<string>(['a', 'b', 'c']);

// Generic constraints

class Car{
    print(){
        console.log('I am a car')
    }
}

class House{
    print(){
        console.log('I am a house')
    }
}

interface Printable {
    print():void
}

function printHousesOrCars<T extends Printable>(arr: T[]) {
    for (let i=0; i<arr.length; i++){
        arr[i].print();
    }
}

printHousesOrCars<Car>([new Car(), new Car]);
printHousesOrCars<House>([new House(), new House()]);