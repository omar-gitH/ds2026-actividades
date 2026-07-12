const libros = [
    {
        id: 1,
        titulo: "The Hobbit",
        autor: "J.R.R. Tolkien",
        descripcion: "Una aventura épica en la Tierra Media donde Bilbo Bolsón se embarca en un viaje inesperado con enanos para recuperar un tesoro custodiado por Smaug.",
        precio: "$3.500",
        imagen: "https://covers.openlibrary.org/b/id/8225266-L.jpg"
    },
    {
        id: 2,
        titulo: "1984",
        autor: "George Orwell",
        descripcion: "En un mundo dominado por el Gran Hermano, Winston Smith lucha por mantener su individualidad y descubrir la verdad. Una obra maestra de la literatura distópica que explora la vigilancia masiva y el control del pensamiento.",
        precio: "$4.500",
        imagen: "https://www.penguinlibros.com/ar/4246109-large_default/1984-edicion-definitiva-avalada-por-the-orwell-estate.webp"
    },
    {
        id: 3,
        titulo: "El principito",
        autor: "A. de Saint-Exupéry",
        descripcion: "Un cuento filosófico sobre un niño que viaja por planetas, aprendiendo lecciones sobre la vida, el amor y la amistad a través de encuentros con personajes peculiares.",
        precio: "$2.800",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJfii1WITzF0zjao4wMwZmj30LmPbsiMFy0FCn54d64ftSr6VIUlf1r1ChG5aursCE-c4UCoLNzOy-z9HO1L2QTohxRZR1h1X4qCX4bw&s=10"
    },
    {
        id: 4,
        titulo: "Sherlock Holmes",
        autor: "Arthur Conan Doyle",
        descripcion: "Las aventuras del detective más famoso del mundo, Sherlock Holmes, y su compañero el Dr. Watson, resolviendo misterios y crímenes en la Londres victoriana.",
        precio: "$5.200",
        imagen: "https://storage-aws-production.publica.la/bookwire-direct-sales/issues/2025/03/oVyN01oggMRNpjLM/4605b06c-c96f-4fc2-9d3b-be6c20e60265_cover.jpg"
    },
    {
        id: 5,
        titulo: "Coraline",
        autor: "Neil Gaiman",
        descripcion: "Una niña valiente descubre un mundo paralelo detrás de una puerta secreta, donde debe enfrentarse a una versión malvada de su madre para salvar a sus padres.",
        precio: "$3.900",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYxsFqtEe_GBnaN1CqChLU7G8375EfsJdkxvNUvqTYNGC3Ld3UCJZaGFvckPOXUYILrAJyGvK-AHgUpNuaETM9upe1_H-6hxCdN7U4Xw&s=10"
    },
    {
        id: 6,
        titulo: "Don Quijote",
        autor: "Miguel de Cervantes",
        descripcion: "La historia del caballero andante Don Quijote y su fiel escudero Sancho Panza, en una sátira sobre la caballería y la realidad española del siglo XVII.",
        precio: "$4.100",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOFvNdHNmDXzZ1A5iwW_qCsGoYe910RbxL6sZvalNlHrUHiunnfTPdrk_O_4Y9NG2ZETzb1aXyHy-DaqkUIkB9uXvnPwnvYHKsCIJYq34&s=10"
    }
];

const searchInput = document.getElementById('searchInput');
const btnSearch = document.getElementById('btnSearch');
const resultados = document.getElementById('resultados');

btnSearch.addEventListener('click', () => {
    const query = searchInput.value;
    if (query) {
        fetch(`https://openlibrary.org/search.json?title=${query}`)
            .then(res => res.json())
            .then(data => {
                mostrarLibros(data.docs.slice(0, 10)); // Mostramos los primeros 10
            });
    }
});

function mostrarLibros(libros) {
    resultados.innerHTML = '';
    libros.forEach(libro => {
        const cover = libro.cover_i ? `https://covers.openlibrary.org/b/id/${libro.cover_i}-M.jpg` : 'https://via.placeholder.com/150x200';
        resultados.innerHTML += `
            <div class="col-md-4">
                <div class="card h-100">
                    <img src="${cover}" class="card-img-top" alt="Portada">
                    <div class="card-body">
                        <h5>${libro.title}</h5>
                        <p>${libro.author_name ? libro.author_name[0] : 'Autor desconocido'}</p>
                        <a href="libro.html" class="btn btn-sm btn-outline-primary">Ver detalle</a>
                    </div>
                </div>
            </div>
        `;
    });
}