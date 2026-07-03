import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
import LibroNuevo from './components/LibroNuevo';
import Home from './pages/Home';
import Catalogo from './pages/Catalogo';
import LibroDetalle from './pages/LibroDetalle';
import type { Libro } from './types/libro';

const librosIniciales: Libro[] = [
  {
    id: 1,
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    img: 'https://covers.openlibrary.org/b/id/8225266-L.jpg',
    alt: 'The Hobbit',
    description: 'Una aventura épica en la Tierra Media donde Bilbo Bolsón emprende un viaje inesperado.',
    price: '$3.500'
  },
  {
    id: 2,
    title: '1984',
    author: 'George Orwell',
    img: 'https://www.penguinlibros.com/ar/4246109-large_default/1984-edicion-definitiva-avalada-por-the-orwell-estate.webp',
    alt: '1984',
    description: 'Una obra maestra de la literatura distópica sobre vigilancia, poder y libertad.',
    price: '$4.500'
  },
  {
    id: 3,
    title: 'El principito',
    author: 'A. de Saint-Exupéry',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJfii1WITzF0zjao4wMwZmj30LmPbsiMFy0FCn54d64ftSr6VIUlf1r1ChG5aursCE-c4UCoLNzOy-z9HO1L2QTohxRZR1h1X4qCX4bw&s=10',
    alt: 'Le Petit Prince',
    description: 'Un cuento filosófico que invita a reflexionar sobre la vida, el amor y la amistad.',
    price: '$2.800'
  },
  {
    id: 4,
    title: 'Sherlock Holmes',
    author: 'Arthur Conan Doyle',
    img: 'https://storage-aws-production.publica.la/bookwire-direct-sales/issues/2025/03/oVyN01oggMRNpjLM/4605b06c-c96f-4fc2-9d3b-be6c20e60265_cover.jpg',
    alt: 'Sherlock Holmes',
    description: 'Las aventuras del detective más famoso del mundo, resolviendo misterios con Watson.',
    price: '$5.200'
  },
  {
    id: 5,
    title: 'Coraline',
    author: 'Neil Gaiman',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYxsFqtEe_GBnaN1CqChLU7G8375EfsJdkxvNUvqTYNGC3Ld3UCJZaGFvckPOXUYILrAJyGvK-AHgUpNuaETM9upe1_H-6hxCdN7U4Xw&s=10',
    alt: 'Coraline',
    description: 'Una niña descubre un mundo paralelo y debe enfrentar una versión maligna de su madre.',
    price: '$3.900'
  },
  {
    id: 6,
    title: 'Don Quijote',
    author: 'Miguel de Cervantes',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOFvNdHNmDXzZ1A5iwW_qCsGoYe910RbxL6sZvalNlHrUHiunnfTPdrk_O_4Y9NG2ZETzb1aXyHy-DaqkUIkB9uXvnPwnvYHKsCIJYq34&s=10',
    alt: 'Don Quijote',
    description: 'La historia de un caballero andante que vive aventuras en un mundo lleno de imaginación.',
    price: '$4.100'
  }
];

function App() {
  const [libros, setLibros] = useState<Libro[]>(librosIniciales);

  const agregarLibro = (nuevo: Libro) => {
    setLibros([...libros, nuevo]);
  };

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home libros={libros} />} />
          <Route path="/catalogo" element={<Catalogo libros={libros} />} />
          <Route path="/libros/:id" element={<LibroDetalle libros={libros} />} />
          <Route path="/libros/nuevo" element={<LibroNuevo onAgregar={agregarLibro} />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
