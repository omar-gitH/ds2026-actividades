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

    name: string;
    email: string;
    phone: string;
    id: number;

}

async function obtenerUsuarios2(): Promise<Usuario[]>{
try{
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
    }
    const usuarios: Usuario[] = await response.json();
    return usuarios;  
    }catch (error) {
    console.error('Error:', error);
    throw error;
    }
}
    
obtenerUsuarios2()
    .then(usuarios => {
        usuarios.forEach((usuario) => {
            console.log(`Nombre: ${usuario.name}, Email: ${usuario.email}, Phone: ${usuario.phone}, ID: ${usuario.id}`);
        });
});

