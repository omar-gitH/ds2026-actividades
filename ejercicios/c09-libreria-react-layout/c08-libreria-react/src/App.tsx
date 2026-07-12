

import { useState } from 'react';
import { Badge, Button, Card, Col, Container, Nav, Navbar, Row } from 'react-bootstrap';

type Book = {
  id: number;
  title: string;
  author: string;
  genre: string;
  year: number;
  cover: string;
};

const books: Book[] = [
  {
    id: 1,
    title: 'El Principito',
    author: 'Antoine de Saint-Exupéry',
    genre: 'Infantil',
    year: 1943,
    cover: 'https://covers.openlibrary.org/b/id/8231996-L.jpg'
  },
  {
    id: 2,
    title: '1984',
    author: 'George Orwell',
    genre: 'Distopía',
    year: 1949,
    cover: 'https://covers.openlibrary.org/b/id/7222246-L.jpg'
  },
  {
    id: 3,
    title: 'Cien años de soledad',
    author: 'Gabriel García Márquez',
    genre: 'Realismo mágico',
    year: 1967,
    cover: 'https://covers.openlibrary.org/b/id/8221901-L.jpg'
  },
  {
    id: 4,
    title: 'Matar a un ruiseñor',
    author: 'Harper Lee',
    genre: 'Clásico',
    year: 1960,
    cover: 'https://covers.openlibrary.org/b/id/8228691-L.jpg'
  },
  {
    id: 5,
    title: 'El nombre del viento',
    author: 'Patrick Rothfuss',
    genre: 'Fantasía',
    year: 2007,
    cover: 'https://covers.openlibrary.org/b/id/9242128-L.jpg'
  },
  {
    id: 6,
    title: 'Coraline',
    author: 'Neil Gaiman',
    genre: 'Fantasía',
    year: 2002,
    cover: 'https://covers.openlibrary.org/b/id/8231850-L.jpg'
  }
];

function BookCard({ book }: { book: Book }) {
  const [liked, setLiked] = useState(false);

  return (
    <Card className="shadow-sm h-100 border-0">
      <div className="book-cover">
        <Card.Img variant="top" src={book.cover} alt={book.title} />
      </div>
      <Card.Body className="d-flex flex-column">
        <Card.Title>{book.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{book.author}</Card.Subtitle>
        <div className="mb-3 text-sm text-secondary">
          <Badge bg="info" className="me-2 text-dark">{book.genre}</Badge>
          <span>{book.year}</span>
        </div>
        <Card.Text className="flex-grow-1">Una historia inolvidable para lectores de todas las edades.</Card.Text>
        <Button
          variant={liked ? 'danger' : 'outline-danger'}
          onClick={() => setLiked(!liked)}
          className="mt-auto"
        >
          {liked ? '♥ Me gusta' : '♡ Me gusta'}
        </Button>
      </Card.Body>
    </Card>
  );
}

function HeroSection() {
  return (
    <section className="hero-section text-white d-flex align-items-center">
      <Container>
        <Row>
          <Col lg={7}>
            <span className="text-uppercase fw-semibold hero-label">Librería Digital</span>
            <h1 className="display-5 fw-bold mt-3">Descubre los mejores libros para tu próxima lectura</h1>
            <p className="lead text-white-75 mt-3">
              Seleccionamos títulos clásicos y modernos para que encuentres historias que te inspiren, emocionen y acompañen.
            </p>
            <Button size="lg" variant="light" className="mt-3">Explorar catálogo</Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

function SiteFooter() {
  return (
    <footer className="site-footer mt-5 py-4 bg-dark text-white text-center">
      <Container>
        <p className="mb-1">© {new Date().getFullYear()} Librería React - Proyecto de clase</p>
        <small>Diseñado con React, TypeScript y React-Bootstrap.</small>
      </Container>
    </footer>
  );
}

function NavigationBar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top" className="shadow-sm">
      <Container>
        <Navbar.Brand href="#home">📚 Librería</Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#catalog">Catálogo</Nav.Link>
            <Nav.Link href="#about">Nosotros</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

function App() {
  return (
    <>
      <NavigationBar />
      <HeroSection />
      <Container id="catalog" className="my-5">
        <div className="d-flex align-items-center justify-content-between mb-4">
          <div>
            <h2 className="fw-bold">Libros destacados</h2>
            <p className="text-muted mb-0">Explora nuestra selección especial de títulos recomendados.</p>
          </div>
          <Badge bg="secondary" pill>6 libros</Badge>
        </div>

        <Row xs={1} sm={2} lg={3} className="g-4">
          {books.map(book => (
            <Col key={book.id}>
              <BookCard book={book} />
            </Col>
          ))}
        </Row>
      </Container>

      <section id="about" className="about-section py-5 bg-light">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <h3>Tu rincón de lectura en línea</h3>
              <p className="text-muted">
                En nuestra librería encontrarás una mezcla de clásicos y novedades, organizada para ayudarte a elegir con confianza.
                Navega por géneros, descubre favoritos y guarda tus libros preferidos con un clic.
              </p>
            </Col>
            <Col md={6}>
              <div className="info-box p-4 rounded shadow-sm bg-white">
                <h5 className="mb-3">Funcionalidades clave</h5>
                <ul className="mb-0 list-unstyled text-muted">
                  <li>• Diseño responsivo con React Bootstrap</li>
                  <li>• Componente reutilizable para cada libro</li>
                  <li>• Interacción con "Me gusta" usando useState</li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <SiteFooter />
    </>
  );
}

export default App;

