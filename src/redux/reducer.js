import { combineReducers, createSlice } from '@reduxjs/toolkit';
import { authApi } from './authApi';

import { persistReducer } from 'redux-persist';

import storage from 'redux-persist/lib/storage';

const contactsSlice = createSlice({
  name: 'token',
  initialState: '',
  reducers: {
    addToken: (_, action) => action.payload,
  },
});

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    filterContactAction: (_, action) => action.payload,
  },
});
const userSlice = createSlice({
  name: 'user',
  initialState: { name: '', email: '' },
  reducers: {
    getUserAction: (_, action) => action.payload,
  },
});

export const reducer = combineReducers({
  filter: filterSlice.reducer,
  user: userSlice.reducer,
  token: contactsSlice.reducer,
  [authApi.reducerPath]: authApi.reducer,
});

const persistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['token'],
};

export const persiReducer = persistReducer(persistConfig, reducer);
export const { addToken } = contactsSlice.actions;
export const { filterContactAction } = filterSlice.actions;
export const { getUserAction } = userSlice.actions;
