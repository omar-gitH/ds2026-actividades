import { prisma } from '../config/prisma';
import type { Libro, LibroPayload } from '../types/libro';

const getAll = async (): Promise<Libro[]> => {
  return prisma.libro.findMany();
};

const getById = async (id: number): Promise<Libro | null> => {
  return prisma.libro.findUnique({ where: { id } });
};

const create = async (payload: LibroPayload): Promise<Libro> => {
  return prisma.libro.create({ data: payload });
};

const update = async (id: number, payload: LibroPayload): Promise<Libro | null> => {
  const existing = await prisma.libro.findUnique({ where: { id } });

  if (!existing) {
    return null;
  }

  return prisma.libro.update({
    where: { id },
    data: payload,
  });
};

const remove = async (id: number): Promise<boolean> => {
  const existing = await prisma.libro.findUnique({ where: { id } });

  if (!existing) {
    return false;
  }

  await prisma.libro.delete({ where: { id } });
  return true;
};

export const librosService = {
  getAll,
  getById,
  create,
  update,
  remove,
};
