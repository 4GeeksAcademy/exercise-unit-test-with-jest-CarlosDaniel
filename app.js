// Esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// Solo un registro en consola para nosotros
console.log(sum(7,3))

// Exporta la función para usarla en otros archivos 
// (similar a la palabra clave "export" cuando se usa webpack)
// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}
// Declaramos una función con el nombre exacto "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}
// Tenemos que incluir la función en el exports para que sea exportada a otros archivos como test.js
//funcion dollar to yen
const fromDollarToYen = function(valueInDollar) {
    //Convertimos el valor a yenes
    let valueInYen = valueInDollar * 156.5;
    return valueInYen
}
//function yen to pound
const fromYenToPound = function(valueInYen) {
        //convirtiendo a pounds
        let valueInPound = valueInYen * 0.87;
        return valueInPound
    }
    module.exports = { sum, fromEuroToDollar ,fromDollarToYen,fromYenToPound}
