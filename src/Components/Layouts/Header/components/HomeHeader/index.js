import React from 'react';
import DrawerMenuIcon from '../../../../UI-Kit/Icons/iconComponents/DrawerMenuIcon';
import { navigationRef } from '../../../../../Navigators/utils';
import { DrawerActions } from '@react-navigation/native';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../../Header.styles';

const HomeHeader = ({ colors }) => {
  return (
    <View style={styles.root}>
      <TouchableOpacity style={styles.iconStyle} onPress={() => navigationRef.dispatch(DrawerActions.toggleDrawer())}>
        <DrawerMenuIcon />
      </TouchableOpacity>

      <View style={styles.headingStyle}>
        <Text style={{ color: colors.primaryBlue, fontWeight: 'bold', fontSize: 18 }}>Shoppify</Text>
      </View>

    </View>
  )
}

export default HomeHeader
