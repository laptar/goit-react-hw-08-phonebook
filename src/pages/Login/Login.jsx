import { useEffect } from 'react';
import { useState } from 'react';

import s from './Login.module.css';

import { addToken, getUserAction } from 'redux/reducer';
import { useLoginUserMutation } from 'redux/authApi';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
export const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loginUsers] = useLoginUserMutation();
  const [inputForm, setInpytForm] = useState({
    email: '',
    password: '',
  });

  const [formIsComplite, setFormIsComplite] = useState(false);

  const handleChangeInput = e => {
    setInpytForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  useEffect(() => {
    if (inputForm.password && inputForm.email) {
      setFormIsComplite(true);
    } else {
      setFormIsComplite(false);
    }
  }, [inputForm]);

  const handleSubmit = async e => {
    e.preventDefault();
    const { data } = await loginUsers(inputForm);
    dispatch(getUserAction(data.user));
    dispatch(addToken(data.token));

    navigate('/goit-react-hw-08-phonebook/contacts');
  };
  return (
    <div className="section">
      <form className={s.form} onSubmit={handleSubmit}>
        <label>
          Email
          <input
            type="text"
            name="email"
            // pattern="^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={inputForm.email}
            onChange={handleChangeInput}
          />
        </label>
        <label>
          Password
          <input
            type="text"
            name="password"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={inputForm.pass}
            onChange={handleChangeInput}
          />
        </label>

        <button type="submit" disabled={!formIsComplite}>
          Login
        </button>
      </form>
    </div>
  );
};
