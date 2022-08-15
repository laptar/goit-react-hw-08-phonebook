import { useDeleteContactsMutation } from 'redux/authApi';

export const ContactItem = ({ id, name, number }) => {
  const [deleteContacts] = useDeleteContactsMutation();

  return (
    <li>
      <p>{name}</p>
      <p>{number}</p>
      <button type="button" onClick={() => deleteContacts(id)}>
        Delete
      </button>
    </li>
  );
};
