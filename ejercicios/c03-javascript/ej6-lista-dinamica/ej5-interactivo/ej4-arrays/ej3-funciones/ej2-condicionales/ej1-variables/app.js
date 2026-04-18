

// Ejercicio 6 - DOM: lista dinámica
// ● Agregar un <input type="text"> para nombre de producto y un 
// <button> "Agregar"
// ● Al hacer click, agregar el producto como un <li> dentro de un 
// <ul> en la página
// ● Cada item debe tener un botón "Eliminar" que al clickearlo 
// borre ese item de la lista
// ● Validar que el input no esté vacío
// ● Agregar un contador que muestre "X productos en la lista"

let total = 0;

function agregarProducto() {
    const input = document.getElementById("producto");
    const lista = document.getElementById("lista");
    const contador = document.getElementById("contador");

    if (input.value.trim() === "") {
        alert("Ingrese un producto");
        return;
    }

    const li = document.createElement("li");
    li.textContent = input.value;

    const btn = document.createElement("button");
    btn.textContent = "Eliminar";

    btn.onclick = function () {
        lista.removeChild(li);
        total--;
        contador.textContent = `${total} productos en la lista`;
    };

    li.appendChild(btn);
    lista.appendChild(li);

    total++;
    contador.textContent = `${total} productos en la lista`;

    input.value = "";
}