
// Esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// Solo un registro en consola para nosotros
console.log(sum(7,3))


// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}


const fromEuroToDollar = (eur) => {
    return eur * oneEuroIs ["USD"]
}
    console. log (fromEuroToDollar (1))



const fromDollarToYen = (dollars) => {
    let valueInEuro = dollars/oneEuroIs["USD"];
    return valueInEuro * oneEuroIs["JPY"]
}
    console.log (fromDollarToYen (1.07))



const fromYenToPound = (yen) => {
    let valueInYen = yen/oneEuroIs["JPY"];
    return valueInYen * oneEuroIs["GBP"]
}
    console.log (fromYenToPound (156.5))

// Exporta la función para usarla en otros archivos 
// (similar a la palabra clave "export" cuando se usa webpack)
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound};