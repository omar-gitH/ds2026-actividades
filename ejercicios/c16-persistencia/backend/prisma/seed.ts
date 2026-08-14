import { prisma } from '../src/config/prisma';

const libros = [
  { titulo: 'The Hobbit', autor: 'J.R.R. Tolkien', precio: 3500, imagen: 'https://covers.openlibrary.org/b/id/8225266-L.jpg', disponible: true },
  { titulo: '1984', autor: 'George Orwell', precio: 4500, imagen: 'https://www.penguinlibros.com/ar/4246109-large_default/1984-edicion-definitiva-avalada-por-the-orwell-estate.webp', disponible: true },
  { titulo: 'El principito', autor: 'A. de Saint-Exupéry', precio: 2800, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJfii1WITzF0zjao4wMwZmj30LmPbsiMFy0FCn54d64ftSr6VIUlf1r1ChG5aursCE-c4UCoLNzOy-z9HO1L2QTohxRZR1h1X4qCX4bw&s=10', disponible: true },
  { titulo: 'Sherlock Holmes', autor: 'Arthur Conan Doyle', precio: 5200, imagen: 'https://storage-aws-production.publica.la/bookwire-direct-sales/issues/2025/03/oVyN01oggMRNpjLM/4605b06c-c96f-4fc2-9d3b-be6c20e60265_cover.jpg', disponible: true },
  { titulo: 'Coraline', autor: 'Neil Gaiman', precio: 3900, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYxsFqtEe_GBnaN1CqChLU7G8375EfsJdkxvNUvqTYNGC3Ld3UCJZaGFvckPOXUYILrAJyGvK-AHgUpNuaETM9upe1_H-6hxCdN7h1X4w&s=10', disponible: true },
  { titulo: 'Don Quijote', autor: 'Miguel de Cervantes', precio: 4100, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOFvNdHNmDXzZ1A5iwW_qCsGoYe910RbxL6sZvalNlHrUHiunnfTPdrk_O_4Y9NGZETzb1aXyHy-DaqkUIkB9uXvnPwnvYHKsCIJYq34&s=10', disponible: true },
  { titulo: 'El aleph', autor: 'Jorge Luis Borges', precio: 3300, imagen: 'https://images.cdn3.buscalibre.com/fit-in/360x360/ce/56/ce5603f0abf1bd5a5d3f70a3f43d15b3.jpg', disponible: true },
  { titulo: 'Ficciones', autor: 'Jorge Luis Borges', precio: 4600, imagen: 'https://images.cdn3.buscalibre.com/fit-in/360x360/ce/56/ce5603f0abf1bd5a5d3f70a3f43d15b3.jpg', disponible: true },
  { titulo: 'Dune', autor: 'Frank Herbert', precio: 6100, imagen: 'https://m.media-amazon.com/images/I/81g0yLr6XPL._AC_UF1000,1000_QL80_.jpg', disponible: true },
  { titulo: 'Neuromante', autor: 'William Gibson', precio: 5400, imagen: 'https://images.cdn3.buscalibre.com/fit-in/360x360/7a/51/7a518528be8c26eeef26d0db29a5f0bc.jpg', disponible: true },
];

const autores = [
  { nombre: 'J.R.R. Tolkien', nacionalidad: 'Reino Unido' },
  { nombre: 'George Orwell', nacionalidad: 'Reino Unido' },
  { nombre: 'A. de Saint-Exupéry', nacionalidad: 'Francia' },
  { nombre: 'Arthur Conan Doyle', nacionalidad: 'Reino Unido' },
  { nombre: 'Neil Gaiman', nacionalidad: 'Reino Unido' },
  { nombre: 'Miguel de Cervantes', nacionalidad: 'España' },
  { nombre: 'Jorge Luis Borges', nacionalidad: 'Argentina' },
  { nombre: 'Frank Herbert', nacionalidad: 'Estados Unidos' },
  { nombre: 'William Gibson', nacionalidad: 'Estados Unidos' },
];

async function main() {
  await prisma.libro.deleteMany();
  await prisma.autor.deleteMany();

  await prisma.libro.createMany({ data: libros });
  await prisma.autor.createMany({ data: autores });

  console.log('Seed ejecutado correctamente');
}

main()
  .catch((error) => {
    console.error('Error al ejecutar el seed:', error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
