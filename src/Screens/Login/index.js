import {
  Box,
  Center,
  Stack,
  Heading,
  FormControl,
  Input,
  WarningOutlineIcon,
} from 'native-base';
import React from 'react';
import useLoginController from './controller/useLoginController';
import CustomButton from '../../Components/UI-Kit/CustomButton'

const Login = () => {
  const {
    values, errors, touched, handleSubmit, handleChange
  } = useLoginController();

  return (
    <Center width={'100%'} height={'50%'}>
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

            <FormControl isRequired>
              <Stack mx="4">
                <FormControl.Label>Email ID</FormControl.Label>
                <Input type='text' name="email" placeholder="Email" value={values.email} onChange={handleChange('email')}/>
                {touched.email && errors.email && (
                  <FormControl.ErrorMessage
                    leftIcon={<WarningOutlineIcon size="xs" />}
                  >
                    {errors.email}
                  </FormControl.ErrorMessage>
                )}
              </Stack>
            </FormControl>

            <FormControl isRequired>
              <Stack mx="4">
                <FormControl.Label>Password</FormControl.Label>
                <Input type="password" name="password" placeholder="Password" value={values.password} onChange={handleChange('password')} />
                {touched.password && errors.password && (
                  <FormControl.ErrorMessage
                    leftIcon={<WarningOutlineIcon size="xs" />}
                  >
                    {errors.password}
                  </FormControl.ErrorMessage>
                )}
              </Stack>
            </FormControl>

            <CustomButton marginTop={10} alignSelf={'center'} value="Log in" onPress={handleSubmit} />
          </Stack>
        </Box>
      </Box>
    </Center>
  );
};

export default Login;
