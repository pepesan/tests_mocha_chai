// test.js
const sinon = require('sinon');
const assert = require('assert');
const calculator = require('../app/funciones');

describe('Pruebas de la calculadora', function () {
    it('debería llamar a la función sumar con los argumentos correctos', function () {
        // Creamos un espía (spy) para la función sumar
        const spy = sinon.spy(calculator, 'sumar');

        // Llamamos a la función que queremos probar
        calculator.sumar(3, 4);

        // Verificamos si la función sumar fue llamada con los argumentos correctos
        sinon.assert.calledWith(spy, 3, 4);

        // Restauramos la función original después de la prueba
        spy.restore();
    });

    it('debería devolver el resultado correcto', function () {
        const resultado = calculator.sumar(3, 4);

        // Verificamos si la función devuelve el resultado esperado
        assert.strictEqual(resultado, 7);
    });
});
