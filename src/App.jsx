import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Layout } from 'components/Layout/Layout';

import { HomePage } from 'pages/HomePage/HomePage';
import { Contacts } from 'pages/Contacts/Contacts';
import { Register } from 'pages/Register/Register';
import { Login } from 'pages/Login/Login';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage></HomePage>} />
          <Route path="contacts" element={<Contacts></Contacts>} />
          <Route path="register" element={<Register></Register>} />
          <Route path="login" element={<Login></Login>} />
        </Route>
      </Routes>
    </>
  );
};
