import { NavLink } from 'react-router-dom';

export const Header = () => {
  return (
    <header>
      <nav>
        <NavLink to="/">Home</NavLink>
        <div>
          <div>
            <NavLink to="/register">Register</NavLink>
            <NavLink to="/login">Login</NavLink>
          </div>
          <div>
            <p>User</p>
            <button>Logout</button>
          </div>
        </div>
      </nav>
    </header>
  );
};
