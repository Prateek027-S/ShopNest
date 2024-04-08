import {Box, VStack, ScrollView, Modal, Pressable, HStack} from 'native-base';
import React from 'react';
import useOrderHistoryController from './controller/useOrderHistoryController';
import CustomText from '../../Components/UI-Kit/CustomText';
import Colors from '../../Theme/colors';

const OrderHistoryScreen = () => {
  const {orderHistory} = useOrderHistoryController();

  return (
    <VStack flex={1} backgroundColor={Colors.backgroundBlack}>
      {orderHistory.length === 0 ? (
        <CustomText fontSize={'lg'} margin={3} color={Colors.primaryBlue}>
          No orders found!!
        </CustomText>
      ) : (
        <ScrollView>
          {orderHistory.map((order, index) => (
            <VStack
              margin={3}
              key={index}
              backgroundColor={Colors.secondaryBlack}
              borderTopLeftRadius={10}
              borderTopRightRadius={10}
              borderBottomLeftRadius={10}
              borderBottomRightRadius={10}>
              <HStack width={'100%'} paddingTop={4} paddingLeft={6}>
                <CustomText bold color={Colors.lightBronze}>
                  Order{index + 1}:
                </CustomText>
                <CustomText  bold marginLeft={4} color={Colors.lightBronze}>{order.time}</CustomText>
              </HStack>
              <Box marginTop={5} alignItems={'center'} paddingX={3}>
                <Box flexDirection="row" borderBottomWidth={1} borderBottomColor={Colors.grey400} padding={2}>
                  <Box flex={2}>
                    <CustomText color={Colors.grey500}>Item</CustomText>
                  </Box>
                  <Box flex={1}>
                    <CustomText bold color={Colors.grey500}>Price</CustomText>
                  </Box>
                  <Box flex={1} marginRight={3}>
                    <CustomText bold color={Colors.grey500}>Quantity</CustomText>
                  </Box>
                </Box>
                {order.items.map((item, i) => (
                  <Box
                    key={i}
                    flexDirection="row"
                    borderBottomWidth={1}
                    borderBottomColor={Colors.grey400}
                    padding={2}>
                    <Box flex={2}>
                      <CustomText color={Colors.grey500}>{item.title}</CustomText>
                    </Box>
                    <Box flex={1}>
                      <CustomText color={Colors.grey500}>{item.price}</CustomText>
                    </Box>
                    <Box flex={1}>
                      <CustomText color={Colors.grey500}>{item.quantity}</CustomText>
                    </Box>
                  </Box>
                ))}
              </Box>
            </VStack>
          ))}
        </ScrollView>
      )}
    </VStack>
  );
};

export default OrderHistoryScreen;
