import {useSelector, useDispatch} from 'react-redux';
import {setCartItems} from '../../../Store/redux/cart/cart.slice';
import {handleShowToast} from '../../../Utils/helpers/toast.helpers';
import {SNACKBAR_TYPE, SNACKBAR_PLACEMENT, SCREEN_NAMES} from '../../../Utils/constants';
import { navigationRef, navigate } from '../../../Navigators/utils';

const useProductDetailsController = () => {
  const dispatch = useDispatch();
  const {cartItems} = useSelector(state => state.cartSlice);
  const { params } = navigationRef.getCurrentRoute();
  const selectedItem = params ? params.selectedItem : null;

  console.log('selectedItem: ', selectedItem);

  const addToCart = selectedItem => {
    const existingItemIndex = cartItems.findIndex(
      item => item.id === selectedItem.id,
    );
    const newCartItems = [...cartItems];
    if (existingItemIndex !== -1) {
      const oldQuantity = newCartItems[existingItemIndex].quantity;
      if (oldQuantity < selectedItem.stock) {
        newCartItems[existingItemIndex] = {
          ...newCartItems[existingItemIndex],
          quantity: oldQuantity + 1,
        };
      } else {
        handleShowToast({
          status: SNACKBAR_TYPE.info,
          description: 'No more stock available!',
          placement: SNACKBAR_PLACEMENT.bottom,
        });
        return;
      }
    } else {
      selectedItem.quantity = 1;
      selectedItem.stock = selectedItem.stock;
      newCartItems.push(selectedItem);
    }
    dispatch(setCartItems(newCartItems));
    handleShowToast({
      status: SNACKBAR_TYPE.success,
      description: 'Item added into the cart!',
      placement: SNACKBAR_PLACEMENT.bottom,
    });
    navigate(SCREEN_NAMES.cart);
  };

  return {
    selectedItem,
    addToCart,
  }
};

export default useProductDetailsController;