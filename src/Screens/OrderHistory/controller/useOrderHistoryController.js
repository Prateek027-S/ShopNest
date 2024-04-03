import {useSelector} from 'react-redux';

const useOrderHistoryController = () => {
  const {orderHistory} = useSelector(state => state.orderHistorySlice);

  return {
    orderHistory,
  };
};

export default useOrderHistoryController;
