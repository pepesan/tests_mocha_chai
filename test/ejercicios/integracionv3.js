const sinon=require("sinon");
const expect=require("chai").expect;
const modelo = require("../../app/ejercicios/modelo");
const controlador = require("../../app/ejercicios/controlador2");
describe("Controlador2",()=>{

    it("should call the mock from controller2", () => {
        const mock = sinon.mock(modelo);
        mock.expects("coge_datos").once().returns([1,2,3]);
        result = controlador.procesa_datos(modelo);
        expect(result).to.be.eq(3);
        mock.verify();
    });
    it("should call the mock from controller2 with 2 items", () => {
        const mock = sinon.mock(modelo);
        mock.expects("coge_datos").once().returns([1,2]);
        result = controlador.procesa_datos(modelo);
        expect(result).to.be.eq(2);
        mock.verify();
    });
})
