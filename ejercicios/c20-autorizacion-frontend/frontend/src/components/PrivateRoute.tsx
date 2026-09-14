import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Rol } from '../types/sesionType';

interface PrivateRouteProps {
  rol?: Rol;
}

export default function PrivateRoute({ rol }: PrivateRouteProps) {
  const { estaAutenticado, tieneRol, cargando } = useAuth();

  if (cargando) {
    return (
      <div className="d-flex justify-content-center mt-5">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Cargando...</span>
        </div>
      </div>
    );
  }

  if (!estaAutenticado) {
    return <Navigate to="/login" replace />;
  }

  if (rol && !tieneRol(rol)) {
    return <Navigate to="/sin-permiso" replace />;
  }

  return <Outlet />;
}

