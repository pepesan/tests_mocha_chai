import { assert } from 'chai';

describe('Prueba con timeout personalizado', () => {
    it('Debe ejecutar en menos de 2 segundos', function (done) {
        this.timeout(2000); // Aumentar el límite de tiempo a 2 segundos
        setTimeout(() => {
            assert.isTrue(true);
            done(); // Llama a done() para indicar que la prueba ha terminado
        }, 1500);
    });
});
