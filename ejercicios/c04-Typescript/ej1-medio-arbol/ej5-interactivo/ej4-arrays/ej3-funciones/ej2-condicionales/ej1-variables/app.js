"use strict";
function generarArbol() {
    const input = document.getElementById("altura");
    const resultado = document.getElementById("resultado");
    const alturaStr = input.value;
    const altura = Number(alturaStr);
    if (alturaStr === "" || isNaN(altura) || altura < 1) {
        resultado.textContent = "Error: número inválido";
        return;
    }
    let salida = "";
    for (let i = 1; i <= altura; i++) {
        salida += "*".repeat(i) + "\n";
    }
    resultado.textContent = salida;
}
