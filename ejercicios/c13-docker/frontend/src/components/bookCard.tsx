import { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { Book } from '../types/book';
import { Link } from 'react-router-dom';

export function BookCard({ book }: { book: Book }) {
  const [liked, setLiked] = useState(false);

  return (
    <Card className="h-100 shadow-sm border-0 book-card">
      <div className="book-cover-card">
        <Card.Img variant="top" src={book.img} alt={book.alt} />
      </div>
      <Card.Body className="d-flex flex-column">
        <Card.Title className="fw-bold">{book.title}</Card.Title>
        <Card.Text className="small text-muted mb-2">{book.author}</Card.Text>
        {book.description && (
          <Card.Text className="small text-secondary flex-grow-1">{book.description}</Card.Text>
        )}
        {book.price && <p className="fw-semibold text-primary mb-3">{book.price}</p>}
        <div className="mt-auto d-flex gap-2 flex-wrap">
          <Link to={`/libro/${book.id}`} className="btn btn-sm btn-outline-primary">
            Ver detalle
          </Link>
          <Button variant={liked ? 'danger' : 'outline-danger'} size="sm" onClick={() => setLiked(!liked)}>
            {liked ? '♥' : '♡'} Me gusta
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}
