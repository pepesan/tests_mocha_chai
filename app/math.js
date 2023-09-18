// math.js
function sumar(a, b) {
    return a + b;
}

function multiplicar(a, b) {
    return a * b;
}

function operacionCompleja(x, y) {
    const suma = sumar(x, y);
    const multiplicacion = multiplicar(x, y);
    return `La suma de ${x} y ${y} es ${suma}, y su multiplicación es ${multiplicacion}`;
}

module.exports = {
    sumar,
    multiplicar,
    operacionCompleja
};
