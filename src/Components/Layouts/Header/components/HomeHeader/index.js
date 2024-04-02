import React from 'react';
import DrawerMenuIcon from '../../../../UI-Kit/Icons/iconComponents/DrawerMenuIcon';
import { navigationRef } from '../../../../../Navigators/utils';
import { DrawerActions } from '@react-navigation/native';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../../Header.styles';
import CustomText from '../../../../UI-Kit/CustomText';

const HomeHeader = ({ colors }) => {
  return (
    <View style={styles.root}>
      <TouchableOpacity style={styles.iconStyle} onPress={() => navigationRef.dispatch(DrawerActions.toggleDrawer())}>
        <DrawerMenuIcon />
      </TouchableOpacity>

      <View style={styles.headingStyle}>
        <CustomText style={{ color: colors.primaryBlue, fontWeight: 'bold', fontSize: 18 }}>Shoppify</CustomText>
      </View>

    </View>
  )
}

export default HomeHeader
