import React from 'react'
import BackArrowIcon from '@/Components/UI-Kit/Icons/iconComponents/BackArrowIcon'
import { navigationRef } from '../../../../../Navigators/utils'
import { useTheme } from 'native-base'
import { Text, TouchableOpacity, View } from 'react-native'
import { styles } from '../../Header.styles'

const DefaultHeader = ({ heading }) => {
  const { colors } = useTheme()

  return (
    <>
      <View style={styles.root}>
        <TouchableOpacity style={{ ...styles.iconStyle, marginLeft: 5 }} onPress={() => navigationRef.goBack()}>
          <BackArrowIcon />
        </TouchableOpacity>

        <View style={styles.headingStyle}>
          <Text style={{ color: colors.primaryBlue, fontWeight: 'bold', fontSize: 18 }}>{heading}</Text>
        </View>
      </View>
    </>
  )
}

export default DefaultHeader
