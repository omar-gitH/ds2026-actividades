import type { Autor as PrismaAutor } from '../generated/prisma/client';

export type AutorModel = PrismaAutor;
export type Autor = PrismaAutor;
export type AutorPayload = Omit<Autor, 'id'>;
