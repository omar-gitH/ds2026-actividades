/*

Ejercicio 3 - Buscador de libros
Objetivo: Trabajar con datos reales (campos opcionales,
respuestas anidadas) y eventos del usuario. Acercarse a
una mini-funcionalidad completa: input → acción →
resultados.
API:
Open Library (https://openlibrary.org/search.json?q=...)
Pasos:
● Crear una página con: un <input type="text">, un
<button>Buscar</button> y un contenedor <div
id="resultados">.
● Al hacer click, hacer fetch a la URL con el texto del
input como parámetro q.
● La respuesta tiene un campo docs que es un array.
Definir una interface LibroOL con title, author_name?,
first_publish_year? (los campos pueden faltar, así que
opcionales).
● Mostrar los primeros 10 resultados como tarjetas con
título, autor (si existe) y año (si existe).
● Validar: input vacío → mostrar mensaje de error, no
hacer fetch.
*/


interface LibroOL {
    title: string;
    author_name?: string[];
    first_publish_year?: number;
}

interface RespuestaOL {
    docs: LibroOL[];
}


const input = document.getElementById('busqueda') as HTMLInputElement;
const boton = document.getElementById('btnBuscar') as HTMLButtonElement;
const resultados = document.getElementById('resultados') as HTMLDivElement;
const error = document.getElementById('error') as HTMLParagraphElement;

boton.addEventListener('click', async () => {
    const texto = input.value.trim();

    // ✅ VALIDACIÓN
    if (!texto) {
        error.textContent = 'Por favor ingresá un término de búsqueda';
        resultados.innerHTML = '';
        return;
    }

    error.textContent = '';
    resultados.innerHTML = 'Cargando...';

    try {
        const response = await fetch(`https://openlibrary.org/search.json?q=${texto}`);
        const data: RespuestaOL = await response.json();

        resultados.innerHTML = '';

        const libros = data.docs.slice(0, 10);

        if (libros.length === 0) {
            resultados.innerHTML = 'No se encontraron resultados';
            return;
        }

        libros.forEach((libro) => {
            const card = document.createElement('div');
            card.className = 'card';

            const titulo = document.createElement('h3');
            titulo.textContent = libro.title;

            const autor = document.createElement('p');
            autor.textContent = libro.author_name?.[0] || 'Autor desconocido';

            const año = document.createElement('p');
            año.textContent = libro.first_publish_year
                ? `Año: ${libro.first_publish_year}`
                : 'Año desconocido';

            card.appendChild(titulo);
            card.appendChild(autor);
            card.appendChild(año);

            resultados.appendChild(card);
        });

    } catch (e) {
        resultados.innerHTML = '';
        error.textContent = 'Error al obtener los datos';
    }
});