import {useFormik} from 'formik';
import * as yup from 'yup';
import {LOGIN_CREDENTIALS, SNACKBAR_PLACEMENT, SNACKBAR_TYPE} from '../../../Utils/constants';
import {useState} from 'react';
import {login, setAccessToken} from '../../../Store/redux/user/user.slice';
import {useDispatch} from 'react-redux';
import {saveAccessToken} from '../../../Utils/services/AsyncStorage.service';
import config from '../../../Config/app.config';
import { handleShowToast } from '../../../Utils/helpers/toast.helpers';

const useLoginController = () => {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();

  const loginFormSchema = yup.object({
    email: yup
      .string()
      .label('email')
      .email('Please enter valid email!')
      .required('Please enter your email'),
    password: yup
      .string()
      .label('password')
      .min(6, ({min}) => `Password must be at least ${min} characters`)
      .max(32, ({max}) => `Password must be at most ${max} characters`)
      .required('Please enter your password'),
  });

  const {
    handleSubmit,
    values,
    handleChange,
    errors,
    resetForm,
    touched,
    handleBlur,
  } = useFormik({
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
        handleShowToast({
          status: SNACKBAR_TYPE.success,
          description: 'Login successful!',
          placement: SNACKBAR_PLACEMENT.topRight
        });
        await saveAccessToken();
        dispatch(setAccessToken(config.ACCESS_TOKEN));
        console.log('Access Token saved in Async storage.');
      } else {
        handleShowToast({
          status: SNACKBAR_TYPE.error,
          description: 'Incorrect credentials!!',
          placement: SNACKBAR_PLACEMENT.bottomRight
        });
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
    handleBlur,
  };
};

export default useLoginController;
