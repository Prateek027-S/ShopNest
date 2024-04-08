import {useEffect, useState} from 'react';
import {useLazyGetProductsQuery} from '../../../Network/services/products';
import { useDispatch, useSelector } from 'react-redux';
import { setCartItems } from '../../../Store/redux/cart/cart.slice';
import { handleShowToast } from '../../../Utils/helpers/toast.helpers';
import { SCREEN_NAMES, SNACKBAR_PLACEMENT, SNACKBAR_TYPE } from '../../../Utils/constants';
import { navigate } from '../../../Navigators/utils';

const useHomeController = () => {
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cartSlice);

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
    navigate(SCREEN_NAMES.productDetails, {selectedItem: item});
  };

  const handleCloseDetails = () => {
    setModalVisible(false);
  };

  const addToCart = (selectedItem) => {
    const existingItemIndex = cartItems.findIndex(item => item.id === selectedItem.id);
    const newCartItems = [...cartItems];
    if(existingItemIndex !== -1) {
      const oldQuantity = newCartItems[existingItemIndex].quantity;
      if(oldQuantity < selectedItem.stock) {
        newCartItems[existingItemIndex] = {
          ...newCartItems[existingItemIndex],
          quantity: oldQuantity + 1,
        };
      }
      else{
        handleShowToast({
          status: SNACKBAR_TYPE.info,
          description: 'No more stock available!',
          placement: SNACKBAR_PLACEMENT.bottom
        });
        return;
      }
    }
    else {
        selectedItem.quantity = 1;
        selectedItem.stock = selectedItem.stock;
        newCartItems.push(selectedItem);
    }
    dispatch(setCartItems(newCartItems));
    handleShowToast({
      status: SNACKBAR_TYPE.success,
      description: 'Item added into the cart!',
      placement: SNACKBAR_PLACEMENT.bottom
    });
  };

  return {
    items,
    selectedItem,
    modalVisible,
    isFetching,
    handleItemClick,
    addToCart,
    handleCloseDetails,
  };
};

export default useHomeController;
