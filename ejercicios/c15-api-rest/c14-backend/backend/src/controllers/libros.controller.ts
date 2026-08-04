import { type Request, type Response } from 'express';
import { librosService } from '../services/libros.service';

const getAllLibros = (_req: Request, res: Response): void => {
  const libros = librosService.getAll();
  res.status(200).json(libros);
};

const getLibroById = (req: Request, res: Response): void => {
  const id = Number(req.params.id);
  const libro = librosService.getById(id);

  if (!libro) {
    res.status(404).json({ error: 'Libro no encontrado' });
    return;
  }

  res.status(200).json(libro);
};

const createLibro = (req: Request, res: Response): void => {
  const payload = req.body;
  const libro = librosService.create(payload);
  res.status(201).json(libro);
};

const updateLibro = (req: Request, res: Response): void => {
  const id = Number(req.params.id);
  const payload = req.body;
  const libro = librosService.update(id, payload);

  if (!libro) {
    res.status(404).json({ error: 'Libro no encontrado' });
    return;
  }

  res.status(200).json(libro);
};

const deleteLibro = (req: Request, res: Response): void => {
  const id = Number(req.params.id);
  const deleted = librosService.remove(id);

  if (!deleted) {
    res.status(404).json({ error: 'Libro no encontrado' });
    return;
  }

  res.status(204).send();
};

export const librosController = {
  getAllLibros,
  getLibroById,
  createLibro,
  updateLibro,
  deleteLibro,
};
