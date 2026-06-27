import { Container, Row, Col } from 'react-bootstrap';
import { BookCard } from '../components/bookCard';
import { Book } from '../types/book';

const books: Book[] = [
  { id: 1, title: 'The Hobbit', author: 'J.R.R. Tolkien', img: 'https://covers.openlibrary.org/b/id/8225266-L.jpg', alt: 'The Hobbit' },
  { id: 2, title: '1984', author: 'George Orwell', img: 'https://www.penguinlibros.com/ar/4246109-large_default/1984-edicion-definitiva-avalada-por-the-orwell-estate.webp', alt: '1984' },
  { id: 3, title: 'El principito', author: 'A. de Saint-Exupéry', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJfii1WITzF0zjao4wMwZmj30LmPbsiMFy0FCn54d64ftSr6VIUlf1r1ChG5aursCE-c4UCoLNzOy-z9HO1L2QTohxRZR1h1X4qCX4bw&s=10', alt: 'Le Petit Prince' },
  { id: 4, title: 'Sherlock Holmes', author: 'Arthur Conan Doyle', img: 'https://storage-aws-production.publica.la/bookwire-direct-sales/issues/2025/03/oVyN01oggMRNpjLM/4605b06c-c96f-4fc2-9d3b-be6c20e60265_cover.jpg', alt: 'Sherlock Holmes' },
  { id: 5, title: 'Coraline', author: 'Neil Gaiman', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYxsFqtEe_GBnaN1CqChLU7G8375EfsJdkxvNUvqTYNGC3Ld3UCJZaGFvckPOXUYILrAJyGvK-AHgUpNuaETM9upe1_H-6hxCdN7U4Xw&s=10', alt: 'Coraline' },
  { id: 6, title: 'Don Quijote', author: 'Miguel de Cervantes', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOFvNdHNmDXzZ1A5iwW_qCsGoYe910RbxL6sZvalNlHrUHiunnfTPdrk_O_4Y9NG2ZETzb1aXyHy-DaqkUIkB9uXvnPwnvYHKsCIJYq34&s=10', alt: 'Don quijote' }
];

export default function Home() {
  return (
    <>
      <header className="hero-section d-flex align-items-center justify-content-center text-center text-white"
              style={{
                background: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=1350&q=80')",
                height: '60vh', backgroundSize: 'cover', backgroundPosition: 'center'
              }}>
        <div className="container">
          <h1 className="display-3 fw-bold">Bienvenidos a nuestra Librería</h1>
          <p className="lead fs-4">Descubrí tu próxima aventura entre nuestras páginas.</p>
        </div>
      </header>

      <Container className="my-5">
        <h2 className="text-center mb-5 fw-light">Libros Destacados</h2>
        <Row className="g-4">
          {books.map(b => (
            <Col key={b.id} xs={6} md={4} lg={2}>
              <BookCard book={b} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}
