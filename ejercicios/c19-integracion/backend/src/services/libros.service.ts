import { prisma } from '../config/prisma';
import type { Libro } from '../types/libro';
import type { Prisma } from '../generated/prisma/client';
import type { Categoria } from '../generated/prisma/client';

// Tipos para las queries con relaciones
export type LibroConAutor = Prisma.LibroGetPayload<{
  include: { autor: true };
}>;

export type LibroDetalle = Prisma.LibroGetPayload<{
  include: { autor: true; categorias: true };
}>;

const getAll = async (disponible?: boolean): Promise<LibroConAutor[]> => {
  return prisma.libro.findMany({
    where: { disponible },
    include: { autor: true },
  });
};

const getById = async (id: number): Promise<LibroDetalle | null> => {
  return prisma.libro.findUnique({
    where: { id },
    include: { autor: true, categorias: true },
  });
};

const create = async (payload: Prisma.LibroUncheckedCreateInput): Promise<LibroConAutor> => {
  return prisma.libro.create({ 
    data: payload,
    include: { autor: true }
  });
};

const update = async (id: number, payload: Prisma.LibroUncheckedUpdateInput): Promise<LibroConAutor | null> => {
  const existing = await prisma.libro.findUnique({ where: { id } });

  if (!existing) {
    return null;
  }

  return prisma.libro.update({
    where: { id },
    data: payload,
    include: { autor: true }
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

export type { CategoriaModel as Categoria } from '../generated/prisma/models';