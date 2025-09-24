// Exercice 5
// Écris un petit script qui utilise let pour stocker une température en Celsius, la convertit en Fahrenheit, et affiche le résultat.

function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

let celsius = 25;
let fahrenheit = celsiusToFahrenheit(celsius);
console.log(celsius + "°C = " + fahrenheit + "°F");

module.exports = { celsiusToFahrenheit };