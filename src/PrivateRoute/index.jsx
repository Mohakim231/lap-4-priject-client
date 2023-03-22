import { Navigate } from 'react-router-dom';
import { useAuth } from '../context';

const PrivateRoute = ({ children }) => {
  const { currentUser } = useAuth();
  return currentUser ? (
    <>{children}</>
  ) : (
    <Navigate to="/login" />
  );
};

export default PrivateRoute;