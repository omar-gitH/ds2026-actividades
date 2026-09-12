import type { NextFunction, Request, Response } from 'express';
import { Prisma } from '../generated/prisma/client';
import { ZodError } from 'zod';

export const errorHandler = (
	err: unknown,
	_req: Request,
	res: Response,
	_next: NextFunction,
): Response => {
	if (err instanceof ZodError) {
		return res.status(400).json({
			error: 'Datos inválidos',
			detalles: err.issues.map((issue) => ({
				campo: issue.path.join('.'),
				mensaje: issue.message,
			})),
		});
	}

	if (err instanceof Prisma.PrismaClientKnownRequestError) {
		if (err.code === 'P2002') {
			return res.status(409).json({ error: 'Ya existe un registro con ese valor' });
		}

		if (err.code === 'P2025') {
			return res.status(404).json({ error: 'No encontrado' });
		}

		if (err.code === 'P2003') {
			return res.status(409).json({ error: 'Hay registros relacionados' });
		}
	}

	console.error(err);
	return res.status(500).json({ error: 'Error interno del servidor' });
};
