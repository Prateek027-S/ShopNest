import { VStack, Input, HStack } from 'native-base';
import React from 'react'
import useProfileController from './controller/useProfileController';
import CustomText from '../../Components/UI-Kit/CustomText';
import Colors from '../../Theme/colors';
import CustomButton from '../../Components/UI-Kit/CustomButton';
import CustomInput from '../../Components/UI-Kit/CustomInput';

const ProfileScreen = () => {
  const {
    email,
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useProfileController();

  return (
    <VStack flex={1} backgroundColor={Colors.backgroundBlack}>
      <CustomText
        fontSize={'xl'}
        marginBottom={5}
        marginTop={5}
        marginLeft={15}
        color={Colors.lightBronze}>
        User Details:-
      </CustomText>
      <VStack mx={4}>
        <CustomInput
          type="text"
          placeholder="First Name"
          onChangeText={handleChange('firstName')}
          onBlur={handleBlur('firstName')}
          value={values.firstName}
          fontFamily={'Poppins-Medium'}
        />
        {touched.firstName && errors.firstName && (
          <CustomText fontSize={'sm'} color={Colors.red} marginTop={2}>
            {errors.firstName}
          </CustomText>
        )}

        <CustomInput
          type="text"
          placeholder="Last Name"
          marginTop={8}
          onChangeText={handleChange('lastName')}
          onBlur={handleBlur('lastName')}
          value={values.lastName}
          fontFamily={'Poppins-Medium'}
        />
        {touched.lastName && errors.lastName && (
          <CustomText fontSize={'sm'} color={Colors.red} marginTop={2}>
            {errors.lastName}
          </CustomText>
        )}

        <CustomInput
          type="text"
          marginTop={8}
          isReadOnly
          label="Email"
          value={email}
          fontFamily={'Poppins-Medium'}
        />

        <CustomInput
          type="number"
          placeholder="Phone No."
          marginTop={8}
          onChangeText={handleChange('phone')}
          onBlur={handleBlur('phone')}
          value={values.phone}
        />
        {touched.phone && errors.phone && (
          <CustomText fontSize={'sm'} color={Colors.red} marginTop={2}>
            {errors.phone}
          </CustomText>
        )}

        <CustomInput
          type="text"
          marginTop={8}
          placeholder="Address"
          value={values.address}
          onChangeText={handleChange('address')}
          onBlur={handleBlur('address')}
        />
        {touched.address && errors.address && (
          <CustomText fontSize={'sm'} color={Colors.red} marginTop={2}>
            {errors.address}
          </CustomText>
        )}
      </VStack>
      <CustomButton
        marginTop={10}
        width={40}
        alignSelf={'center'}
        value="Save"
        onPress={handleSubmit}
      />
    </VStack>
  );
}

export default ProfileScreen;