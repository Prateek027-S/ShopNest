import CustomText from '../../Components/UI-Kit/CustomText';
import React from 'react';
import useHomeController from './controller/useHomeController';
import Colors from '../../Theme/colors';
import Product from './components/Product/Product';
import {
  Modal,
  Box,
  FlatList,
  ScrollView,
  Button,
  Image,
  Spinner,
} from 'native-base';
import CustomButton from '../../Components/UI-Kit/CustomButton';

const HomeScreen = () => {
  const {
    items,
    selectedItem,
    modalVisible,
    isFetching,
    handleItemClick,
    addToCart,
    handleCloseDetails,
  } = useHomeController();

  console.log('items: ', items);

  return (
    <Box backgroundColor={Colors.backgroundBlack} flex={1}>
      {isFetching ? (
        <Spinner color={Colors.lightBronze} size={'lg'} marginTop={'50%'} />
      ) : (
        <>
          <FlatList
            data={items}
            marginTop={'3%'}
            renderItem={({item}) => (
              <Product item={item} handleItemClick={handleItemClick} />
            )}
            keyExtractor={item => item.id.toString()}
            numColumns={2}
            contentContainerStyle={{paddingHorizontal: 10}}
          />

          {/* {selectedItem && (
            <Modal
              isOpen={modalVisible}
              onClose={() => handleCloseDetails()}
              size={'xl'}>
              <Modal.Content bgColor={Colors.secondaryBlack}>
                <Modal.CloseButton />
                <Modal.Header bgColor={Colors.secondaryBlack}>
                  <CustomText color={Colors.lightBronze}>
                    Product Details
                  </CustomText>
                </Modal.Header>
                <Modal.Body>
                  <ScrollView>
                    <Image
                      source={{uri: selectedItem.images[0]}}
                      alt={selectedItem.title}
                      height={200}
                      width={'100%'}
                      borderTopLeftRadius={10}
                      borderTopRightRadius={10}
                      resizeMode={'contain'}
                    />
                    <CustomText
                      bold
                      marginBottom={'2'}
                      marginTop={'2'}
                      color={Colors.grey500}>
                      {selectedItem.title}
                    </CustomText>
                    <CustomText color={Colors.grey500} textAlign={'justify'}>
                      {selectedItem.description}
                    </CustomText>
                    <CustomText color={Colors.grey500} bold marginTop={'2'}>
                      Price: {selectedItem.price}
                    </CustomText>
                  </ScrollView>
                </Modal.Body>
                <Modal.Footer bgColor={Colors.secondaryBlack}>
                  <Button.Group space={2}>
                    <CustomButton
                      width={'40'}
                      value="Add to Cart"
                      bg={Colors.secondaryGreen}
                      onPress={() => {
                        addToCart(selectedItem);
                      }}></CustomButton>
                  </Button.Group>
                </Modal.Footer>
              </Modal.Content>
            </Modal>
          )} */}
        </>
      )}
    </Box>
  );
};

export default HomeScreen;
