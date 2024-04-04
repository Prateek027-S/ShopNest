import {Box, Center, Stack, Heading, Input, Pressable, Text, Icon} from 'native-base';
import React from 'react';
import useLoginController from './controller/useLoginController';
import CustomButton from '../../Components/UI-Kit/CustomButton';
import EyeIcon from '../../Components/UI-Kit/Icons/iconComponents/EyeIcon';
import CrossedEyeIcon from '../../Components/UI-Kit/Icons/iconComponents/CrossedEyeIcon';
import CustomText from '../../Components/UI-Kit/CustomText';
import Colors from '../../Theme/colors';
import CustomInput from '../../Components/UI-Kit/CustomInput';

const LoginScreen = () => {
  const {
    show,
    setShow,
    values,
    errors,
    touched,
    handleSubmit,
    handleChange,
    handleBlur,
  } = useLoginController();

  return (
    <Box flex={1} backgroundColor={Colors.backgroundBlack}>
      <CustomText fontSize={'2xl'} color={Colors.primaryBlue} alignSelf={'center'} marginTop={'20'} fontFamily={'Poppins-Bold'}>Shoppify</CustomText>
    <Center width={'100%'} height={'77%'}>
      <Box alignItems="center">
        <Box
          paddingVertical={20}
          width="400"
          rounded="lg"
          overflow="hidden"
          borderRadius={'20'}
          backgroundColor={Colors.mattBlack}
          >
          <Stack p="4" space={3}>
            <Heading size="xl" alignSelf={'center'} color={'#C7C8CC'} fontFamily={'Poppins-Bold'} marginBottom={4}>
              Login
            </Heading>

            <Stack mx="4">
              <CustomInput
                type="text"
                placeholder="Email ID"
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
              />

              {touched.email && errors.email && (
                <CustomText fontSize={'sm'} marginTop={2} color={Colors.red}>{errors.email}</CustomText>
              )}
            </Stack>

            <Stack mx="4">
              <CustomInput
                type={show ? 'text' : 'password'}
                value={values.password}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                marginTop={'5'}
                placeholder="Password"
                InputRightElement={
                  <Pressable onPress={() => setShow(!show)}>
                    <Icon
                      as={
                        show ? <EyeIcon /> : <CrossedEyeIcon />
                      }
                      size={5}
                      mr="2"
                      color="muted.400"
                    />
                  </Pressable>
                }
              />

              {touched.password && errors.password && (
                <CustomText fontSize={'sm'} marginTop={2} color={Colors.red}>
                  {errors.password}
                </CustomText>
              )}
            </Stack>

            <CustomButton
              marginTop={10}
              alignSelf={'center'}
              value={<CustomText bold color={'white'}>Login</CustomText>}
              onPress={handleSubmit}
            />
          </Stack>
        </Box>
      </Box>
    </Center>
    </Box>
  );
};

export default LoginScreen;
