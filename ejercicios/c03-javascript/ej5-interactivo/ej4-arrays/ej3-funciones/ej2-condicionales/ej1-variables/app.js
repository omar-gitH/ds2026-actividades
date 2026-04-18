// const nombre = "Omar";
// const edad = 20;
// const materia = "Desarrollo de Software";

// const mensaje = `Hola, mi nombre es ${nombre}, tengo ${edad} años y estoy estudiando ${materia}.`;
// console.log(mensaje);

// let contador = 0;
// console.log(`El contador vale ${contador}`);
// contador ++;
// contador ++;
// contador ++;
// console.log(`El contador vale ${contador}`);

// for (let i = 0; i < 20; i++) {
//     const valor = `el valor de i es ${i}`;
//     console.log(valor);
// }




// function clasificarNota(nota){
//     if (nota < 4){
//         return "Reprobado";
//     } else if (nota >= 4 && nota <= 7){

//         return "Aprobado";
//     } else return "promocionado";
// }
// console.log(`------------------------------`);
// console.log(`enunciado 1`);
// console.log(`-------------------------------`);
// console.log(clasificarNota(3));
// console.log(clasificarNota(5));
// console.log(clasificarNota(8));


// function diaDeLaSemana(dia){
//     switch (dia) {
//         case 1: return "Lunes";
//         case 2: return "Martes";
//         case 3: return "Miércoles";
//         case 4: return "Jueves";
//         case 5: return "Viernes";
//         case 6: return "Sábado";
//         case 7: return "Domingo";
//         default: return "Número de día inválido";
//     }
// }

// console.log(`------------------------------`);
// console.log(`enunciado 2`);
// console.log(`-------------------------------`);
// console.log(diaDeLaSemana(1));
// console.log(diaDeLaSemana(4));
// console.log(diaDeLaSemana(7));
// console.log(diaDeLaSemana(0));


// function calcularPrecioFinal(monto, medioPago){

//     if (monto < 200) {
//         return monto;
//     }else if (monto >= 200 && monto <= 400){
//         if (medioPago === "E") return monto * 0.7;
//         if (medioPago === "D") return monto * 0.8;
//         if (medioPago === "C") return monto * 0.9;
//     }
//     else{
//         return monto * 0.6;
        
//     }
// }


// console.log(`------------------------------`);
// console.log(`enunciado 3`);
// console.log(`-------------------------------`);
// const mensaje = `|monto: $150 | medio de pago: E | Final: $${calcularPrecioFinal(150, "E")}|`;
// console.log(mensaje);
// const mensaje2 = `|monto: $300 | medio de pago: D | Final: $${calcularPrecioFinal(300, "D")}|`;
// console.log(mensaje2);
// const mensaje3 = `|monto: $500 | medio de pago: C | Final: $${calcularPrecioFinal(500, "C")}|`;
// console.log(mensaje3);
// const mensaje4 = `|monto: $250 | medio de pago: E | Final: $${calcularPrecioFinal(250, "E")}|`;
// console.log(mensaje4);
// const mensaje5 = `|monto: $250 | medio de pago: D | Final: $${calcularPrecioFinal(250, "D")}|`;
// console.log(mensaje5);


// Ejercicio 4 - Arrays y bucles
// ● Crear un array con al menos 8 números
// ● Usando for o for...of, calcular y mostrar en consola:
// ○ La suma total
// ○ El promedio
// ○ El número mayor
// ○ El número menor
// ● Crear una función generarAsteriscos(n) que reciba un número y
// retorne un string con esa cantidad de asteriscos (ej:
// generarAsteriscos(5) → "*****"). Usar un bucle for.


// promedio = 0;
// sumaTotal = 0;
// const numeros = [7, 1, 19, 4, 6, 17, 22, 80];
// for (let i = 0; i < numeros.length; i++) {
//     console.log(numeros[i]);
//     sumaTotal += numeros[i];
//     promedio = sumaTotal / numeros.length;

// }
// console.log(`La suma total es: ${sumaTotal}`);
// console.log(`El promedio es: ${promedio}`);

// let numeroMayor = numeros[0];
// let numeroMenor = numeros[0];

// for (let i = 1; i < numeros.length; i++) {
//     if (numeros[i] > numeroMayor) {
//         numeroMayor = numeros[i];
//     }

//     if (numeros[i] < numeroMenor) {
//         numeroMenor = numeros[i];
//     }
// }

// console.log(`El número mayor es: ${numeroMayor}`);
// console.log(`El número menor es: ${numeroMenor}`);

// function generarAsteriscos(n) {
//     let asteriscos = "";
//     for (let i = 0; i < n; i++) {
//         asteriscos += "*";
//     }
//     return asteriscos;
// }

// console.log(generarAsteriscos(5));
// console.log(generarAsteriscos(4));
// console.log(generarAsteriscos(12));


// ● Crear un HTML con un <input type="number"> y un <button> 
// "Generar"
// ● Al hacer click, leer el número del input y generar un "medio
// árbol" de asteriscos de esa altura.

function generarArbol() {
    const altura = document.getElementById("altura").value;
    const resultado = document.getElementById("resultado");

    if (altura === "" || altura < 1) {
        resultado.textContent = "Error: número inválido";
        return;
    }

    let salida = "";

    for (let i = 1; i <= altura; i++) {
        salida += "*".repeat(i) + "\n"; 
    }

    resultado.textContent = salida;
}