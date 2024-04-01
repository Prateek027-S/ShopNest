import {useEffect, useState} from 'react';
import {useLazyGetProductsQuery} from '../../../Network/services/products';

const useHomeController = () => {
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const [fetchProducts] = useLazyGetProductsQuery();

  const getData = async () => {
    const {data, isLoading} = await fetchProducts();
    console.log('res.data: ', data);
    console.log("res.isLoading: ", isLoading)
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
    handleItemClick,
    handleCloseDetails,
  };
};

export default useHomeController;
