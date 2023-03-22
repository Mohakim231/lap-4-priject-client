import { Navigate } from 'react-router-dom';
import { useAuth } from '../context';

const PrivateRoute = ({ children }) => {
  const { currentUser } = useAuth();
  console.log(useAuth())
  console.log("line 6" + currentUser)
  return (currentUser ? (
    {children}
  ) : (
    <Navigate to="/login" />
  ))
};

export default PrivateRoute;