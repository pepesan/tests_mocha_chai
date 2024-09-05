import { assert } from 'chai';

describe('Suite de prueba con configuración y limpieza por prueba', () => {
    let datos; // Variable que utilizaremos en las pruebas

    // Configuración antes de cada prueba
    beforeEach(() => {
        datos = [1, 2, 3];
    });

    // Limpieza después de cada prueba
    afterEach(() => {
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
