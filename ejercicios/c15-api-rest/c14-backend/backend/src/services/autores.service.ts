import { Autor, AutorPayload } from '../types/autor';

const autores: Autor[] = [
  {
    id: 1,
    nombre: 'J.R.R. Tolkien',
    nacionalidad: 'Reino Unido',
    nacidoEn: '1892-01-03',
    activo: false,
  },
  {
    id: 2,
    nombre: 'George Orwell',
    nacionalidad: 'Reino Unido',
    nacidoEn: '1903-06-25',
    activo: false,
  },
  {
    id: 3,
    nombre: 'A. de Saint-Exupéry',
    nacionalidad: 'Francia',
    nacidoEn: '1900-06-29',
    activo: false,
  },
  {
    id: 4,
    nombre: 'Arthur Conan Doyle',
    nacionalidad: 'Reino Unido',
    nacidoEn: '1859-05-22',
    activo: false,
  },
  {
    id: 5,
    nombre: 'Neil Gaiman',
    nacionalidad: 'Reino Unido',
    nacidoEn: '1960-11-10',
    activo: true,
  },
];

const getAll = (): Autor[] => [...autores];

const getById = (id: number): Autor | undefined => autores.find((autor) => autor.id === id);

const create = (payload: AutorPayload): Autor => {
  const nextId = autores.reduce((maxId, autor) => Math.max(maxId, autor.id), 0) + 1;
  const nuevoAutor: Autor = { id: nextId, ...payload };
  autores.push(nuevoAutor);
  return nuevoAutor;
};

const update = (id: number, payload: AutorPayload): Autor | undefined => {
  const index = autores.findIndex((autor) => autor.id === id);

  if (index < 0) {
    return undefined;
  }

  autores[index] = { id, ...payload };
  return autores[index];
};

const remove = (id: number): boolean => {
  const index = autores.findIndex((autor) => autor.id === id);

  if (index < 0) {
    return false;
  }

  autores.splice(index, 1);
  return true;
};

export const autoresService = {
  getAll,
  getById,
  create,
  update,
  remove,
};
