// prueba.js
const assert = require('chai').assert;
const { sumar } = require('../app/funciones'); // Importar la función desde el archivo funciones.js

describe('Prueba de la función sumar', () => {
    it('Debe sumar dos números correctamente', () => {
        const resultado = sumar(2, 3);
        assert.equal(resultado, 5);
    });

    it('Debe sumar números negativos correctamente', () => {
        const resultado = sumar(-2, -3);
        assert.equal(resultado, -5);
    });

    it('Debe sumar números decimales correctamente', () => {
        const resultado = sumar(1.5, 2.5);
        assert.equal(resultado, 4);
    });
});

