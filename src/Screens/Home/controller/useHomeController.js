import {useEffect, useState} from 'react';
import {useLazyGetProductsQuery} from '../../../Network/services/products';
import { SCREEN_NAMES } from '../../../Utils/constants';
import { navigate } from '../../../Navigators/utils';

const useHomeController = () => {
  const [items, setItems] = useState([]);
  const [skip, setSkip] = useState(0)

  const [fetchProducts, {isFetching, isLoading}] = useLazyGetProductsQuery();

  const getData = async () => {
    const {data} = await fetchProducts({skip: skip});
    setItems(data.products);
  };

  useEffect(() => {
    getData();
  }, [skip]);

  const fetchMoreData = () => {
    setSkip(skip+10)
  }

  const fetchPreviousData = () => {
    if(skip >= 10) {
      setSkip(skip-10)
    }
  }

  const handleItemClick = (item) => {
    navigate(SCREEN_NAMES.productDetails, {selectedItem: item});
  };

  return {
    items,
    isFetching,
    isLoading,
    fetchMoreData,
    fetchPreviousData,
    handleItemClick
  };
};

export default useHomeController;
