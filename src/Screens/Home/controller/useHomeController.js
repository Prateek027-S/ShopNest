import {useEffect, useState} from 'react';
import {useLazyGetProductsQuery} from '../../../Network/services/products';
import { SCREEN_NAMES } from '../../../Utils/constants';
import { navigate } from '../../../Navigators/utils';

const useHomeController = () => {
  const [items, setItems] = useState([]);

  const [fetchProducts, {isFetching}] = useLazyGetProductsQuery();

  const getData = async () => {
    const {data} = await fetchProducts();
    setItems(data.products);
  };

  useEffect(() => {
    getData();
  }, []);

  const handleItemClick = (item) => {
    navigate(SCREEN_NAMES.productDetails, {selectedItem: item});
  };

  return {
    items,
    isFetching,
    handleItemClick,
  };
};

export default useHomeController;
