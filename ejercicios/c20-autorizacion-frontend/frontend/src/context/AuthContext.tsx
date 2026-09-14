import { createContext, useContext, useState, useEffect, ReactNode, useMemo, useCallback } from 'react';
import { Usuario, Credenciales, Rol } from '../types/sesionType';
import { apiFetch } from '../services/api';
import { obtenerToken, borrarToken, guardarToken } from '../services/sesion';

interface AuthContextType {
  usuario: Usuario | null;
  cargando: boolean;
  estaAutenticado: boolean;
  tieneRol: (rol: Rol) => boolean;
  login: (credenciales: Credenciales) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [usuario, setUsuario] = useState<Usuario | null>(null);
  const [cargando, setCargando] = useState(obtenerToken() !== null);

  const login = useCallback(async (credenciales: Credenciales) => {
    const data = await apiFetch<{ token: string; usuario: Usuario }>('/auth/login', {
      method: 'POST',
      body: JSON.stringify(credenciales),
    });
    guardarToken(data.token);
    setUsuario(data.usuario);
  }, []);

  const logout = useCallback(() => {
    borrarToken();
    setUsuario(null);
  }, []);

  useEffect(() => {
    if (!obtenerToken()) return;
    
    apiFetch<Usuario>('/auth/yo')
      .then(setUsuario)
      .catch(() => borrarToken())
      .finally(() => setCargando(false));
  }, []);

  useEffect(() => {
    const handleExpiracion = () => {
      logout();
    };

    window.addEventListener('sesion-expirada', handleExpiracion);

    // Es importante remover el listener si el componente se desmonta
    return () => {
      window.removeEventListener('sesion-expirada', handleExpiracion);
    };
  }, [logout]);

  const contextValue = useMemo(() => {
    const estaAutenticado = usuario !== null;
    const tieneRol = (rol: Rol) => usuario?.rol === rol;

    return {
      usuario,
      cargando,
      estaAutenticado,
      tieneRol,
      login,
      logout,
    };
  }, [usuario, cargando, login, logout]);

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth debe usarse dentro de <AuthProvider>");
  }
  return context;
}