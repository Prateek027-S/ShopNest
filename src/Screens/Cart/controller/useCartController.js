import {useSelector, useDispatch} from 'react-redux';
import {setCartItems} from '../../../Store/redux/cart/cart.slice';
import {setOrderHistory} from '../../../Store/redux/orderHistory/orderHistory.slice';
import {useState} from 'react';
import {handleShowToast} from '../../../Utils/helpers/toast.helpers';
import {
  SCREEN_NAMES,
  SNACKBAR_PLACEMENT,
  SNACKBAR_TYPE,
} from '../../../Utils/constants';
import {navigate} from '../../../Navigators/utils';

const useCartController = () => {
  const dispatch = useDispatch();
  const {firstName, lastName, mobile, email, address} = useSelector(
    state => state.userSlice,
  );
  const [modalVisible, setModalVisible] = useState(false);
  const {cartItems} = useSelector(state => state.cartSlice);
  const {orderHistory} = useSelector(state => state.orderHistorySlice);
  let totalAmount = 0;

  const handleCloseDetails = () => {
    setModalVisible(false);
  };

  const getTotalAmount = () => {
    totalAmount = cartItems.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0,
    );
    return totalAmount;
  };

  const onRemoveBtnClick = itemId => {
    const newCartItems = cartItems.filter(item => item.id !== itemId);
    dispatch(setCartItems(newCartItems));
  };

  const updateQuantity = (itemId, flag) => {
    const itemIndex = cartItems.findIndex(item => item.id === itemId);
    const oldQuantity = cartItems[itemIndex].quantity;
    let newCartItems = [...cartItems];
    if (!flag) {
      //if we are decrementing the quantity: flag=false
      if (oldQuantity === 1) {
        newCartItems = newCartItems.filter(item => item.id !== itemId);
      } else {
        newCartItems[itemIndex] = {
          ...newCartItems[itemIndex],
          quantity: oldQuantity - 1,
        };
      }
    } else {
      // incrementing the quantity: flag=true
      if (oldQuantity < newCartItems[itemIndex].stock) {
        newCartItems[itemIndex] = {
          ...newCartItems[itemIndex],
          quantity: oldQuantity + 1,
        };
      } else {
        handleShowToast({
          status: SNACKBAR_TYPE.info,
          description: 'No more stock available!',
          placement: SNACKBAR_PLACEMENT.top,
        });
      }
    }
    dispatch(setCartItems(newCartItems));
  };

  const handleProceedForPayment = () => {
    if (firstName === '') {
      navigate(SCREEN_NAMES.profile);
      handleShowToast({
        status: SNACKBAR_TYPE.info,
        description: 'Please complete your profile before proceeding further',
        placement: SNACKBAR_PLACEMENT.top,
      });
    } else {
      setModalVisible(true);
    }
  };

  const handlePlaceOrder = () => {
    console.log('Inside placeOrder function');
    const currentTime = new Date().toLocaleString();
    const newOrder = {items: cartItems, time: currentTime};
    dispatch(setCartItems([]));
    dispatch(
      setOrderHistory({
        newOrderHistory: [...orderHistory, newOrder],
      }),
    );
    handleShowToast({
      status: SNACKBAR_TYPE.success,
      description: 'Order Placed!',
      placement: SNACKBAR_PLACEMENT.top,
    });
    navigate(SCREEN_NAMES.orderHistory);
  };

  return {
    modalVisible,
    cartItems,
    firstName,
    lastName,
    mobile,
    email,
    address,
    handleProceedForPayment,
    handleCloseDetails,
    getTotalAmount,
    onRemoveBtnClick,
    updateQuantity,
    handlePlaceOrder,
  };
};

export default useCartController;
