import {useEffect, useState} from 'react';
import {useLazyGetProductsQuery} from '../../../Network/services/products';

const useHomeController = () => {
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const [fetchProducts, {isFetching}] = useLazyGetProductsQuery();

  const getData = async () => {
    const {data} = await fetchProducts();
    setItems(data.products);
  };

  useEffect(() => {
    getData();
  }, []);

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setModalVisible(true);
  };

  const handleCloseDetails = () => {
    setModalVisible(false);
  };

  return {
    items,
    selectedItem,
    modalVisible,
    isFetching,
    handleItemClick,
    handleCloseDetails,
  };
};

export default useHomeController;
