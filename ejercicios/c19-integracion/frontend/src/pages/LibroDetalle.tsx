import { useParams, Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import type { Libro } from '../types/libro';

export default function LibroDetalle({ libros }: { libros: Libro[] }) {
  const { id } = useParams();
  const libro = libros.find((item) => item.id === Number(id));

  if (!libro) {
    return <Container className="my-5">Libro no encontrado</Container>;
  }

  return (
    <Container className="my-5">
      <h2>{libro.title}</h2>
      <p className="text-muted">{libro.author}</p>
      <img src={libro.img} alt={libro.alt} className="img-fluid mb-3 detail-cover" />
      <p>{libro.description ?? 'Sin descripción disponible.'}</p>
      <p className="fw-bold text-primary">{libro.price ?? 'Precio no disponible'}</p>
      <Link to="/catalogo" className="btn btn-secondary btn-sm">Volver al catálogo</Link>
    </Container>
  );
}
