import { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import type { Libro } from '../types/libro';

export function LibroCard({ libro }: { libro: Libro }) {
  const [liked, setLiked] = useState(false);

  return (
    <Card className="h-100 shadow-sm border-0 book-card">
      <div className="book-cover-card">
        <Card.Img variant="top" src={libro.img} alt={libro.alt} />
      </div>
      <Card.Body className="d-flex flex-column">
        <Card.Title className="fw-bold">{libro.title}</Card.Title>
        <Card.Text className="small text-muted mb-2">{libro.author}</Card.Text>
        {libro.description && (
          <Card.Text className="small text-secondary flex-grow-1">{libro.description}</Card.Text>
        )}
        {libro.price && <p className="fw-semibold text-primary mb-3">{libro.price}</p>}
        {libro.available !== undefined && (
          <p className={`small mb-3 ${libro.available ? 'text-success' : 'text-danger'}`}>
            {libro.available ? 'Disponible' : 'No disponible'}
          </p>
        )}
        <div className="mt-auto d-flex gap-2 flex-wrap">
          <Link to={`/libros/${libro.id}`} className="btn btn-sm btn-outline-primary">
            Ver más
          </Link>
          <Button variant={liked ? 'danger' : 'outline-danger'} size="sm" onClick={() => setLiked(!liked)}>
            {liked ? '♥' : '♡'} Me gusta
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}
