import { type Request, type Response } from 'express';
import { librosService } from '../services/libros.service';

const getAllLibros = async (_req: Request, res: Response): Promise<void> => {
  try {
    const libros = await librosService.getAll();
    res.status(200).json(libros);
  } catch {
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

const getLibroById = async (req: Request, res: Response): Promise<void> => {
  try {
    const id = Number(req.params.id);
    const libro = await librosService.getById(id);

    if (!libro) {
      res.status(404).json({ error: 'Libro no encontrado' });
      return;
    }

    res.status(200).json(libro);
  } catch {
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

const createLibro = async (req: Request, res: Response): Promise<void> => {
  try {
    const payload = req.body;
    const libro = await librosService.create(payload);
    res.status(201).json(libro);
  } catch {
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

const updateLibro = async (req: Request, res: Response): Promise<void> => {
  try {
    const id = Number(req.params.id);
    const payload = req.body;
    const libro = await librosService.update(id, payload);

    if (!libro) {
      res.status(404).json({ error: 'Libro no encontrado' });
      return;
    }

    res.status(200).json(libro);
  } catch {
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

const deleteLibro = async (req: Request, res: Response): Promise<void> => {
  try {
    const id = Number(req.params.id);
    const deleted = await librosService.remove(id);

    if (!deleted) {
      res.status(404).json({ error: 'Libro no encontrado' });
      return;
    }

    res.status(204).send();
  } catch {
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

export const librosController = {
  getAllLibros,
  getLibroById,
  createLibro,
  updateLibro,
  deleteLibro,
};
