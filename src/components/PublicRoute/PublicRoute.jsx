import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export const PublicRout = ({ children }) => {
  const token = useSelector(state => state.token);
  return token ? <Navigate to="/" /> : children;
};
