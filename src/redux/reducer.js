import { persistReducer } from 'redux-persist';
import { contactReducer } from './contactSlice';
import storage from 'redux-persist/lib/storage';
import { authReducer } from './authSlice';

const persistConfig = {
  key: 'contact',
  storage,
  blacklist: ['secretKey'],
};

const persistConfigAuth = {
  key: 'token',
  storage,
  blacklist: ['user'],
};

const persistedReducer = persistReducer(persistConfig, contactReducer);
const persistedReducerAuth = persistReducer(persistConfigAuth, authReducer);

export const reducer = {
  contacts: persistedReducer,
  auth: persistedReducerAuth,
};
