import api from '../../Network/api';
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';

const updatedMiddleware = (getDefaultMiddleware) => {
  const middlewares = getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
    }
  }).concat(api.middleware)

  return middlewares;
}

export default updatedMiddleware;
