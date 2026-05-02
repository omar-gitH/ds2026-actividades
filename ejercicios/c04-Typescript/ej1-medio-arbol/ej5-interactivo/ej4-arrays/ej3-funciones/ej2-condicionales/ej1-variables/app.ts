function generarArbol2(): void {
    const input = document.getElementById("altura") as HTMLInputElement;
    const resultado = document.getElementById("resultado") as HTMLElement;

    const alturaStr: string = input.value;
    const altura: number = Number(alturaStr);

    if (alturaStr === "" || isNaN(altura) || altura < 1) {
        resultado.textContent = "Error: número inválido";
        return;
    }

    let salida: string = "";

    for (let i = 1; i <= altura; i++) {
        salida += "*".repeat(i) + "\n";
    }

    resultado.textContent = salida;
}