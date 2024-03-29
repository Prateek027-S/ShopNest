import {Box, Center, Stack, Heading, Input, Button, Text} from 'native-base';
import React from 'react';
import useLoginController from './controller/useLoginController';
import CustomButton from '../../Components/UI-Kit/CustomButton';

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
    <Center width={'100%'} height={'70%'}>
      <Box alignItems="center">
        <Box
          paddingVertical={20}
          width="400"
          rounded="lg"
          overflow="hidden"
          borderColor="coolGray.200"
          borderWidth="1">
          <Stack p="4" space={3}>
            <Heading size="2xl" alignSelf={'center'}>
              Login
            </Heading>

            <Stack mx="4">
              <Input
                type="text"
                placeholder="Email ID"
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
              />

              {touched.email && errors.email && (
                <Text style={{fontSize: 10, color: 'red'}}>{errors.email}</Text>
              )}
            </Stack>

            <Stack mx="4">
              <Input
                type={show ? 'text' : 'password'}
                value={values.password}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                marginTop={'5'}
                InputRightElement={
                  <Button
                    size="xs"
                    rounded="none"
                    w="1/6"
                    h="full"
                    onPress={() => setShow(!show)}>
                    {show ? 'Hide' : 'Show'}
                  </Button>
                }
                placeholder="Password"
              />

              {touched.password && errors.password && (
                <Text style={{fontSize: 10, color: 'red'}}>
                  {errors.password}
                </Text>
              )}
            </Stack>

            <CustomButton
              marginTop={10}
              alignSelf={'center'}
              value="Log in"
              onPress={handleSubmit}
            />
          </Stack>
        </Box>
      </Box>
    </Center>
  );
};

export default LoginScreen;
