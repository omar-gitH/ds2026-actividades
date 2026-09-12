import { type Request, type Response } from 'express';
import { librosService } from '../services/libros.service';

const getAllLibros = async (_req: Request, res: Response): Promise<void> => {
  const libros = await librosService.getAll();
  res.status(200).json(libros);
};

const getLibroById = async (req: Request, res: Response): Promise<void> => {
  const libro = await librosService.getById(Number(req.params.id));

  if (!libro) {
    res.status(404).json({ error: 'Libro no encontrado' });
    return;
  }

  res.status(200).json(libro);
};

const createLibro = async (req: Request, res: Response): Promise<void> => {
  const libro = await librosService.create(req.body);
  res.status(201).json(libro);
};

const updateLibro = async (req: Request, res: Response): Promise<void> => {
  const libro = await librosService.update(Number(req.params.id), req.body);

  if (!libro) {
    res.status(404).json({ error: 'Libro no encontrado' });
    return;
  }

  res.status(200).json(libro);
};

const deleteLibro = async (req: Request, res: Response): Promise<void> => {
  const deleted = await librosService.remove(Number(req.params.id));

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
