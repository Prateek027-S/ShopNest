import React from 'react';
import { NativeBaseProvider, Box, Text } from 'native-base';
import theme from './Theme';
import Login from './Screens/Login';
import { SafeAreaProvider } from 'react-native-safe-area-context';


const App = () => {

  return (
    <NativeBaseProvider theme={theme}>
      <SafeAreaProvider>
        <Login />
      </SafeAreaProvider>
    </NativeBaseProvider>
  );
}

export default App;
