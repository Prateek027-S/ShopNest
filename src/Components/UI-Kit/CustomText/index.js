import { Text } from 'native-base'
import React from 'react'

const CustomText = ({
  fontSize,
  marginTop,
  marginBottom,
  marginLeft,
  color,
  textAlign,
  fontFamily,
  children,
  ...otherProps
}) => {
  return (
    <Text
      fontSize={fontSize}
      marginTop={marginTop}
      marginBottom={marginBottom}
      marginLeft={marginLeft}
      color={color}
      textAlign={textAlign}
      fontFamily={fontFamily}
      {...otherProps}
    >
      {children}
    </Text>
  )
}

export default CustomText

CustomText.defaultProps = {
  fontSize: 'md',
  fontFamily: 'Poppins-Medium'
}
