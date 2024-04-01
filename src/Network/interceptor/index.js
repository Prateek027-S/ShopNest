import {fetchBaseQuery} from '@reduxjs/toolkit/query';
import config from '../../Config/app.config';
import { handleShowToast } from '../../Utils/helpers/toast.helpers';
import { SNACKBAR_TYPE } from '../../Utils/constants';

const handleHeaderConfigs = async (headers, {getState, endpoint}) => {
  // Adding custom headers
  return headers;
};

const baseQuery = fetchBaseQuery({
  baseUrl: config.API_BASE_URL,
  prepareHeaders: handleHeaderConfigs,
  credentials: 'include',
});

const baseQueryWithInterceptor = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result.error) {
    handleShowToast({
      status: SNACKBAR_TYPE.error,
      description: 'Failed to fetch products. Please try again later.',
    });
  }

  return result;
};

export default baseQueryWithInterceptor;