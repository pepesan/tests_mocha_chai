import sinon from "sinon";
import { expect } from 'chai';
import {modelo} from "../../app/ejercicios/modelo.js";
import {controlador} from "../../app/ejercicios/controlador.js";


describe("Controlador2",()=>{

    it("should call the mock from controller2", () => {
        const mock = sinon.mock(modelo);
        mock.expects("coge_datos").once().returns([1,2,3]);
        let result = controlador.procesa_datos(modelo);
        expect(result.length).to.be.eq(4);
        expect(result[3]).to.be.eq(3);
        mock.verify();
    });
    it("should call the mock from controller2 with 2 items", () => {
        const mock = sinon.mock(modelo);
        mock.expects("coge_datos").once().returns([1]);
        let result = controlador.procesa_datos(modelo);
        expect(result.length).to.be.eq(2);
        expect(result[1]).to.be.eq(3);
        mock.verify();
    });
})
