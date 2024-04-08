import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DrawerNavigation from '../Drawer/DrawerNavigation';
import { authenticatedStackNavigationRoutes } from '../../routes';

const Stack = createNativeStackNavigator();

const AuthenticatedStackNavigation = () => {

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        key="MainDrawerNavigation"
        name="MainDrawerNavigation"
        component={DrawerNavigation}
        options={{
          animationEnabled: false,
        }}
      />

      {authenticatedStackNavigationRoutes.map(item => (
        <Stack.Screen
          key={item.routeName}
          name={item.routeName}
          component={item.component}
          options={{
            animationEnabled: false,
            headerShown: item.headerShown,
            header: item.headerShown
              ? item.header
                ? item.header
                : () => <Header headerHeading={item.headerHeading} />
              : () => {},
          }}
        />
      ))}
    </Stack.Navigator>
  );
}

export default AuthenticatedStackNavigation
