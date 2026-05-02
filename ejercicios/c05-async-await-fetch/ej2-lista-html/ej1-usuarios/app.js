"use strict";
// Elementos del DOM (asumimos que existen en el HTML)
const lista1 = document.getElementById('lista');
const cargando1 = document.getElementById('cargando');
const errorM = document.getElementById('error');
// Función para obtener usuarios
async function obtenerUsuarios3() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
}
// Función principal
async function main() {
    try {
        // Estado inicial
        cargando1.style.display = 'block';
        errorM.style.display = 'none';
        errorM.textContent = '';
        lista1.innerHTML = '';
        const usuarios = await obtenerUsuarios3();
        usuarios.forEach((u) => {
            const li = document.createElement('li');
            li.textContent = `Nombre: ${u.name}, Email: ${u.email}, Phone: ${u.phone}, ID: ${u.id}`;
            lista1.appendChild(li);
        });
    }
    catch (error) {
        errorM.textContent = 'Error al cargar los usuarios.';
        errorM.style.display = 'block';
    }
    finally {
        cargando1.style.display = 'none';
    }
}
// Ejecutar
main();
