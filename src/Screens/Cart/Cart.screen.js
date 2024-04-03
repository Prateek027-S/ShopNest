import {Box, FlatList, ScrollView, Modal, Button} from 'native-base';
import React from 'react';
import useCartController from './controller/useCartController';
import Colors from '../../Theme/colors';
import CustomText from '../../Components/UI-Kit/CustomText';
import CartItem from './components/CartItem';
import CustomButton from '../../Components/UI-Kit/CustomButton';

const CartScreen = () => {
  const {
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
  } = useCartController();

  return (
    <Box flex={1} marginTop={5} marginLeft={5} color={Colors.primaryBlue}>
      {cartItems.length === 0 ? (
        <CustomText fontSize={'lg'} marginInline={3}>
          Cart is empty!
        </CustomText>
      ) : (
        <>
          <CustomText
            fontSize={'lg'}
            marginInline={3}
            color={Colors.primaryBlue}
            marginBottom={5}>
            Your Cart:-
          </CustomText>

          <FlatList
            data={cartItems}
            renderItem={({item}) => (
              <CartItem
                item={item}
                updateQuantity={updateQuantity}
                onRemoveBtnClick={onRemoveBtnClick}
              />
            )}
            keyExtractor={item => item.id.toString()}
            style={{marginBottom: 20}}
          />

          <CustomButton
            w={'200'}
            h={'10'}
            onPress={() => {
              handleProceedForPayment();
            }}
            value={'Proceed to Checkout'}
          />
          <Modal
            isOpen={modalVisible}
            onClose={() => handleCloseDetails()}
            size={'xl'}>
            <Modal.Content height={700}>
              <Modal.CloseButton />
              <Modal.Header>Order Confirmation</Modal.Header>
              <Modal.Body>
                <ScrollView>
                  <Box marginTop={5} marginLeft={5}>
                    <CustomText>
                      Recipient Name: {firstName} {lastName}
                    </CustomText>
                    <CustomText>
                      Phone No.: {mobile}
                    </CustomText>
                    <CustomText>
                      Email: {email}
                    </CustomText>
                    <CustomText>
                      Address: {address}
                    </CustomText>
                    <CustomText bold marginTop={4}>
                      Product Details:-
                    </CustomText>
                    <Box flexDirection="row" borderBottomWidth={1} padding={2}>
                      <Box flex={2}>
                        <CustomText bold>Item</CustomText>
                      </Box>
                      <Box flex={1}>
                        <CustomText bold>Price</CustomText>
                      </Box>
                      <Box flex={1} marginRight={3}>
                        <CustomText bold>Qty</CustomText>
                      </Box>
                      <Box flex={1}>
                        <CustomText bold>Total Price</CustomText>
                      </Box>
                    </Box>
                    {cartItems.map(item => (
                      <Box
                        key={item.id}
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
                        <Box flex={1}>
                          <CustomText>{item.price * item.quantity}</CustomText>
                        </Box>
                      </Box>
                    ))}
                  </Box>
                  <CustomText bold marginLeft={'25px'} marginTop={5}>
                    Total Amount: {getTotalAmount()}
                  </CustomText>
                </ScrollView>
              </Modal.Body>
              <Modal.Footer>
                <Button.Group>
                  <Button
                    variant="ghost"
                    colorScheme="blueGray"
                    marginRight={2}
                    onPress={() => {
                      handleCloseDetails();
                    }}>
                    Cancel
                  </Button>
                  <Button onPress={() => handlePlaceOrder()}>
                    Place Order
                  </Button>
                </Button.Group>
              </Modal.Footer>
            </Modal.Content>
          </Modal>
        </>
      )}
    </Box>
  );
};

export default CartScreen;
