import { prisma } from '../config/prisma';
import type { Autor, AutorPayload } from '../types/autor';

const getAll = async (): Promise<Autor[]> => {
  return prisma.autor.findMany();
};

const getById = async (id: number): Promise<Autor | null> => {
  return prisma.autor.findUnique({ where: { id } });
};

const create = async (payload: AutorPayload): Promise<Autor> => {
  return prisma.autor.create({ data: payload });
};

const update = async (id: number, payload: AutorPayload): Promise<Autor | null> => {
  const existing = await prisma.autor.findUnique({ where: { id } });

  if (!existing) {
    return null;
  }

  return prisma.autor.update({
    where: { id },
    data: payload,
  });
};

const remove = async (id: number): Promise<boolean> => {
  const existing = await prisma.autor.findUnique({ where: { id } });

  if (!existing) {
    return false;
  }

  await prisma.autor.delete({ where: { id } });
  return true;
};

export const autoresService = {
  getAll,
  getById,
  create,
  update,
  remove,
};
