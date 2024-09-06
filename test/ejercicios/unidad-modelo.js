import { assert } from 'chai';
import {modelo} from "../../app/ejercicios/modelo.js";
describe('Pruebas de unidad de modelo', () => {
    it('devuelve dos elementos', () => {
        let res = modelo.coge_datos()
        assert.isArray(res)
        assert.equal(res.length, 2);
        assert.equal(res[0], 0);
        assert.equal(res[1], 1);
    });
});
