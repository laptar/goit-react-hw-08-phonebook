import { NavLink } from 'react-router-dom';
import s from './Header.module.css';
export const Header = () => {
  return (
    <header className={s.header}>
      <nav className={s.headerNav}>
        <div className={s.headerLink}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/contacts">Contacts</NavLink>
        </div>

        <div>
          <div className={s.headerReg}>
            <NavLink to="/register">Register</NavLink>
            <NavLink to="/login">Login</NavLink>
          </div>
          {/* <div>
            <p>User</p>
            <button>Logout</button>
          </div> */}
        </div>
      </nav>
    </header>
  );
};
