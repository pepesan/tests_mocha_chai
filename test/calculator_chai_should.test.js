const should = require('chai').should();
const { describe, it } = require('mocha');
const calculator = require("../app/calculator");

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
describe("Calculator tests using SHOULD interface from CHAI module: ", function () {
    describe("Check addTested Function: ", function () {
        it("Check the returned value using: value.should.equal(value): ", function () {
            let result = calculator.addTested("text");
            result.should.equal("text tested");
        });
        it("Check the returned value using: value.should.be.a('value'): ", function () {
            result = calculator.addTested("text");
            result.should.be.a('string');
        });
        it("Check the returned value using: expect(value).to.have.lengthOf(value): ", function () {
            result = calculator.addTested("text");
            result.should.have.lengthOf(11);
        });
    });
    describe('Pruebas para la función calcularDescuento', () => {
        it('debería calcular correctamente el descuento', () => {
            const resultado = calcularDescuento(100, 10);
            resultado.should.equal(90);
        });

        it('debería manejar correctamente descuentos del 0%', () => {
            const resultado = calcularDescuento(50, 0);
            resultado.should.equal(50);
        });

        it('debería manejar correctamente descuentos del 100%', () => {
            const resultado = calcularDescuento(75, 100);
            resultado.should.equal(0);
        });

        it('debería lanzar un error para entradas inválidas', () => {
            (() => calcularDescuento(-50, 20)).should.throw('Entradas inválidas');
        });
    });
    describe('Pruebas para la función esNumeroPar', () => {
        it('debería devolver true para números pares', () => {
            esNumeroPar(2).should.be.true;
            esNumeroPar(0).should.be.true;
            esNumeroPar(-4).should.be.true;
        });

        it('debería devolver false para números impares', () => {
            esNumeroPar(3).should.be.false;
            esNumeroPar(7).should.be.false;
            esNumeroPar(-5).should.be.false;
        });
    });
});







