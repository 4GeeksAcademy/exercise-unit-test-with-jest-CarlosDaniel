// Importar la función sum del archivo app.js
const { sum, fromDollarToYen, fromYenToPound } = require('./app.js');

// Comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    // Dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // Esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});
test("One euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})
test("One dolar should to be 156.5 yenes", function(){
    //Importo la funcion
    const { fromDollarToYen} = require('./app.js');
    //uso la f
    const yenes = fromDollarToYen(3);
    //si 1 dolar es 156.5 yenes, entonces 3 dolares deben ser (3*156.5)
    const expected = 3 * 156.5;
    //prueba
    expect(fromDollarToYen(3)).toBe(469.5);//3 dolar son 469.5
})
test("One yen should to be 0.87 gbp", function(){
    //importo
    const { fromYenToPound} = require('./app.js');
    //uso
    const pounds = fromYenToPound(2);
    //si un yen es 0.87 pounds entonces 2 yenes deben ser (2*0.87)
    const expected = 2 * 0.87;
    //prueba
    expect(fromYenToPound(2)).toBe(1.74);// 2 yen son 1.74 pound
})