import { SafeAreaView } from 'react-native-safe-area-context';
import AppRootNavigator from './Navigations';

const ApplicationNavigator = () => {

  return (
    <SafeAreaView edges={['right', 'left']} style={{flex: 1}}>
      <AppRootNavigator />
    </SafeAreaView>
  );
};

export default ApplicationNavigator;