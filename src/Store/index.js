import { configureStore } from '@reduxjs/toolkit';
import { persistedReducer } from './redux';
import { persistStore } from 'redux-persist';
import updatedMiddleware from './middleware';
import { setupListeners } from '@reduxjs/toolkit/query';


const store = configureStore({
  reducer: persistedReducer,
  middleware: updatedMiddleware,
});

const persistor = persistStore(store);

setupListeners(store.dispatch);

export { store, persistor };
