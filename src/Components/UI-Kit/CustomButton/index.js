import React from 'react'
import { Button } from 'native-base'
import Colors from '../../../Theme/colors';

const CustomButton = ({
  onPress,
  value,
  size,
  variant,
  isLoading,
  isLoadingText,
  spinnerPlacement,
  LeftIcon,
  EndIcon,
  isDisabled,
  colorScheme,
  w,
  style,
  backgroundColor,
  textColor,
  textStyle,
  alignSelf,
  marginTop,
  ...otherProps
}) => {
  return (
    <Button
      w={w}
      onPress={onPress}
      size={size}
      variant={variant}
      isLoading={isLoading}
      isLoadingText={isLoadingText || value}
      spinnerPlacement={spinnerPlacement}
      isDisabled={isDisabled}
      colorScheme={colorScheme}
      style={style}
      alignSelf={alignSelf}
      marginTop={marginTop}
      borderLeftRadius={20}
      borderRightRadius={20}
      _text={{
        ...textStyle,
        color: textColor
      }}
      {...otherProps}
    >
      {value}
    </Button>
  )
}

export default CustomButton

CustomButton.defaultProps = {
  onPress: () => {},
  value: '',
  size: 'md',
  variant: 'solid',
  isLoading: false,
  isLoadingText: '',
  spinnerPlacement: 'end',
  isDisabled: false,
  w: '90%',
  bg: Colors.activeOrange,
  textColor: Colors.white,
}
