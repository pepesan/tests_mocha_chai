import { assert } from 'chai';
import {addTested} from '../app/calculator.js';
//var calculator = require("../app/calculator");
describe("Calcultator tests using ASSERT interface from CHAI module: ", function () {
    describe("Check addTested Function: ", function () {
        it("Check the returned value using: assert.equal(value,'value'): ", function () {
            let result = addTested("text");
            assert.equal(result, "text tested", "No es igual");
        });
        it("Check the returned value using: assert.notEqual(value,'value'): ", function () {
            let result = addTested("text");
            assert.notEqual(false, "No es false", "Es igual");
        });
        it("Check the returned value using: strictEqual.equal(value,'value'): ", function () {
            let result = addTested("text");
            assert.strictEqual(result, "text tested", "No es igual de manera estricta");
        });
        it("Check the returned value using: assert.typeOf(value,'value'): ", function () {
            let result = addTested("text");
            assert.typeOf(result, "string", "No es de tipo string");
        });
        it("Check the returned value using: assert.lengthOf(value,'value'): ", function () {
            let result = addTested("text");
            assert.lengthOf(result, 11, "No tiene la longitud correcta");
        });
        it("Assert isOk object is truthy", function () {
            let result = addTested("text");
            assert.isOk(result, "no es truthy");
        });
        it("Assert isNotOk object is not truthy", function () {
            let result = addTested("text");
            assert.isNotOk(false, "es truthy");
        });
        it("Assert isAbove strictly greater than (>) ", function () {
            assert.isAbove(5, 2, '5 is strictly greater than 2');
        });
        it("Assert isAtLeast  is greater than or equal to (>=)  ", function () {
            assert.isAtLeast(5, 2, '5 is greater or equal to 2');
            assert.isAtLeast(3, 3, '3 is greater or equal to 3');

        });
        it("Assert isBelow strictly less than (<) ", function () {
            assert.isBelow(3, 6, '3 is strictly less than 6');
        });
        it("Assert isAtMost  is less than or equal to (<=)  ", function () {
            assert.isAtMost(3, 6, '3 is less than or equal to 6');
            assert.isAtMost(4, 4, '4 is less than or equal to 4');
        });
        it("Assert isTrue object is true", function () {
            assert.isTrue(true, "no es true");
        });
        it("Assert isNotTrue object is not true", function () {
            assert.isNotOk(false, "es true");
        });
        it("Assert isFalse object is false", function () {
            assert.isFalse(false, "no es true");
        });
        it("Assert isNotFalse object is not false", function () {
            assert.isNotFalse(true, "es false");
        });
        it("Assert isNull object is null", function () {
            assert.isNull(null, "no es null");
        });
        it("Assert isNotNull object is not null", function () {
            assert.isNotNull(true, "es null");
        });
        it("Assert isNaN object is NaN", function () {
            assert.isNaN(NaN, "no es Nan");
        });
        it("Assert isNotNaN object is not NaN", function () {
            assert.isNotNaN(2, "es NaN");
        });
        it("Assert exists object is neither null nor undefined", function () {
            assert.exists(2, "es null o indefined");
        });
        it("Assert notExists object is null or undefined", function () {
            assert.notExists(null, "no es null o indefined");
        });
        it("Assert include object include he second element", function () {
            assert.include([1,2,3], 2, 'array not contains value');
        });
        it("Assert match matches the regular expression ", function () {
            assert.match('foobar', /^foo/, 'regexp not matches');
        });
        it("Assert property has a direct or inherited property named by property", function () {
            assert.property({ tea: { green: 'matcha' }}, 'tea', "no tiene propiedad tea");
        });
        // más información
        // https://www.chaijs.com/api/assert/
    });
});
