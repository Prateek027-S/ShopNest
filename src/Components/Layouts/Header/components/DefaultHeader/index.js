import React from 'react'
import BackArrowIcon from '../../../../UI-Kit/Icons/iconComponents/BackArrowIcon'
import { navigationRef } from '../../../../../Navigators/utils'
import { useTheme } from 'native-base'
import { TouchableOpacity, View } from 'react-native'
import { styles } from '../../Header.styles'
import CustomText from '../../../../UI-Kit/CustomText'

const DefaultHeader = ({ heading }) => {
  const { colors } = useTheme()

  return (
    <>
      <View style={styles.root} backgroundColor={colors.backgroundBlack}>
        <TouchableOpacity style={{ ...styles.iconStyle, marginLeft: 5 }} onPress={() => navigationRef.goBack()}>
          <BackArrowIcon />
        </TouchableOpacity>

        <View style={styles.headingStyle}>
          <CustomText style={{ color: colors.white, fontSize: 18 }}>{heading}</CustomText>
        </View>
      </View>
    </>
  )
}

export default DefaultHeader
