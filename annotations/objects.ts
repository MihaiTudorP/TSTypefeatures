const profile = {
    profileName: 'Alex',
    age: 20,
    coords:{
        lat: 46,
        lng:45
    },
    setAge(age:number):void{
        this.age = age;
    }
};

//ES2015 destructuring
const {profileName, age}:{age:number, profileName:string} = profile;
console.log(`${profileName}'s age is ${age}`);
const {coords: {lat, lng}} : {coords: {lat:number, lng:number}} = profile;
console.log(`And coordinates are ${lat} LAT ${lng} LONG`);