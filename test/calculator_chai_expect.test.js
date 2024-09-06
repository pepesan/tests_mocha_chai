import { expect } from 'chai';
import { describe, it } from 'mocha';
import {addTested} from '../app/calculator.js';
// Supongamos que tienes una función 'calcularDescuento' que calcula el descuento en una compra
function calcularDescuento(total, porcentajeDescuento) {
    if (total < 0 || porcentajeDescuento < 0 || porcentajeDescuento > 100) {
        throw new Error('Entradas inválidas');
    }

    const descuento = (total * porcentajeDescuento) / 100;
    return total - descuento;
}

// Supongamos que tienes una función 'esNumeroPar' que verifica si un número es par
function esNumeroPar(numero) {
    return numero % 2 === 0;
}
describe("Calcultator tests using EXPECT interface from CHAI module: ", function () {
    describe("Check addTested Function: ", function () {
        it("Check the returned value using: expect(value).to.equal('value'): ", function () {
            let result = addTested("text");
            expect(result).to.equal("text tested");
        });
        it("Check the returned value using: expect(value).to.be.a('value')): ", function () {
            let result = addTested("text");
            expect(result).to.be.a('string');
        });
        it("Check the returned value using: expect(value).to.have.lengthOf(value): ", function () {
            let result = addTested("text");
            expect(result).to.have.lengthOf(11);
        });
    });
    describe('Pruebas para la función calcularDescuento', () => {
        it('debería calcular correctamente el descuento', () => {
            const resultado = calcularDescuento(100, 10);
            expect(resultado).to.equal(90);
        });

        it('debería manejar correctamente descuentos del 0%', () => {
            const resultado = calcularDescuento(50, 0);
            expect(resultado).to.equal(50);
        });

        it('debería manejar correctamente descuentos del 100%', () => {
            const resultado = calcularDescuento(75, 100);
            expect(resultado).to.equal(0);
        });

        it('debería lanzar un error para entradas inválidas', () => {
            expect(() => calcularDescuento(-50, 20)).to.throw('Entradas inválidas');
        });
    });
    describe('Pruebas para la función esNumeroPar', () => {
        it('debería devolver true para números pares', () => {
            expect(esNumeroPar(2)).to.be.true;
            expect(esNumeroPar(0)).to.be.true;
            expect(esNumeroPar(-4)).to.be.true;
        });

        it('debería devolver false para números impares', () => {
            expect(esNumeroPar(3)).to.be.false;
            expect(esNumeroPar(7)).to.be.false;
            expect(esNumeroPar(-5)).to.be.false;
        });
    });

});






