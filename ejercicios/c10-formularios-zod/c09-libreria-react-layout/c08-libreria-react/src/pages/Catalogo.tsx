import { useState } from 'react';
import { Badge, Button, Col, Container, Form, Row } from 'react-bootstrap';
import { LibroCard } from '../components/LibroCard';
import type { Libro } from '../types/libro';

export default function Catalogo({ libros }: { libros: Libro[] }) {
  const [query, setQuery] = useState('');
  const [librosGlobales, setLibrosGlobales] = useState<Libro[]>([]);
  const [buscando, setBuscando] = useState(false);

  const buscarLibrosGlobales = async () => {
    const texto = query.trim();

    if (!texto) {
      setLibrosGlobales([]);
      return;
    }

    setBuscando(true);

    try {
      const respuesta = await fetch(`https://openlibrary.org/search.json?q=${encodeURIComponent(texto)}&limit=12`);
      const data = await respuesta.json();

      const resultados: Libro[] = (data.docs || []).map((doc: any, index: number) => ({
        id: Number(doc.key?.replace('/works/', '')) || Date.now() + index,
        title: doc.title || 'Sin título',
        author: doc.author_name?.[0] || 'Autor desconocido',
        img: doc.cover_i
          ? `https://covers.openlibrary.org/b/id/${doc.cover_i}-M.jpg`
          : 'https://via.placeholder.com/300x450?text=Libro',
        alt: doc.title || 'Libro',
        description: doc.first_sentence?.[0] || 'Descripción disponible en Open Library.',
        price: '$' + (Math.floor(Math.random() * 9000) + 1000)
      }));

      setLibrosGlobales(resultados);
    } catch {
      setLibrosGlobales([]);
    } finally {
      setBuscando(false);
    }
  };

  const librosFiltrados = query.trim()
    ? librosGlobales
    : libros.filter((libro) => {
        const texto = `${libro.title} ${libro.author} ${libro.description ?? ''} ${libro.price ?? ''}`.toLowerCase();
        return texto.includes(query.toLowerCase());
      });

  return (
    <Container className="my-5">
      <div className="d-flex align-items-center justify-content-between mb-4">
        <div>
          <h2 className="fw-bold">Buscador global de libros</h2>
          <p className="text-muted mb-0">Encontrá cualquier libro por título, autor, descripción o precio.</p>
        </div>
        <Badge bg="secondary" pill>{librosFiltrados.length} libros</Badge>
      </div>

      <div className="input-group mb-4 catalog-search">
        <Form.Control
          type="text"
          placeholder="Buscar cualquier libro..."
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === 'Enter') {
              event.preventDefault();
              buscarLibrosGlobales();
            }
          }}
        />
        <Button variant="primary" onClick={buscarLibrosGlobales}>
          {buscando ? 'Buscando...' : 'Buscar'}
        </Button>
      </div>

      {buscando ? (
        <div className="empty-state text-center py-5">
          <h5>Buscando resultados...</h5>
        </div>
      ) : librosFiltrados.length > 0 ? (
        <Row xs={1} sm={2} lg={3} className="g-4">
          {librosFiltrados.map((libro) => (
            <Col key={libro.id}>
              <LibroCard libro={libro} />
            </Col>
          ))}
        </Row>
      ) : (
        <div className="empty-state text-center py-5">
          <h5>No se encontraron libros</h5>
          <p className="text-muted">Probá con otro título, autor o concepto como “Spiderman”.</p>
        </div>
      )}
    </Container>
  );
}
