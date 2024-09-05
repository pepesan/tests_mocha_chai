import { assert } from 'chai';

describe('Prueba de funciones asincrónicas', () => {
    it('Debe resolver una promesa correctamente', async () => {
        const resultado = await Promise.resolve(42);
        assert.equal(resultado, 42);
    });

    it('Debe manejar un error en una promesa', async () => {
        try {
            await Promise.reject(new Error('¡Error!'));
        } catch (error) {
            assert.instanceOf(error, Error);
            assert.equal(error.message, '¡Error!');
        }
    });
});
