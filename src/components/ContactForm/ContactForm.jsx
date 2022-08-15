import { useState } from 'react';
import { useAddContactsMutation, useGetContactsQuery } from 'redux/authApi';

export const ContactForm = () => {
  const [addContact] = useAddContactsMutation();
  const { data: contacts = [] } = useGetContactsQuery();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const inputName = {
    name: setName,
    number: setNumber,
  };
  const handleChangeInput = e => {
    const { name, value } = e.target;
    inputName[name](value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (contacts.find(el => el.name.toLowerCase() === name.toLowerCase())) {
      alert(`${name} is already in contacts`);
    } else {
      addContact({ name, number });
      reset();
    }
  };
  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleChangeInput}
        />
      </label>
      <label>
        Namber
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleChangeInput}
        />
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
};
