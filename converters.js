//old function
/* function celsiusToFahrenheit(celsius) {
    return celsius * (9 / 5) + 32;
}
 */
//Exporting old function
/* module.exports.celsiusToFahrenheit = celsiusToFahrenheit;

//declearing another Function & Exportin on the same line
module.exports.fahrenheitToCelsius = function (fahrenheit) {
    return (fahrenheit - 32) * (5 / 9);
} */

//First column

 export function celsiusToFahrenheit(celsius) {
    return celsius * (9 / 5) + 32;
}

//SecoundFunction
export const fahrenheitToCelsius = function(fahrenheit){
    return (fahrenheit - 32) * (5/9);
};

//third Function
const milliToCenti = (millimeter) =>{
    return millimeter / 100;

}

//Fourth function

const centiToMeter = (centimeter) =>{
    return centimeter * 100;

}

//A plain Variable
 const nanoMeter = 0.00000001;

export default nanoMeter;
//export { nanoMeter as Default };

export { milliToCenti }

export {centiToMeter}
//export { celsiusToFahrenheit, fahrenheitToCelsius };