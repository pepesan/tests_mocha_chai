import { assert } from 'chai';
import {suma} from "../../../app/ejercicios/tdd/suma.js";

describe('Pruebas de calculo', () => {
    it('2 + 2 debe ser igual a 4', () => {
        let ret = suma(2,2);
        assert.equal(ret, 4);
    });
});
