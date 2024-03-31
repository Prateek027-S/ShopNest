import 'react-native-gesture-handler';
import React from 'react';
import {NativeBaseProvider} from 'native-base';
import theme from './Theme';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import ApplicationNavigator from './Navigators';
import { Provider } from 'react-redux';
import { persistor, store } from './Store';
import { PersistGate } from 'redux-persist/integration/react';

const App = () => {

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NativeBaseProvider theme={theme}>
          <SafeAreaProvider>
            <ApplicationNavigator />
          </SafeAreaProvider>
        </NativeBaseProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
