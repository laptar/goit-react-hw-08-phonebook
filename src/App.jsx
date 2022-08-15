import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Layout } from 'components/Layout/Layout';

import { HomePage } from 'pages/HomePage/HomePage';
import { Contacts } from 'pages/Contacts/Contacts';
import { Register } from 'pages/Register/Register';
import { Login } from 'pages/Login/Login';
import { PrivateRout } from 'components/PrivateRout/Privaterout';
import { PublicRout } from 'components/PublicRoute/PublicRoute';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/goit-react-hw-08-phonebook" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="contacts"
            element={
              <PrivateRout>
                <Contacts />
              </PrivateRout>
            }
          />
          <Route
            path="register"
            element={
              <PublicRout>
                <Register />
              </PublicRout>
            }
          />
          <Route
            path="login"
            element={
              <PublicRout>
                <Login />
              </PublicRout>
            }
          />
        </Route>
        <Route path="*" element={<Layout />}></Route>
      </Routes>
    </>
  );
};
