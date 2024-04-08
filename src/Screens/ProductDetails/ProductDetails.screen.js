import React from 'react';
import {
  VStack,
  ZStack,
  HStack,
  ScrollView,
  Image,
  Box,
  Divider,
} from 'native-base';
import CustomText from '../../Components/UI-Kit/CustomText';
import useProductDetailsController from './controller/useProductDetailsController';
import Colors from '../../Theme/colors';
import StarIcon from '../../Components/UI-Kit/Icons/iconComponents/StarIcon';
import CustomButton from '../../Components/UI-Kit/CustomButton';

const ProductDetails = () => {
  const {selectedItem, addToCart} = useProductDetailsController();

  return (
    <VStack flex={1} height={'100%'} backgroundColor={Colors.backgroundBlack}>
      <ScrollView flex={1}>
        <Image
          source={{uri: selectedItem.images[0]}}
          alt={selectedItem.title}
          flex={1}
          width={'100%'}
          height={400}
          resizeMode="stretch"
          borderTopLeftRadius={10}
          borderTopRightRadius={10}
        />
        <ZStack
          height={700}
          marginTop={-4}
          backgroundColor={Colors.backgroundBlack}
          borderTopLeftRadius={20}
          borderTopRightRadius={20}>
          <VStack marginLeft={15} marginTop={4}>
            <CustomText color={Colors.lightBronze} fontSize={'2xl'}>
              {selectedItem.title}
            </CustomText>
            <HStack
              marginTop={2}
              width={'100'}
              backgroundColor={Colors.secondaryBlack}
              borderTopRadius={30}
              borderBottomRadius={30}>
              <Box paddingLeft={3} paddingY={2}>
                <StarIcon />
              </Box>
              <CustomText
                paddingY={2}
                color={Colors.white}
                marginLeft={2}
                marginTop={1}>
                {selectedItem.rating}
              </CustomText>
            </HStack>
            <CustomText marginTop={4} marginRight={3} color={Colors.grey500}>
              {selectedItem.description}
            </CustomText>
            <Divider marginTop={4} bgColor={Colors.grey400} />
            <HStack>
              <CustomText marginLeft={2} fontSize={'2xl'} marginTop={5} color={Colors.white}>
                ${selectedItem.price}
              </CustomText>
              <CustomButton
                w={'50%'}
                marginLeft={'20%'}
                marginTop={4}
                alignSelf={'center'}
                onPress={() => {
                  addToCart(selectedItem);
                }}
                value={'Add to Cart'}
              />
            </HStack>
          </VStack>
        </ZStack>
      </ScrollView>
    </VStack>
  );
};

export default ProductDetails;
