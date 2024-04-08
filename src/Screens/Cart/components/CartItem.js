import React from 'react';
import {HStack, Image, Pressable, VStack, Divider, Box} from 'native-base';
import CustomText from '../../../Components/UI-Kit/CustomText';
import CustomButton from '../../../Components/UI-Kit/CustomButton';
import Colors from '../../../Theme/colors';
import CrossIcon from '../../../Components/UI-Kit/Icons/iconComponents/CrossIcon';

const CartItem = ({item, updateQuantity, onRemoveBtnClick}) => {
  return (
    <VStack flex={1} marginBottom={4} marginTop={2}>
      <HStack>
        <Box height={'200'} width={'35%'}>
        <Image
          source={{uri: item.images[0]}}
          alt={item.title}
          height={'150'}
          marginLeft={2}
          borderTopLeftRadius={10}
          borderTopRightRadius={10}
          borderBottomLeftRadius={10}
          borderBottomRightRadius={10}
          resizeMode="stretch"
        />
        </Box>
        <VStack
          paddingBottom={10}
          width={'160px'}
          marginLeft={4}
          paddingRight={3}>
          <CustomText color={Colors.white} fontSize={'lg'} marginY={2}>
            {item.title}
          </CustomText>
          <HStack container alignItems="center">
            <CustomButton
              h={10}
              w={10}
              onPress={() => updateQuantity(item.id, false)}
              marginRight={5}
              bg={Colors.secondaryBlack}
              value={'-'}
            />
            <CustomText
              id="quantity"
              fontWeight={'bold'}
              borderColor={Colors.backgroundBlack}
              color={Colors.white}>
              {item.quantity.toString()}
            </CustomText>
            <CustomButton
              w={10}
              h={10}
              onPress={() => updateQuantity(item.id, true)}
              bg={Colors.secondaryBlack}
              margin={5}
              value={'+'}
            />
            <CustomText
              color={Colors.lightBronze}
              marginLeft={'10%'}
              fontSize={'lg'}>
              ${item.price}
            </CustomText>
          </HStack>
        </VStack>
        <Pressable
          paddingTop={2}
          marginLeft={'10%'}
          marginBottom={'10%'}
          onPress={() => onRemoveBtnClick(item.id)}>
          <CrossIcon />
        </Pressable>
      </HStack>
      <Divider marginTop={-5} bg={Colors.secondaryBlack} />
    </VStack>
  );
};

export default CartItem;
