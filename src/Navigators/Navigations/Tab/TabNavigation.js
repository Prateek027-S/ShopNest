import React, { useRef } from 'react'
import { SCREEN_NAMES } from '../../../Utils/constants'
import * as Animatable from 'react-native-animatable'
import { applicationTabRoutes } from '../../routes'
import { Platform, StyleSheet, TouchableOpacity } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Header from '../../../Components/Layouts/Header'
import Colors from '../../../Theme/colors'

const Tab = createBottomTabNavigator()


const TabButton = (props) => {
  const { item, onPress, accessibilityState } = props
  const focused = accessibilityState.selected
  const viewRef = useRef(null)

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={1}
      style={styles.container }
    >
      <Animatable.View
        ref={viewRef}
        duration={1000}
        style={styles.container}
      >
        {
          focused ? <item.activeIcon /> : <item.inActiveIcon />
        }
      </Animatable.View>
    </TouchableOpacity>
  )
}

const TabNavigation = () => {

  return (
    <Tab.Navigator
      initialRouteName={SCREEN_NAMES.home}
      backBehavior='history'
      screenOptions={{
        unmountOnBlur: true,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: Platform.OS === 'ios' ? 80 : 60,
          position: 'absolute',
          bottom: 0,
          right: 0,
          left: 0,
          backgroundColor: Colors.backgroundBlack,
        },
        tabBarLabelStyle: {
          margin: 0
        }
      }}
      sceneContainerStyle={{
        paddingBottom: '14%'
      }}
    >
      {
        applicationTabRoutes.map((item, index) => (
          <Tab.Screen
            key={index} name={item.routeName} component={item.component}
            options={{
              tabBarShowLabel: false,
              tabBarButton: (props) => <TabButton {...props} item={item} />,
              header: item.header
                ? (
                    item.header
                      ? item.header
                      : () => (<Header variant='default' headerHeading={item.headerHeading} />)
                  )
                : () => {},
              headerShown: item.headerShown
            }}
          />
        ))
      }
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default TabNavigation
