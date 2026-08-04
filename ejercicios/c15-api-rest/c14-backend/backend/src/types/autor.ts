export interface Autor {
  id: number;
  nombre: string;
  nacionalidad: string;
  nacidoEn: string;
  activo: boolean;
}

export type AutorPayload = Omit<Autor, 'id'>;
