import CustomText from '../../Components/UI-Kit/CustomText';
import React from 'react';
import useHomeController from './controller/useHomeController';
import Colors from '../../Theme/colors';
import Product from './components/Product/Product';
import {
  Modal,
  View,
  FlatList,
  ScrollView,
  Button,
  Image,
  Spinner,
} from 'native-base';

const HomeScreen = () => {
  const {
    items,
    selectedItem,
    modalVisible,
    isFetching,
    handleItemClick,
    handleCloseDetails,
  } = useHomeController();

  console.log('items: ', items);

  return (
    <View>
      {isFetching ? (
        <Spinner color={Colors.primaryBlue} size={'lg'} marginTop={'50%'} />
      ) : (
        <>
          <CustomText
            bold
            fontSize={'xl'}
            marginBottom={5}
            marginTop={5}
            marginLeft={15}
            color={Colors.primaryBlue}>
            Available Products:-
          </CustomText>

          <FlatList
            data={items}
            renderItem={({item}) => (
              <Product item={item} handleItemClick={handleItemClick} />
            )}
            keyExtractor={item => item.id.toString()}
            numColumns={2}
            contentContainerStyle={{paddingHorizontal: 10}}
            style={{marginBottom: 60}}
          />

          {selectedItem && (
            <Modal
              isOpen={modalVisible}
              onClose={() => handleCloseDetails()}
              size={'xl'}>
              <Modal.Content>
                <Modal.CloseButton />
                <Modal.Header>Product Details</Modal.Header>
                <Modal.Body>
                  <ScrollView>
                    <Image
                      source={{uri: selectedItem.images[0]}}
                      alt={selectedItem.title}
                      style={{
                        height: 200,
                        width: '100%',
                        borderTopLeftRadius: 10,
                        borderTopRightRadius: 10,
                        objectFit: 'contain',
                      }}
                    />
                    <CustomText bold marginBottom={'2'} marginTop={'2'}>
                      {selectedItem.title}
                    </CustomText>
                    <CustomText textAlign={'justify'}>
                      {selectedItem.description}
                    </CustomText>
                    <CustomText bold marginTop={'2'}>
                      Price: {selectedItem.price}
                    </CustomText>
                  </ScrollView>
                </Modal.Body>
                <Modal.Footer>
                  <Button.Group space={2}>
                    <Button
                      variant="ghost"
                      marginRight={'2'}
                      colorScheme="blueGray"
                      onPress={() => {
                        handleCloseDetails();
                      }}>
                      Cancel
                    </Button>
                    <Button
                      onPress={() => {
                        handleCloseDetails();
                      }}>
                      Add to Cart
                    </Button>
                  </Button.Group>
                </Modal.Footer>
              </Modal.Content>
            </Modal>
          )}
        </>
      )}
    </View>
  );
};

export default HomeScreen;
