import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Layout } from 'components/Layout/Layout';
import { ContactForm } from './components/ContactForm/ContactForm';
import { Filter } from './components/Filter/Filter';
import { ContactList } from './components/ContactList/ContactList';
import { HomePage } from 'pages/HomePage/HomePage';
import { Contacts } from 'pages/Contacts/Contacts';
import { Register } from 'pages/Register/Register';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage></HomePage>} />
          <Route path="contacts" element={<Contacts></Contacts>} />
          <Route path="register" element={<Register></Register>} />
        </Route>
      </Routes>
      {/* <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList /> */}
    </>
  );
};
