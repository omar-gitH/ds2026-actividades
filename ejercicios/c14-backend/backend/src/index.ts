import cors from 'cors';
import express, { type Request, type Response } from 'express';

interface Libro {
  id: number;
  titulo: string;
  autor: string;
  precio: number;
  imagen: string;
  disponible: boolean;
}

const libros: Libro[] = [
  {
    id: 1,
    titulo: 'The Hobbit',
    autor: 'J.R.R. Tolkien',
    precio: 3500,
    imagen: 'https://covers.openlibrary.org/b/id/8225266-L.jpg',
    disponible: true,
  },
  {
    id: 2,
    titulo: '1984',
    autor: 'George Orwell',
    precio: 4500,
    imagen: 'https://www.penguinlibros.com/ar/4246109-large_default/1984-edicion-definitiva-avalada-por-the-orwell-estate.webp',
    disponible: true,
  },
  {
    id: 3,
    titulo: 'El principito',
    autor: 'A. de Saint-Exupéry',
    precio: 2800,
    imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJfii1WITzF0zjao4wMwZmj30LmPbsiMFy0FCn54d64ftSr6VIUlf1r1ChG5aursCE-c4UCoLNzOy-z9HO1L2QTohxRZR1h1X4qCX4bw&s=10',
    disponible: true,
  },
  {
    id: 4,
    titulo: 'Sherlock Holmes',
    autor: 'Arthur Conan Doyle',
    precio: 5200,
    imagen: 'https://storage-aws-production.publica.la/bookwire-direct-sales/issues/2025/03/oVyN01oggMRNpjLM/4605b06c-c96f-4fc2-9d3b-be6c20e60265_cover.jpg',
    disponible: true,
  },
  {
    id: 5,
    titulo: 'Coraline',
    autor: 'Neil Gaiman',
    precio: 3900,
    imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYxsFqtEe_GBnaN1CqChLU7G8375EfsJdkxvNUvqTYNGC3Ld3UCJZaGFvckPOXUYILrAJyGvK-AHgUpNuaETM9upe1_H-6hxCdN7h1X4w&s=10',
    disponible: true,
  },
  {
    id: 6,
    titulo: 'Don Quijote',
    autor: 'Miguel de Cervantes',
    precio: 4100,
    imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOFvNdHNmDXzZ1A5iwW_qCsGoYe910RbxL6sZvalNlHrUHiunnfTPdrk_O_4Y9NGZETzb1aXyHy-DaqkUIkB9uXvnPwnvYHKsCIJYq34&s=10',
    disponible: true,
  },
];

const app = express();
app.use(cors());
const PORT = 3000;
const HOST = '0.0.0.0';

app.get('/', (_req: Request, res: Response) => {
  res.json({ mensaje: 'API de la Librería lista' });
});

app.get('/libros', (_req: Request, res: Response) => {
  console.log(`GET /libros -> enviando ${libros.length} libros`);
  res.json(libros);
});

app.listen(PORT, HOST, () => {
  console.log(`Servidor escuchando en http://${HOST}:${PORT}`);
});
