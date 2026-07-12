import { Col, Container, Row } from 'react-bootstrap';
import { LibroCard } from '../components/LibroCard';
import type { Libro } from '../types/libro';

export default function Home({ libros }: { libros: Libro[] }) {
  return (
    <>
      <header className="hero-section hero-home d-flex align-items-center justify-content-center text-center text-white">
        <div className="container">
          <h1 className="display-3 fw-bold">Bienvenidos a nuestra Librería</h1>
          <p className="lead fs-4">Descubrí tu próxima aventura entre nuestras páginas.</p>
        </div>
      </header>

      <Container className="my-5">
        <h2 className="text-center mb-5 fw-light">Libros Destacados</h2>
        <Row className="g-4">
          {libros.map((libro) => (
            <Col key={libro.id} xs={12} sm={6} md={4} lg={2}>
              <LibroCard libro={libro} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}
