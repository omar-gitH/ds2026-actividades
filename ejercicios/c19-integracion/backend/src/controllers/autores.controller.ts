import { type Request, type Response } from 'express';
import { autoresService } from '../services/autores.service';
const getAllAutores = async (_req: Request, res: Response): Promise<void> => {
  const autores = await autoresService.getAll();
  res.status(200).json(autores);
};

const getAutorById = async (req: Request, res: Response): Promise<void> => {
  const autor = await autoresService.getById(Number(req.params.id));

  if (!autor) {
    res.status(404).json({ error: 'Autor no encontrado' });
    return;
  }

  res.status(200).json(autor);
};

const createAutor = async (req: Request, res: Response): Promise<void> => {
  const autor = await autoresService.create(req.body);
  res.status(201).json(autor);
};

const updateAutor = async (req: Request, res: Response): Promise<void> => {
  const autor = await autoresService.update(Number(req.params.id), req.body);

  if (!autor) {
    res.status(404).json({ error: 'Autor no encontrado' });
    return;
  }

  res.status(200).json(autor);
};

const deleteAutor = async (req: Request, res: Response): Promise<void> => {
  const deleted = await autoresService.remove(Number(req.params.id));

  if (!deleted) {
    res.status(404).json({ error: 'Autor no encontrado' });
    return;
  }

  res.status(204).send();
};

export const autoresController = {
  getAllAutores,
  getAutorById,
  createAutor,
  updateAutor,
  deleteAutor,
};
