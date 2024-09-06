import { expect } from 'chai';
import sinon from 'sinon';
import {getData} from '../app/index.js';
import axios from 'axios';

describe('getData', () => {
    let axiosGetStub;

    beforeEach(() => {
        // Crear un stub de axios.get
        axiosGetStub = sinon.stub(axios, 'get');
    });

    afterEach(() => {
        // Restaurar axios.get después de cada prueba
        axiosGetStub.restore();
    });

    it('debe devolver los datos correctamente cuando la solicitud tiene éxito', async () => {
        // Definir la respuesta simulada
        const mockData = { data: { id: 1, name: 'John Doe' } };

        // Hacer que el stub devuelva la respuesta simulada
        axiosGetStub.resolves(mockData);

        const result = await getData();
        expect(result).to.deep.equal(mockData.data);
    });

    it('debe lanzar un error cuando la solicitud falla', async () => {
        // Simular un error en la solicitud
        axiosGetStub.rejects(new Error('Network Error'));

        try {
            await getData();
        } catch (error) {
            expect(error.message).to.equal('Error fetching data');
        }
    });
});