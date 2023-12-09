import { useAuth } from './AuthProvider';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

export const AuthRoute = () => {
  const { auth } = useAuth();
  const location = useLocation();

  return auth ? (
    <Outlet />
  ) : (
    <Navigate to={'/signin'} replace state={{ path: location.pathname }} />
  );
};

