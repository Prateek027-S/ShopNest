import { SafeAreaView } from 'react-native-safe-area-context';
import AppRootNavigator from './Navigations';
import { LOADER_HANDLER_TYPES } from '../Utils/constants';
import { useSelector } from 'react-redux';
import AppLoader from '../Components/UI-Kit/AppLoader';

const ApplicationNavigator = () => {
  const { [LOADER_HANDLER_TYPES.appLoader]: appLoader } = useSelector((state) => state.loader);

  return (
    <SafeAreaView edges={['right', 'left']} style={{flex: 1}}>
      {
        (appLoader) ? <AppLoader loading={appLoader} /> : <></>
      }
      <AppRootNavigator />
    </SafeAreaView>
  );
};

export default ApplicationNavigator;