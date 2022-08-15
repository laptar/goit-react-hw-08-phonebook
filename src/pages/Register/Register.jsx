import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import s from './Register.module.css';

import { addToken, getUserAction } from 'redux/reducer';
import { useRegisterUserMutation } from 'redux/authApi';

export const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [registerUser] = useRegisterUserMutation();
  const [inputForm, setInpytForm] = useState({
    name: '',
    email: '',
    password: '',
    confPass: '',
  });
  const [formIsComplite, setFormIsComplite] = useState(false);

  const handleChangeInput = e => {
    setInpytForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  useEffect(() => {
    if (
      inputForm.name &&
      inputForm.email &&
      inputForm.password &&
      inputForm.confPass &&
      inputForm.password === inputForm.confPass
    ) {
      setFormIsComplite(true);
    } else {
      setFormIsComplite(false);
    }
  }, [inputForm]);

  const handleSubmit = async e => {
    e.preventDefault();
    const { data } = await registerUser(inputForm);
    dispatch(getUserAction(data.user));
    dispatch(addToken(data.token));
    navigate('/goit-react-hw-08-phonebook/contacts');
  };
  return (
    <div className="section">
      <form className={s.form} onSubmit={handleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={inputForm.name}
            onChange={handleChangeInput}
          />
        </label>
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
        <label>
          Confirm Password
          <input
            type="text"
            name="confPass"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={inputForm.confPass}
            onChange={handleChangeInput}
          />
        </label>
        <button type="submit" disabled={!formIsComplite}>
          Register
        </button>
      </form>
    </div>
  );
};
