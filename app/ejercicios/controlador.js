export const controlador = {

    procesa_datos: function (modelo) {
        let miarray = modelo.coge_datos();
        return miarray.length;
    }
}
