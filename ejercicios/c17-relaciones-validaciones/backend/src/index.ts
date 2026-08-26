import cors from 'cors';
import express from 'express';
import { z } from 'zod';
import librosRouter from './routes/libros.routes';
import autoresRouter from './routes/autores.routes';
import { errorHandler } from './middlewares/error.middleware';

z.config(z.locales.es());

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/libros', librosRouter);
app.use('/api/autores', autoresRouter);
app.use(errorHandler);

app.listen(3000, '0.0.0.0', () => {
  console.log('Servidor escuchando en http://0.0.0.0:3000');
});
