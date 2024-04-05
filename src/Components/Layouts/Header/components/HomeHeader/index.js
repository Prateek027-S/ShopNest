import React from 'react';
import DrawerMenuIcon from '../../../../UI-Kit/Icons/iconComponents/DrawerMenuIcon';
import { navigationRef } from '../../../../../Navigators/utils';
import { DrawerActions } from '@react-navigation/native';
import { TouchableOpacity, View } from 'react-native';
import { styles } from '../../Header.styles';
import CustomText from '../../../../UI-Kit/CustomText';
import { Box } from 'native-base';

const HomeHeader = ({ colors }) => {
  return (
    <Box style={styles.root} backgroundColor={colors.backgroundBlack}>
      <TouchableOpacity style={styles.iconStyle} onPress={() => navigationRef.dispatch(DrawerActions.toggleDrawer())}>
        <DrawerMenuIcon />
      </TouchableOpacity>

      <View style={styles.headingStyle}>
        <CustomText color={colors.white} fontSize={'lg'}>Discover products</CustomText>
      </View>

    </Box>
  )
}

export default HomeHeader
