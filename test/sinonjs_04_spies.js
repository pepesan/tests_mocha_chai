import { sumar } from '../app/math.js';
import sinon from 'sinon';
import { expect } from 'chai';

describe('Math module', function() {
  it('should call sum function with correct arguments', function() {
    // Crear el espía para la función sum
    const spy = sinon.spy(sumar);

    // Llamar a la función
    spy(3, 4);

    // Verificar que fue llamada con los argumentos correctos
    expect(spy.calledOnce).to.be.true;
    expect(spy.calledWith(3, 4)).to.be.true;
  });
});