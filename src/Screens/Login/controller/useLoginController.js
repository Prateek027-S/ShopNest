import { useFormik } from 'formik';
import * as yup from 'yup';
import { LOGIN_CREDENTIALS } from '../../../Utils/constants';


const useLoginController = () => {
  const loginFormSchema = yup.object({
    email: yup
      .string()
      .label('email')
      .email()
      .required("Please enter your email"),
    password: yup
      .string()
      .label('password')
      .min(6)
      .max(32)
      .required("Please enter your password")
  })

  const {handleSubmit, values, handleChange, errors, resetForm, touched} =
    useFormik({
      initialValues: {
        email: '',
        password: '',
      },
      validationSchema: loginFormSchema,
      onSubmit: async (values) => {
        console.log('value from Formik: ', values);
        if (
          values.email === LOGIN_CREDENTIALS.email &&
          values.password === LOGIN_CREDENTIALS.password
        ) {
          Alert.alert('Login successful', 'Press ok to continue', [
            {text: 'OK', onPress: () => console.log('OK Pressed')},
        ])

          console.log('Login successful!');
        } else {
          Alert.alert('Incorrect Credentials', 'Please enter correct login credentials!', [
            {text: 'OK', onPress: () => console.log('OK Pressed')},
        ])

        }
        resetForm();
      },
    });

  return {
    values,
    errors,
    touched,
    handleSubmit,
    handleChange,
  }
}

export default useLoginController
