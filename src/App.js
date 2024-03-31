import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import {NativeBaseProvider} from 'native-base';
import theme from './Theme';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import { useDispatch } from 'react-redux';
import ApplicationNavigator from './Navigators';
import { getAccessToken } from './Utils/services/AsyncStorage.service';
import { setAccessToken } from './Store/redux/user/userSlice';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const initializeApp = async () => {
      const token = await getAccessToken();
      dispatch(setAccessToken(token));
    };
    initializeApp();
  }, []);

  return (
      <NativeBaseProvider theme={theme}>
        <SafeAreaProvider>
          <ApplicationNavigator />
        </SafeAreaProvider>
      </NativeBaseProvider>
  );
};

export default App;
