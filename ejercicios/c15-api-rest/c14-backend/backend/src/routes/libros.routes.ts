import { Router } from 'express';
import { librosController } from '../controllers/libros.controller';

const librosRouter = Router();

librosRouter.get('/', librosController.getAllLibros);
librosRouter.get('/:id', librosController.getLibroById);
librosRouter.post('/', librosController.createLibro);
librosRouter.put('/:id', librosController.updateLibro);
librosRouter.delete('/:id', librosController.deleteLibro);

export default librosRouter;
