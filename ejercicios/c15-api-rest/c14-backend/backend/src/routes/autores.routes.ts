import { Router } from 'express';
import { autoresController } from '../controllers/autores.controller';

const autoresRouter = Router();

autoresRouter.get('/', autoresController.getAllAutores);
autoresRouter.get('/:id', autoresController.getAutorById);
autoresRouter.post('/', autoresController.createAutor);
autoresRouter.put('/:id', autoresController.updateAutor);
autoresRouter.delete('/:id', autoresController.deleteAutor);

export default autoresRouter;
