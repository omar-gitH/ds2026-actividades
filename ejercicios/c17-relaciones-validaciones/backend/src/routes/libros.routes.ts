import { Router } from 'express';
import { librosController } from '../controllers/libros.controller';
import { asyncHandler, validate, validateParams } from '../middlewares/validate.middleware';
import {
	libroCreateSchema,
	idParamSchema,
	libroUpdateSchema,
} from '../validations/libro.validation';

const librosRouter = Router();

librosRouter.get('/', asyncHandler(librosController.getAllLibros));
librosRouter.get(
	'/:id',
	validateParams(idParamSchema),
	asyncHandler(librosController.getLibroById),
);
librosRouter.post('/', validate(libroCreateSchema), asyncHandler(librosController.createLibro));
librosRouter.put(
	'/:id',
	validateParams(idParamSchema),
	validate(libroUpdateSchema),
	asyncHandler(librosController.updateLibro),
);
librosRouter.delete(
	'/:id',
	validateParams(idParamSchema),
	asyncHandler(librosController.deleteLibro),
);

export default librosRouter;
