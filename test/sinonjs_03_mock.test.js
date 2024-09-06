// api.test.js

import { userService } from '../app/api.js';
import sinon from 'sinon';
import { expect } from 'chai';



describe('getUser', function() {
    let mock;

    beforeEach(function() {
        // Crear un stub para fetch antes de cada test
        mock = sinon.mock(userService);
    });

    afterEach(function() {
        // Restaurar el comportamiento original de fetch después de cada test
        mock.restore();
    });

    it('should return user data when fetch is successful', async function() {
        // Definir la respuesta simulada
        let ret = { id: 1, name: 'Jane Doe' };
        mock.expects('getUser').once().withArgs(1).returns(ret);

        // Llamar a la función y verificar el resultado
        const user = userService.getUser(1);
        console.log(user); // { id: 1, name: 'Jane Doe' }
        expect(user).to.equal(ret);
    });

});
