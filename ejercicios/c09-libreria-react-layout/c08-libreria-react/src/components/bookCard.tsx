import { useState } from "react";
import { Card, Button } from "react-bootstrap";
import { Book } from "../types/book";
import { Link } from "react-router-dom";

/* BookCard con useState (Me gusta) */
export function BookCard({ book }: { book: Book }) {
  const [liked, setLiked] = useState(false);
  return (
    <Card className="h-100 shadow-sm border-0">
      <Card.Img variant="top" src={book.img} alt={book.alt} style={{ objectFit: 'cover', height: 220 }} />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="fw-bold">{book.title}</Card.Title>
        <Card.Text className="small text-muted">{book.author}</Card.Text>
        <div className="mt-auto d-flex gap-2">
          <Link to={`/libro/${book.id}`} className="btn btn-outline-primary btn-sm">Ver más</Link>
          <Button variant={liked ? 'danger' : 'outline-danger'} size="sm" onClick={() => setLiked(!liked)}>
            {liked ? '♥' : '♡'} Me gusta
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}
