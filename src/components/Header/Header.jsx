import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';

import s from './Header.module.css';

import { useLogoutUserMutation, useGetUsersQuery } from 'redux/authApi';
import { addToken, getUserAction } from 'redux/reducer';
import { useEffect } from 'react';
export const Header = () => {
  const navigate = useNavigate();
  const [logout] = useLogoutUserMutation();
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);
  const token = useSelector(state => state.token);
  const { data, status } = useGetUsersQuery();

  useEffect(() => {
    if (status === 'fulfilled') {
      dispatch(getUserAction({ name: data.name, email: data.email }));
    }
  }, [status, dispatch, data?.name, data?.email]);

  const handleLogout = () => {
    logout();
    dispatch(addToken(''));
    dispatch(getUserAction({ name: '', email: '' }));
    navigate('/');
  };
  return (
    <header className={s.header}>
      <nav className={s.headerNav}>
        <div className={s.headerLink}>
          <NavLink to="/goit-react-hw-08-phonebook/">Home</NavLink>
          {token && (
            <NavLink to="/goit-react-hw-08-phonebook/contacts">
              Contacts
            </NavLink>
          )}
        </div>

        <div>
          {token ? (
            <div className={s.headerReg}>
              <div>
                <p>{user.name}</p>
                <p>{user.email}</p>
              </div>
              <button type="button" onClick={handleLogout}>
                Logout
              </button>
            </div>
          ) : (
            <div className={s.headerReg}>
              <NavLink to="/goit-react-hw-08-phonebook/register">
                Register
              </NavLink>
              <NavLink to="/goit-react-hw-08-phonebook/login">Login</NavLink>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};
