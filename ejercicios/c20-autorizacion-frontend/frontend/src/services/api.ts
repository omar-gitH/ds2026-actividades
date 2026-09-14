import { obtenerToken } from './sesion';

// 1. Creamos una clase de error personalizada para poder leer el status después
export class ApiError extends Error {
  status: number;
  constructor(message: string, status: number) {
    super(message);
    this.status = status;
  }
}

export async function apiFetch<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
  const token = obtenerToken();
  const headers = new Headers(options.headers);
  if (!headers.has('Content-Type')) {
    headers.set('Content-Type', 'application/json');
  }

  if (token) {
    headers.set('Authorization', `Bearer ${token}`);
  }

  const response = await fetch(`http://localhost:3000/api${endpoint}`, {
    ...options,
    headers,
  });

  if (!response.ok) {
    // 2. Si el backend nos da un 401 y teníamos un token, significa que caducó
    if (response.status === 401 && token) {
      window.dispatchEvent(new Event('sesion-expirada'));
    }
    
    // Lanzamos nuestro nuevo error con el status incluido
    throw new ApiError(`Error HTTP: ${response.status}`, response.status);
  }

  return response.json();
}