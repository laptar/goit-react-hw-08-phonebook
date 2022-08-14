import { useEffect } from 'react';
import { useState } from 'react';
import s from './Register.module.css';
export const Register = () => {
  const [inputFor, setInpytForm] = useState({
    name: '',
    email: '',
    pass: '',
    confPass: '',
  });
  const [formIsComplite, setFormIsComplite] = useState(false);
  const handleChangeInput = e => {
    setInpytForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  useEffect(() => {
    console.log('notIf');
    if (
      inputFor.name &&
      inputFor.email &&
      inputFor.pass &&
      inputFor.confPass &&
      inputFor.pass === inputFor.confPass
    ) {
      console.log('if');
      setFormIsComplite(prev => !prev);
    }
  }, [inputFor]);
  return (
    <div className="section">
      <form className={s.form}>
        <label>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={inputFor.name}
            onChange={handleChangeInput}
          />
        </label>
        <label>
          Email
          <input
            type="text"
            name="email"
            pattern="^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={inputFor.email}
            onChange={handleChangeInput}
          />
        </label>
        <label>
          Password
          <input
            type="text"
            name="pass"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={inputFor.pass}
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
            value={inputFor.confPass}
            onChange={handleChangeInput}
          />
        </label>
        <button type="button" disabled={!formIsComplite}>
          Register
        </button>
      </form>
    </div>
  );
};
