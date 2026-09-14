import { Container, Alert, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function SinPermiso() {
  const navigate = useNavigate();

  return (
    <Container className="my-5 text-center" style={{ maxWidth: '600px' }}>
      <Alert variant="danger">
        <Alert.Heading>Acceso Denegado</Alert.Heading>
        <p>No tienes los permisos necesarios para acceder a esta sección.</p>
      </Alert>
      <Button variant="primary" onClick={() => navigate('/')}>
        Volver al Inicio
      </Button>
    </Container>
  );
}

