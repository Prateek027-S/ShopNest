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
    <Box
      flex={1}
      color={Colors.primaryBlue}
      backgroundColor={Colors.backgroundBlack}>
      {cartItems.length === 0 ? (
        <CustomText
          color={Colors.lightBronze}
          marginTop={5}
          marginLeft={5}
          fontSize={'lg'}
          marginInline={3}>
          Cart is empty!
        </CustomText>
      ) : (
        <>
          <FlatList
            marginTop={5}
            marginLeft={5}
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
            w={'50%'}
            h={'7%'}
            alignSelf={'center'}
            marginBottom={4}
            onPress={() => {
              handleProceedForPayment();
            }}
            value={'Proceed to Checkout'}
          />
          <Modal
            isOpen={modalVisible}
            onClose={() => handleCloseDetails()}
            size={'xl'}>
            <Modal.Content height={700} bgColor={Colors.backgroundBlack}>
              <Modal.CloseButton />
              <Modal.Header bgColor={Colors.backgroundBlack}>
                <CustomText color={Colors.lightBronze}>
                  Order Confirmation
                </CustomText>
              </Modal.Header>
              <Modal.Body>
                <ScrollView>
                  <Box marginTop={5} marginLeft={2}>
                    <CustomText
                      color={Colors.grey500}
                      fontFamily={'Poppins-Regular'}>
                      Recipient Name: {firstName} {lastName}
                    </CustomText>
                    <CustomText
                      color={Colors.grey500}
                      fontFamily={'Poppins-Regular'}>
                      Phone No.: {mobile}
                    </CustomText>
                    <CustomText
                      color={Colors.grey500}
                      fontFamily={'Poppins-Regular'}>
                      Email: {email}
                    </CustomText>
                    <CustomText
                      color={Colors.grey500}
                      fontFamily={'Poppins-Regular'}>
                      Address: {address}
                    </CustomText>
                    <CustomText
                      bold
                      marginTop={4}
                      marginBottom={1}
                      color={Colors.grey500}>
                      Product Details:-
                    </CustomText>
                    <Box
                      flexDirection="row"
                      borderBottomWidth={1}
                      borderBottomColor={Colors.grey400}
                      padding={2}>
                      <Box flex={2}>
                        <CustomText color={Colors.grey500}>
                          Item
                        </CustomText>
                      </Box>
                      <Box flex={1}>
                        <CustomText color={Colors.grey500}>
                          Price
                        </CustomText>
                      </Box>
                      <Box flex={1} marginRight={3}>
                        <CustomText color={Colors.grey500}>
                          Qty
                        </CustomText>
                      </Box>
                      <Box flex={1}>
                        <CustomText color={Colors.grey500}>
                          Total Price
                        </CustomText>
                      </Box>
                    </Box>
                    {cartItems.map(item => (
                      <Box
                        key={item.id}
                        flexDirection="row"
                        borderBottomWidth={1}
                        borderBottomColor={Colors.grey400}
                        padding={2}>
                        <Box flex={2}>
                          <CustomText color={Colors.grey500}>
                            {item.title}
                          </CustomText>
                        </Box>
                        <Box flex={1}>
                          <CustomText color={Colors.grey500}>
                            {item.price}
                          </CustomText>
                        </Box>
                        <Box flex={1}>
                          <CustomText color={Colors.grey500}>
                            {item.quantity}
                          </CustomText>
                        </Box>
                        <Box flex={1}>
                          <CustomText color={Colors.grey500}>
                            {item.price * item.quantity}
                          </CustomText>
                        </Box>
                      </Box>
                    ))}
                  </Box>
                  <CustomText
                    marginLeft={2}
                    marginTop={5}
                    color={Colors.lightBronze}>
                    Total Amount: ${getTotalAmount()}
                  </CustomText>
                </ScrollView>
              </Modal.Body>
              <Modal.Footer bgColor={Colors.backgroundBlack}>
                <Button.Group>
                  <Button
                    bg={Colors.secondaryGreen}
                    onPress={() => handlePlaceOrder()}>
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
