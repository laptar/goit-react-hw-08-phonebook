import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export const PrivateRout = ({ children }) => {
  const token = useSelector(state => state.token);
  return token ? children : <Navigate to="/goit-react-hw-08-phonebook/" />;
};
