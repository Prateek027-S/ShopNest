import React from 'react'
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import { drawerRoutes } from '../../routes'
import TabNavigation from '../Tab/TabNavigation'
import { Platform, Text, TouchableOpacity, View } from 'react-native'
import { removeAccessToken } from '../../../Utils/services/AsyncStorage.service'
import { useDispatch } from 'react-redux'
import { useTheme } from 'native-base'
import { setAccessToken } from '../../../Store/redux/user/userSlice'

const Drawer = createDrawerNavigator()

const DrawerNavigation = () => {
  const { colors } = useTheme()
  const dispatch = useDispatch()

  const handleLogout = async () => {
    dispatch(setAccessToken(null));
    await removeAccessToken();
  }

  return (
    <>
      <Drawer.Navigator
        screenOptions={{
          headerShown: false,
          unmountOnBlur: true
        }}
        drawerContent={props => {
          const filteredProps = {
            ...props,
            state: {
              ...props.state,
              routeNames: props.state.routeNames,
              routes: props.state.routes
            }
          }
          return (
            <DrawerContentScrollView {...filteredProps} contentContainerStyle={{ marginTop: Platform.OS === 'ios' ? -50 : 0, height: '100%', position: 'relative' }}>
              <DrawerItemList {...filteredProps} />
              <View style={{ borderBottomWidth: 1, position: 'absolute', top: '7%', width: '100%', borderBottomColor: colors.primaryBlue }} />
              <TouchableOpacity style={{ padding: 20, width: '100%' }} onPress={handleLogout}>
                <View style={{ width: 82, flexDirection: 'row', justifyContent: 'space-between' }}>
                  {/* <LogoutIcon /> */}
                  <Text style={{ color: colors.grey900, fontSize: 14, fontWeight: '500' }}>Logout</Text>
                </View>
              </TouchableOpacity>
            </DrawerContentScrollView>
          )
        }}
      >
        <Drawer.Screen
          name='MainTabNavigation' component={TabNavigation} options={{
            drawerLabel: 'MainTabNavigation',
            headerShown: false,
            drawerItemStyle: {
              display: 'none'
            }
          }}
        />
        {
          drawerRoutes.map(item => (
            <Drawer.Screen
              key={item.routeName} name={item.routeName} component={item.component}
              options={{
                drawerLabel: item.drawerLabel,
                //drawerIcon: item.optionIcon,
                drawerLabelStyle: {
                  marginLeft: 5
                },
                /* headerShown: item.headerShown,
                header: item.headerShown
                  ? (
                      item.header
                        ? item.header
                        : () => (<Header headerHeading={t(item.headerHeading)} />)
                    )
                  : () => {} */
              }}
            />
          ))
        }
      </Drawer.Navigator>
    </>
  )
}

export default DrawerNavigation
