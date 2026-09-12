import { Router } from 'express';
import { librosController } from '../controllers/libros.controller';
import { asyncHandler, validate, validateParams } from '../middlewares/validate.middleware';
import { authenticate, authorize } from '../middlewares/auth.middleware';
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

librosRouter.post(
	'/', 
	authenticate, 
	authorize("ADMIN"), 
	validate(libroCreateSchema), 
	asyncHandler(librosController.createLibro)
);

librosRouter.put(
	'/:id',
	authenticate,
	authorize("ADMIN"),
	validateParams(idParamSchema),
	validate(libroUpdateSchema),
	asyncHandler(librosController.updateLibro),
);

librosRouter.delete(
	'/:id',
	authenticate,
	authorize("ADMIN"),
	validateParams(idParamSchema),
	asyncHandler(librosController.deleteLibro),
);

export default librosRouter;
