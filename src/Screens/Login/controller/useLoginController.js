import {useFormik} from 'formik';
import * as yup from 'yup';
import {LOGIN_CREDENTIALS} from '../../../Utils/constants';
import { Alert } from 'react-native';
import React from 'react';
import { login, setAccessToken } from '../../../Store/redux/user/userSlice';
import { useDispatch } from 'react-redux';
import { saveAccessToken } from '../../../Utils/services/AsyncStorage.service';
import config from '../../../Config/app.config';


const useLoginController = () => {
  const [show, setShow] = React.useState(false);
  const dispatch = useDispatch();

  const handleLoginOkPress = async () => {
    await saveAccessToken();
    dispatch(setAccessToken(config.ACCESS_TOKEN));
    console.log("Access Token saved in Async storage.");
  }

  const loginFormSchema = yup.object({
    email: yup
      .string()
      .label('email')
      .email('Please enter valid email!')
      .required('Please enter your email'),
    password: yup
      .string()
      .label('password')
      .min(6, ({ min }) => `Password must be at least ${min} characters`)
      .max(32, ({ max }) => `Password must be at most ${max} characters`)
      .required('Please enter your password'),
  });

  const {handleSubmit, values, handleChange, errors, resetForm, touched, handleBlur} =
    useFormik({
      initialValues: {
        email: '',
        password: '',
      },
      validateOnChange: true,
      validationSchema: loginFormSchema,
      onSubmit: async values => {
        console.log('value from Formik: ', values);
        if (
          values.email === LOGIN_CREDENTIALS.email &&
          values.password === LOGIN_CREDENTIALS.password
        ) {
          dispatch(login(values.email));
          Alert.alert('Login successful', 'Press ok to continue', [
            {text: 'OK', onPress: () => handleLoginOkPress()},
          ]);

        } else {
          Alert.alert(
            'Incorrect Credentials',
            'Please enter correct login credentials!',
            [{text: 'OK', onPress: () => console.log('OK Pressed')}],
          );
        }
        resetForm();
      },
    });

  return {
    show,
    setShow,
    values,
    errors,
    touched,
    handleSubmit,
    handleChange,
    handleBlur
  };
};

export default useLoginController;
