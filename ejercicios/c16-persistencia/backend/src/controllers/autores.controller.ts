import { type Request, type Response } from 'express';
import { autoresService } from '../services/autores.service';

const getAllAutores = async (_req: Request, res: Response): Promise<void> => {
  try {
    const autores = await autoresService.getAll();
    res.status(200).json(autores);
  } catch {
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

const getAutorById = async (req: Request, res: Response): Promise<void> => {
  try {
    const id = Number(req.params.id);
    const autor = await autoresService.getById(id);

    if (!autor) {
      res.status(404).json({ error: 'Autor no encontrado' });
      return;
    }

    res.status(200).json(autor);
  } catch {
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

const createAutor = async (req: Request, res: Response): Promise<void> => {
  try {
    const payload = req.body;
    const autor = await autoresService.create(payload);
    res.status(201).json(autor);
  } catch {
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

const updateAutor = async (req: Request, res: Response): Promise<void> => {
  try {
    const id = Number(req.params.id);
    const payload = req.body;
    const autor = await autoresService.update(id, payload);

    if (!autor) {
      res.status(404).json({ error: 'Autor no encontrado' });
      return;
    }

    res.status(200).json(autor);
  } catch {
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

const deleteAutor = async (req: Request, res: Response): Promise<void> => {
  try {
    const id = Number(req.params.id);
    const deleted = await autoresService.remove(id);

    if (!deleted) {
      res.status(404).json({ error: 'Autor no encontrado' });
      return;
    }

    res.status(204).send();
  } catch {
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

export const autoresController = {
  getAllAutores,
  getAutorById,
  createAutor,
  updateAutor,
  deleteAutor,
};
