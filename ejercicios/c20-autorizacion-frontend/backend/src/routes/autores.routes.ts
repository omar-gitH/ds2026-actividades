import { Router } from 'express';
import { autoresController } from '../controllers/autores.controller';
import { asyncHandler, validate, validateParams } from '../middlewares/validate.middleware';
import { authenticate, authorize } from '../middlewares/auth.middleware';
import {
	autorCreateSchema,
	autorIdParamSchema,
	autorUpdateSchema,
} from '../validations/autor.validation';

const autoresRouter = Router();

autoresRouter.get('/', asyncHandler(autoresController.getAllAutores));
autoresRouter.get(
	'/:id',
	validateParams(autorIdParamSchema),
	asyncHandler(autoresController.getAutorById),
);

autoresRouter.post(
	'/', 
	authenticate, 
	authorize("ADMIN"), 
	validate(autorCreateSchema), 
	asyncHandler(autoresController.createAutor)
);

autoresRouter.put(
	'/:id',
	authenticate,
	authorize("ADMIN"),
	validateParams(autorIdParamSchema),
	validate(autorUpdateSchema),
	asyncHandler(autoresController.updateAutor),
);

autoresRouter.delete(
	'/:id',
	authenticate,
	authorize("ADMIN"),
	validateParams(autorIdParamSchema),
	asyncHandler(autoresController.deleteAutor),
);

export default autoresRouter;
