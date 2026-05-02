/*
Ejercicio 1 - Fetch básico tipado
Objetivo: Que llamen a una API real con async/await y
aprendan a tipar lo que viene del servidor en lugar de
tratarlo como any.
API:
JSONPlaceholder (https://jsonplaceholder.typicode.com)
Pasos:
● Crear un proyecto con index.html y app.ts.
● Definir una interface Usuario con: id, name, email,
phone.
● Escribir una función async function obtenerUsuarios():
Promise<Usuario[]> que use fetch y devuelva los
usuarios tipados.
● Llamar la función y mostrar nombre y email de cada
usuario en la consola.
● Manejar errores con try/catch.

Esto es una introduccion a lo que serian las API's. Me podrias dar una introduccion explicativa de lo que seria esto?







*/
interface Usuario {
    id: number;
    name: string;
    email: string;
    phone: string;
}
/*
Ejercicio 2 — DOM + fetch
Objetivo: Conectar el resultado del fetch con la
pantalla: render dinámico, estado de carga y manejo
visual de errores. La estructura mínima de cualquier
vista que consume datos.
Pasos:
● Partir del HTML del Ej 1, cuando se reciben los datos,
mostrar la lista de usuarios como una <ul> en la
página, cada <li> con el nombre y el email.
● Mientras carga, mostrar un <p>Cargando…</p>. Cuando
termina, ocultarlo.
● Si hay error, mostrar un mensaje rojo en la página.*/

/*
obtenerUsuarios2()
    .then(usuarios => {
        
        usuarios.forEach((usuario) => {
            console.log(`Nombre: ${usuario.name}, Email: ${usuario.email}, Phone: ${usuario.phone}, ID: ${usuario.id}`);
        });
});

*/

// Obtener elementos del DOM
interface Usuario {
    name: string;
    email: string;
    phone: string;
    id: number;
}


const lista1 = document.getElementById('lista') as HTMLUListElement;
const cargando1 = document.getElementById('cargando') as HTMLParagraphElement;
const error = document.getElementById('error') as HTMLParagraphElement;


async function obtenerUsuarios3(): Promise<Usuario[]> {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
}


async function main() {
    try {
        cargando1.style.display = 'block';
        error.style.display = 'none';
        error.textContent = '';
        lista1.innerHTML = '';

        const usuarios = await obtenerUsuarios3();

        usuarios.forEach((u) => {
            const li = document.createElement('li');
            li.textContent = `Nombre: ${u.name}, Email: ${u.email}`;
            lista1.appendChild(li);
        });

    } catch (err) {
        error.textContent = 'Error al cargar los usuarios.';
        error.style.display = 'block';

    } finally {
        cargando1.style.display = 'none';
    }
}


main();