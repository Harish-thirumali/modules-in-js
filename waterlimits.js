const {celsiusToFahrenheit, fahrenheitToCelsius} = require(`./converters.js`);

const freezingPointF= celsiusToFahrenheit(0);
const boilingPointF = celsiusToFahrenheit(100);


console.log(fahrenheitToCelsius(96.8));

console.log(`the freezing point of water in fahrenheit is ${freezingPointF}`);
console.log(`the boiling point of water in fahrenheit is ${boilingPointF}`);