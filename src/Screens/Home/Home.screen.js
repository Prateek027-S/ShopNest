import { Box } from 'native-base';
import React from 'react'
import { useGetProductsQuery } from '../../Network/services/products';

const HomeScreen = () => {
  const {data, error, isLoading} = useGetProductsQuery();
  console.log("isLoading: ", isLoading, "error: ", error, "data: ", data);
  console.log()
  return (
    <Box>
      Home Screen
    </Box>
  )
}

export default HomeScreen;