import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { authenticatedStackNavigationRoutes } from '@/Navigators/routes';
import DrawerNavigation from '../Drawer/DrawerNavigation';
import Header from '@/Components/Layouts/Header';

const Stack = createStackNavigator()

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
      {
        authenticatedStackNavigationRoutes.map(item => (
          <Stack.Screen
            key={item.routeName}
            name={item.routeName}
            component={item.component}
            options={{
              animationEnabled: false,
              headerShown: item.headerShown,
              header: item.headerShown
                ? (
                    item.header
                      ? item.header
                      : () => (<Header headerHeading={item.headerHeading} />)
                  )
                : () => {}
            }}
          />
        ))
      }
    </Stack.Navigator>
  )
}

export default AuthenticatedStackNavigation
