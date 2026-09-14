import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Container, Form, Alert } from 'react-bootstrap';
import { loginSchema, type LoginFormValues } from '../schemas/loginSchema';
import { apiFetch } from '../services/api';
import { guardarToken } from '../services/sesion';

type Sesion = {
  token: string;
  usuario: {
    id: number;
    email: string;
    nombre: string;
    rol: string;
  };
};

export default function Login() {
  const navigate = useNavigate();
  const [errorGlobal, setErrorGlobal] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (datos: LoginFormValues) => {
    try {
      setErrorGlobal(null);
      const sesion = await apiFetch<Sesion>('/auth/login', {
        method: 'POST',
        body: JSON.stringify(datos),
      });
      guardarToken(sesion.token);
      navigate('/catalogo');
    } catch (err: any) {
      setErrorGlobal(err.message || 'Error al iniciar sesión');
    }
  };

  return (
    <Container className="my-5" style={{ maxWidth: '400px' }}>
      <h2 className="mb-4 text-center">Iniciar Sesión</h2>
      {errorGlobal && <Alert variant="danger">{errorGlobal}</Alert>}
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            {...register('email')}
            isInvalid={!!errors.email}
          />
          <Form.Control.Feedback type="invalid">
            {errors.email?.message}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-4">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            type="password"
            {...register('password')}
            isInvalid={!!errors.password}
          />
          <Form.Control.Feedback type="invalid">
            {errors.password?.message}
          </Form.Control.Feedback>
        </Form.Group>

        <Button variant="primary" type="submit" className="w-100" disabled={isSubmitting}>
          {isSubmitting ? 'Iniciando...' : 'Entrar'}
        </Button>
      </Form>
    </Container>
  );
}

