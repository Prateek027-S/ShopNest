import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DrawerNavigation from '../Drawer/DrawerNavigation';

const Stack = createNativeStackNavigator();

const AuthenticatedStackNavigation = () => {

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        key='MainDrawerNavigation'
        name='MainDrawerNavigation'
        component={DrawerNavigation}
        options={{
          animationEnabled: false
        }}
      />
    </Stack.Navigator>
  )
}

export default AuthenticatedStackNavigation
