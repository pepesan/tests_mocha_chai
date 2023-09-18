const assert = require('chai').assert;

describe('Suite de prueba con configuración y limpieza', () => {
    let datos; // Variable que utilizaremos en las pruebas

    // Configuración antes de ejecutar las pruebas
    before(() => {
        datos = [1, 2, 3];
    });

    // Limpieza después de ejecutar las pruebas
    after(() => {
        datos = [];
    });

    it('Debe tener tres elementos iniciales', () => {
        assert.lengthOf(datos, 3);
    });

    it('Debe agregar un elemento correctamente', () => {
        datos.push(4);
        assert.lengthOf(datos, 4);
    });
});
