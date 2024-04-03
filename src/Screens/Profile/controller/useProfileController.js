import * as yup from 'yup'
import { useFormik } from 'formik'
import { useSelector, useDispatch } from 'react-redux';
import { setUserInfo } from '../../../Store/redux/user/user.slice';
import { handleShowToast } from '../../../Utils/helpers/toast.helpers';
import { CHAR_ONLY_REG_EXP, PHONE_REG_EXP, SNACKBAR_PLACEMENT, SNACKBAR_TYPE } from '../../../Utils/constants';
import { goBackNavigation } from '../../../Navigators/utils';




const useProfileController = () => {
  const dispatch = useDispatch();
  const {firstName, lastName, email, mobile, address} = useSelector(
    state => state.userSlice,
  );

  const profileSchema = yup.object({
    firstName: yup
      .string()
      .min(2)
      .matches(CHAR_ONLY_REG_EXP, 'Please enter valid name')
      .required('Please enter your first name'),
    lastName: yup
      .string()
      .min(2)
      .matches(CHAR_ONLY_REG_EXP, 'Please enter valid name')
      .required('Please enter your last name'),
    phone: yup
      .string()
      .matches(PHONE_REG_EXP, 'Phone number is not valid')
      .required('Please enter your phone number'),
    address: yup
      .string()
      .required('Please enter your address')
  });

  const {values, errors, touched, handleChange, handleBlur, handleSubmit} =
    useFormik({
      initialValues: {
        firstName: firstName,
        lastName: lastName,
        phone: mobile,
        address: address,
      },
      validationSchema: profileSchema,
      onSubmit: values => {
        console.log('value from Profile Formik: ', values);
        dispatch(setUserInfo(values));
        handleShowToast({
          status: SNACKBAR_TYPE.success,
          description: 'Details Saved',
          placement: SNACKBAR_PLACEMENT.top,
        });
        goBackNavigation();
      },
    });

  return {
    email,
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
  };
};

export default useProfileController;
