// import s from './Contacts.module.css';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
export const Contacts = () => {
  return (
    <div className="section">
      <ContactForm />
      <Filter />
      <ContactList />
    </div>
  );
};
