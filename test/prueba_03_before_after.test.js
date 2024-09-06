import { assert } from 'chai';

describe('Suite de prueba con configuración y limpieza', () => {
    let datos; // Variable que utilizaremos en las pruebas

    // Configuración antes de ejecutar las pruebas
    before(() => {
        console.log("before");
        datos = [1, 2, 3];
    });

    // Limpieza después de ejecutar las pruebas
    after(() => {
        console.log("after");
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
