export const controlador = {

    procesa_datos: function (modelo) {
        let miarray = modelo.coge_datos();
        miarray.push(3);
        return miarray;
    }
}
