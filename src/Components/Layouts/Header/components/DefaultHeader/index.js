import React from 'react'
import BackArrowIcon from '@/Components/UI-Kit/Icons/iconComponents/BackArrowIcon'
import { navigationRef } from '../../../../../Navigators/utils'
import { useTheme } from 'native-base'
import { TouchableOpacity, View } from 'react-native'
import { styles } from '../../Header.styles'
import CustomText from '../../../../UI-Kit/CustomText'

const DefaultHeader = ({ heading }) => {
  const { colors } = useTheme()

  return (
    <>
      <View style={styles.root}>
        <TouchableOpacity style={{ ...styles.iconStyle, marginLeft: 5 }} onPress={() => navigationRef.goBack()}>
          <BackArrowIcon />
        </TouchableOpacity>

        <View style={styles.headingStyle}>
          <CustomText style={{ color: colors.primaryBlue, fontWeight: 'bold', fontSize: 18 }}>{heading}</CustomText>
        </View>
      </View>
    </>
  )
}

export default DefaultHeader
