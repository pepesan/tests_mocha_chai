import { assert } from 'chai';

describe('Operaciones matemáticas', () => {
    describe('Suma', () => {
        it('Debe sumar números positivos correctamente', () => {
            assert.equal(2 + 3, 5);
        });

        it('Debe sumar números negativos correctamente', () => {
            assert.equal(-2 + (-3), -5);
        });
    });

    describe('Resta', () => {
        it('Debe restar números positivos correctamente', () => {
            assert.equal(5 - 3, 2);
        });

        it('Debe restar números negativos correctamente', () => {
            assert.equal(-2 - (-3), 1);
        });
    });
});
