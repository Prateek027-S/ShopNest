import React from 'react';
import {NativeBaseProvider, Box, Text} from 'native-base';
import theme from './Theme';
import LoginScreen from './Screens/Login/Login.screen';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import store from './Store';

const App = () => {
  return (
    <Provider store={store}>
      <NativeBaseProvider theme={theme}>
        <SafeAreaProvider>
          <LoginScreen />
        </SafeAreaProvider>
      </NativeBaseProvider>
    </Provider>
  );
};

export default App;
