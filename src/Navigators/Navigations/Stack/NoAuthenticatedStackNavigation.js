import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { notAuthenticatedRoutes } from '../../routes';

const Stack = createNativeStackNavigator();

const NoAuthenticatedStackNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {
        notAuthenticatedRoutes.map(item => (
          <Stack.Screen
            key={item.routeName}
            name={item.routeName}
            component={item.component}
            options={{ animationEnabled: false, headerShown: false }}
          />
        ))
      }
    </Stack.Navigator>
  )
}

export default NoAuthenticatedStackNavigation
