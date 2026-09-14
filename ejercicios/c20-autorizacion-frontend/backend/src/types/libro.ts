import type { Libro as PrismaLibro } from '../generated/prisma/client';

export type LibroModel = PrismaLibro;
export type Libro = PrismaLibro;
export type LibroPayload = Omit<Libro, 'id'>;
