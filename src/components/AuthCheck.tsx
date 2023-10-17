import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuthContext } from '../context/auth/context';
import jwtDecode from 'jwt-decode';

const AuthCheck = ({ allowedRoles }: any) => {
  const { auth } = useAuthContext();
  const location = useLocation();

  // Decode jwt access
  const decoded: any = auth?.accessToken ? jwtDecode(auth.accessToken) : null;
  // Get roles from decoded jwt
  const role = decoded?.UserInfo?.role || [];

  return allowedRoles.includes(role) ? (
    <Outlet />
  ) : auth.email ? (
    // If user doesnot have permission then redirect user to unauth page
    <Navigate to="/unauthorized" state={{ from: location }} replace />
  ) : (
    <Navigate to="/auth" state={{ from: location }} replace />
  );
};

export default AuthCheck;
