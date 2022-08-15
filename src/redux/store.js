import { configureStore } from '@reduxjs/toolkit';
import { persiReducer } from './reducer';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

// import { contactsApi } from './contactsApi';
import { authApi } from './authApi';

// import { reducer } from './reducer';

export const store = configureStore({
  reducer: persiReducer,
  devTools: process.env.NODE_ENV === 'development',
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
      // .concat(contactsApi.middleware)
      .concat(authApi.middleware),
});

export const persistor = persistStore(store);
