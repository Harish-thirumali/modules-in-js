import { celsiusToFahrenheit, fahrenheitToCelsius } from "./converters.js";
import { milliToCenti, centiToMeter } from "./converters.js";
import nano from './converters.js';

const buttonElement = document.getElementById('button');
buttonElement.addEventListener('click', clickMe);

function clickMe() {
    let element = document.getElementById('container');
    element.innerHTML = `<h1>Boiling Point is : ${celsiusToFahrenheit(100)} & Freezing Point is : ${celsiusToFahrenheit(0)}
    Human body temprature 96.5 f is ${fahrenheitToCelsius(96.5)} & Boiling  point is ${fahrenheitToCelsius(0)}  <br><br> 100 milli meter is ${milliToCenti(100)} centi-meters, <br> <br> 10000 centi meters is ${centiToMeter(10000)} meters, <br><br> one nanometers is ${nano} meters </h1>`;
}
console.log(`Water Boiling point is ${celsiusToFahrenheit(100)} Degree Fahrenheit`);
console.log(`human Body temprature is ${celsiusToFahrenheit(96.5)} & boiling point is ${celsiusToFahrenheit(0)}`);
