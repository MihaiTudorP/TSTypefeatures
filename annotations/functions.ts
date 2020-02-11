// Functiom declaration ->  types must be specified for arguments and return value
const add = (a: number, b: number) : number => {
    return a + b;
};

function divide(a: number, b: number) : number{
    return a/b;
}

const multiply = function (a: number, b: number) : number {
    return a * b;
};

const logger = (message: string):void => {
    console.log(message);
};

const throwError = (message: string): string => {
    if (!message) {
        throw new Error(message);
    }
    return message;
};

const forecast = {
    date: new Date(),
    weather: 'sunny'
};

const logWeather = (forecast: {date: Date, weather: string}) : void => {
    console.log(`The weather today, ${forecast.date} is ${forecast.weather}.`);
};

const logWeatherES2015 = ({date, weather}:{date: Date, weather: string} ) => {
    console.log(`The weather today, ${date} is ${weather}.`);
};

logWeather(forecast);
logWeatherES2015(forecast);