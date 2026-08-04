import { type Request, type Response } from 'express';
import { autoresService } from '../services/autores.service';

const getAllAutores = (_req: Request, res: Response): void => {
  const autores = autoresService.getAll();
  res.status(200).json(autores);
};

const getAutorById = (req: Request, res: Response): void => {
  const id = Number(req.params.id);
  const autor = autoresService.getById(id);

  if (!autor) {
    res.status(404).json({ error: 'Autor no encontrado' });
    return;
  }

  res.status(200).json(autor);
};

const createAutor = (req: Request, res: Response): void => {
  const payload = req.body;
  const autor = autoresService.create(payload);
  res.status(201).json(autor);
};

const updateAutor = (req: Request, res: Response): void => {
  const id = Number(req.params.id);
  const payload = req.body;
  const autor = autoresService.update(id, payload);

  if (!autor) {
    res.status(404).json({ error: 'Autor no encontrado' });
    return;
  }

  res.status(200).json(autor);
};

const deleteAutor = (req: Request, res: Response): void => {
  const id = Number(req.params.id);
  const deleted = autoresService.remove(id);

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
