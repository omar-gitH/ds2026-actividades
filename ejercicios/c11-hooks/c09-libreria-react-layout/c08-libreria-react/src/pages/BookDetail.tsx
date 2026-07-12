import { Link, useParams } from 'react-router-dom';
import type { Book } from '../types/book';

type BookDetailProps = {
  books: Book[];
};

export default function BookDetail({ books }: BookDetailProps) {
  const { id } = useParams();
  const book = books.find((b) => b.id === Number(id));

  if (!book) {
    return <div className="container my-5">Libro no encontrado</div>;
  }

  return (
    <div className="container my-5">
      <h2>{book.title}</h2>
      <p className="text-muted">{book.author}</p>
      <img src={book.img} alt={book.title} className="detail-cover" />
      <p className="mt-3">{book.description ?? 'Descripción breve del libro...'}</p>
      <Link to="/catalogo" className="btn btn-secondary btn-sm">Volver</Link>
    </div>
  );
}