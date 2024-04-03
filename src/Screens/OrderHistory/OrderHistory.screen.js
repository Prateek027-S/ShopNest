import {Box, VStack, ScrollView, Modal, Pressable, HStack} from 'native-base';
import React from 'react';
import useOrderHistoryController from './controller/useOrderHistoryController';
import CustomText from '../../Components/UI-Kit/CustomText';
import Colors from '../../Theme/colors';

const OrderHistoryScreen = () => {
  const {orderHistory} = useOrderHistoryController();

  return (
    <VStack>
      {orderHistory.length === 0 ? (
        <CustomText fontSize={'lg'} margin={3} color={Colors.primaryBlue}>
          No orders found!!
        </CustomText>
      ) : (
        <ScrollView>
          <CustomText fontSize={'lg'} margin={3} color={Colors.primaryBlue}>
            Your past orders:-
          </CustomText>
          {orderHistory.map((order, index) => (
            <VStack margin={3} key={index}>
              <Box width={'100%'} backgroundColor={Colors.primaryBlue}>
                <CustomText padding={2} color={'white'}>
                  Order {index + 1} - {order.time}
                </CustomText>
              </Box>
              <ScrollView>
                <Box marginTop={5} marginLeft={5}>
                  <Box flexDirection="row" borderBottomWidth={1} padding={2}>
                    <Box flex={2}>
                      <CustomText bold>Item</CustomText>
                    </Box>
                    <Box flex={1}>
                      <CustomText bold>Price</CustomText>
                    </Box>
                    <Box flex={1} marginRight={3}>
                      <CustomText bold>Quantity</CustomText>
                    </Box>
                  </Box>
                  {order.items.map((item, i) => (
                    <Box
                      key={i}
                      flexDirection="row"
                      borderBottomWidth={1}
                      padding={2}>
                      <Box flex={2}>
                        <CustomText>{item.title}</CustomText>
                      </Box>
                      <Box flex={1}>
                        <CustomText>{item.price}</CustomText>
                      </Box>
                      <Box flex={1}>
                        <CustomText>{item.quantity}</CustomText>
                      </Box>
                    </Box>
                  ))}
                </Box>
              </ScrollView>
            </VStack>
          ))}
        </ScrollView>
      )}
    </VStack>
  );
};

export default OrderHistoryScreen;
