const sinon=require("sinon");
const expect=require("chai").expect;
const modelo = require("../../app/ejercicios/modelo");
const controlador = require("../../app/ejercicios/controlador");
describe("Controlador",()=>{

    it("should call the mock", () => {
        const mock = sinon.mock(modelo);
        mock.expects("coge_datos").once().returns([1,2]);
        const result = modelo.coge_datos();
        expect(result.length).to.be.eq(2);
        mock.verify();
    });
    it("should call the mock from controller", () => {
        const mock = sinon.mock(modelo);
        mock.expects("coge_datos").once().returns([1,2]);
        result = controlador.procesa_datos(modelo.coge_datos());
        expect(result).to.be.eq(2);
        mock.verify();
    });
})
