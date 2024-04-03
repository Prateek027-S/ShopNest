import { VStack, Input, HStack } from 'native-base';
import React from 'react'
import useProfileController from './controller/useProfileController';
import CustomText from '../../Components/UI-Kit/CustomText';
import Colors from '../../Theme/colors';
import CustomButton from '../../Components/UI-Kit/CustomButton';

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
    <VStack>
      <CustomText
        bold
        fontSize={'xl'}
        marginBottom={5}
        marginTop={5}
        marginLeft={15}
        color={Colors.primaryBlue}>
        User Details:-
      </CustomText>
      <VStack mx={4}>
        <Input
          type="text"
          placeholder="First Name"
          onChangeText={handleChange('firstName')}
          onBlur={handleBlur('firstName')}
          value={values.firstName}
          fontFamily={'Poppins-Medium'}
        />
        {touched.firstName && errors.firstName && (
          <CustomText fontSize={'sm'} color={'red'}>
            {errors.firstName}
          </CustomText>
        )}

        <Input
          type="text"
          placeholder="Last Name"
          marginTop={8}
          onChangeText={handleChange('lastName')}
          onBlur={handleBlur('lastName')}
          value={values.lastName}
          fontFamily={'Poppins-Medium'}
        />
        {touched.lastName && errors.lastName && (
          <CustomText fontSize={'sm'} color={'red'}>
            {errors.lastName}
          </CustomText>
        )}

        <Input
          type="text"
          marginTop={8}
          isReadOnly
          label="Email"
          value={email}
          fontFamily={'Poppins-Medium'}
        />

        <Input
          type="number"
          placeholder="Phone No."
          marginTop={8}
          onChangeText={handleChange('phone')}
          onBlur={handleBlur('phone')}
          value={values.phone}
        />
        {touched.phone && errors.phone && (
          <CustomText fontSize={'sm'} color={'red'}>
            {errors.phone}
          </CustomText>
        )}

        <Input
          type="text"
          marginTop={8}
          placeholder="Address"
          value={values.address}
          onChangeText={handleChange('address')}
          onBlur={handleBlur('address')}
        />
        {touched.address && errors.address && (
          <CustomText fontSize={'sm'} color={'red'}>
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