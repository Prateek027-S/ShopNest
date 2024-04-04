import {Input} from 'native-base';
import React from 'react';

const CustomInput = ({
  type,
  placeholder,
  color,
  fontFamily,
  value,
  onChangeText,
  onBlur,
  borderColor,
  ...otherProps
}) => {
  return (
    <Input
      type={type}
      placeholder={placeholder}
      onChangeText={onChangeText}
      onBlur={onBlur}
      value={value}
      color={color}
      borderColor={borderColor}
      {...otherProps}
    />
  );
};

export default CustomInput;

CustomInput.defaultProps = {
    type: "text",
    fontFamily: 'Poppins-Medium',
    color: '#B4B4B8',
    borderColor: '#58585c'
};
