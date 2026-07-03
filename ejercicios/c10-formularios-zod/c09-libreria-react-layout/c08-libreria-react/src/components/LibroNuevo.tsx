import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from 'react-router-dom';
import { libroSchema, type LibroValidado } from '../schemas/libroSchema';
import type { Libro } from '../types/libro';

type LibroNuevoProps = {
  onAgregar: (libro: Libro) => void;
};

export default function LibroNuevo({ onAgregar }: LibroNuevoProps) {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<LibroValidado>({ resolver: zodResolver(libroSchema) });

  const onSubmit = async (data: LibroValidado) => {
    const file = data.imagen?.[0] as File | undefined;
    let imgUrl = 'https://via.placeholder.com/300x450?text=Libro';

    if (file) {
      imgUrl = await new Promise<string>((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = () => reject(new Error('No se pudo leer la imagen'));
        reader.readAsDataURL(file);
      });
    }

    const nuevoLibro: Libro = {
      id: Date.now(),
      title: data.titulo,
      author: data.autor,
      img: imgUrl,
      alt: data.titulo,
      description: data.descripcion,
      price: `$${data.precio.toFixed(2)}`,
      available: data.disponible
    };

    onAgregar(nuevoLibro);
    navigate('/catalogo');
  };

  return (
    <div className="container py-5">
      <h2 className="mb-4">Dar de alta un libro</h2>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="titulo">
          <Form.Label>Título</Form.Label>
          <Form.Control
            type="text"
            {...register('titulo')}
            isInvalid={!!errors.titulo}
          />
          <Form.Control.Feedback type="invalid">
            {errors.titulo?.message}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="autor">
          <Form.Label>Autor</Form.Label>
          <Form.Control
            type="text"
            {...register('autor')}
            isInvalid={!!errors.autor}
          />
          <Form.Control.Feedback type="invalid">
            {errors.autor?.message}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="descripcion">
          <Form.Label>Descripción</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            {...register('descripcion')}
            isInvalid={!!errors.descripcion}
          />
          <Form.Control.Feedback type="invalid">
            {errors.descripcion?.message}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="precio">
          <Form.Label>Precio</Form.Label>
          <Form.Control
            type="number"
            step="0.01"
            {...register('precio')}
            isInvalid={!!errors.precio}
          />
          <Form.Control.Feedback type="invalid">
            {errors.precio?.message}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="imagen">
          <Form.Label>Imagen</Form.Label>
          <Form.Control
            type="file"
            accept="image/*"
            {...register('imagen')}
            isInvalid={!!errors.imagen}
          />
          <Form.Control.Feedback type="invalid">
            {errors.imagen?.message as string}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="disponible">
          <Form.Check
            type="checkbox"
            label="Disponible"
            {...register('disponible')}
          />
        </Form.Group>

        <Button type="submit" variant="primary">
          Guardar libro
        </Button>
      </Form>
    </div>
  );
}
