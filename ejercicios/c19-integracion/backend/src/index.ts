import cors from 'cors';
import express from 'express';
import { z } from 'zod';
import librosRouter from './routes/libros.routes';
import autoresRouter from './routes/autores.routes';
import { errorHandler } from './middlewares/error.middleware';

z.config(z.locales.es());

const app = express();

const corsOptions = {
  origin: [process.env.FRONTEND_URL ?? 'http://localhost:5173']
};

app.use(cors(corsOptions));
app.use(express.json());

import authRoutes from './routes/auth.routes';

app.use('/api/auth', authRoutes);
app.use('/api/libros', librosRouter);
app.use('/api/autores', autoresRouter);

app.use((req, res) => {
  res.status(404).json({ error: 'Ruta no encontrada' });
});

app.use(errorHandler);

app.listen(3000, '0.0.0.0', () => {
  console.log('Servidor escuchando en http://0.0.0.0:3000');
});
