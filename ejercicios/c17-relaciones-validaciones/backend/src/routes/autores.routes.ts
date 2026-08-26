import { Router } from 'express';
import { autoresController } from '../controllers/autores.controller';
import { asyncHandler, validate, validateParams } from '../middlewares/validate.middleware';
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
autoresRouter.post('/', validate(autorCreateSchema), asyncHandler(autoresController.createAutor));
autoresRouter.put(
	'/:id',
	validateParams(autorIdParamSchema),
	validate(autorUpdateSchema),
	asyncHandler(autoresController.updateAutor),
);
autoresRouter.delete(
	'/:id',
	validateParams(autorIdParamSchema),
	asyncHandler(autoresController.deleteAutor),
);

export default autoresRouter;
