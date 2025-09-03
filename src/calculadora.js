function somarDoisNumeros(a, b) {
    return a + b;
}

function calcularMedia(a, b) {
    return (a + b) / 2;
}

function somar () {
    const valor1 = -10
    const valor2 = 20
    if(valor1 < 0 || valor2 < 0) {
        return "Número inválido"
    } else {
        return somarDoisNumeros(valor1, valor2)
    }
}
module.exports = {
    somarDoisNumeros,
    calcularMedia,
    somar
}
