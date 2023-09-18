const assert = require('chai').assert;

describe('Uso de cadenas interpoladas en descripciones', () => {
    const nombre = 'Juan';

    it(`Debe saludar a ${nombre} correctamente`, () => {
        const saludo = `Hola, ${nombre}!`;
        assert.equal(saludo, 'Hola, Juan!');
    });
});
