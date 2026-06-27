import { useParams, Link } from "react-router-dom";
import { Book } from "../types/book"; // Importa el array de libros desde main.tsx

const books: Book[] = [
  { id: 1, title: 'The Hobbit', author: 'J.R.R. Tolkien', img: 'https://covers.openlibrary.org/b/id/8225266-L.jpg', alt: 'The Hobbit' },
  { id: 2, title: '1984', author: 'George Orwell', img: 'https://www.penguinlibros.com/ar/4246109-large_default/1984-edicion-definitiva-avalada-por-the-orwell-estate.webp', alt: '1984' },
  { id: 3, title: 'El principito', author: 'A. de Saint-Exupéry', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJfii1WITzF0zjao4wMwZmj30LmPbsiMFy0FCn54d64ftSr6VIUlf1r1ChG5aursCE-c4UCoLNzOy-z9HO1L2QTohxRZR1h1X4qCX4bw&s=10', alt: 'Le Petit Prince' },
  { id: 4, title: 'Sherlock Holmes', author: 'Arthur Conan Doyle', img: 'https://storage-aws-production.publica.la/bookwire-direct-sales/issues/2025/03/oVyN01oggMRNpjLM/4605b06c-c96f-4fc2-9d3b-be6c20e60265_cover.jpg', alt: 'Sherlock Holmes' },
  { id: 5, title: 'Coraline', author: 'Neil Gaiman', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYxsFqtEe_GBnaN1CqChLU7G8375EfsJdkxvNUvqTYNGC3Ld3UCJZaGFvckPOXUYILrAJyGvK-AHgUpNuaETM9upe1_H-6hxCdN7U4Xw&s=10', alt: 'Coraline' },
  { id: 6, title: 'Don Quijote', author: 'Miguel de Cervantes', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOFvNdHNmDXzZ1A5iwW_qCsGoYe910RbxL6sZvalNlHrUHiunnfTPdrk_O_4Y9NG2ZETzb1aXyHy-DaqkUIkB9uXvnPwnvYHKsCIJYq34&s=10', alt: 'Don quijote' }
];


export default function BookDetail() {
  const { id } = useParams();
  const book = books.find(b => b.id === Number(id));
  if (!book) return <div className="container my-5">Libro no encontrado</div>;
  return (
    <div className="container my-5">
      <h2>{book.title}</h2>
      <p className="text-muted">{book.author}</p>
      <img src={book.img} alt={book.title} style={{ maxWidth: 300 }} />
      <p className="mt-3">Descripción breve del libro...</p>
      <Link to="/" className="btn btn-secondary btn-sm">Volver</Link>
    </div>
  );
}