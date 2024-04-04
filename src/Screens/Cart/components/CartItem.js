import React from 'react';
import {HStack, Image, Input, Pressable, VStack, Box} from 'native-base';
import CustomText from '../../../Components/UI-Kit/CustomText';
import CustomButton from '../../../Components/UI-Kit/CustomButton';
import TrashIcon from '../../../Components/UI-Kit/Icons/iconComponents/TrashIcon';
import Colors from '../../../Theme/colors';


const CartItem = ({item, updateQuantity, onRemoveBtnClick}) => {
  return (
    <VStack
      marginBottom={4}
      borderRadius={10}
      backgroundColor={Colors.darkTeal}
      marginRight={4}
      shadow={5}>
      <HStack>
        <Image
          source={{uri: item.images[0]}}
          alt={item.title}
          width={'195'}
          marginLeft={5}
          borderTopLeftRadius={10}
          borderTopRightRadius={10}
          resizeMode="contain"
        />
        <VStack
          paddingTop={10}
          paddingBottom={10}
          width={'160px'}
          marginLeft={4}
          paddingRight={3}>
          <CustomText bold fontSize={'lg'} marginY={2}>
            {item.title}
          </CustomText>
          <CustomText fontSize={'lg'} marginTop={5}>
            Price: {item.price}
          </CustomText>
        </VStack>
      </HStack>
      <HStack container alignItems="center">
        <CustomButton
          h={10}
          w={10}
          onPress={() => updateQuantity(item.id, false)}
          margin={5}
          value={'-'}
        />
        <Input
          id="quantity"
          w={39}
          fontWeight={'bold'}
          value={item.quantity.toString()}
          isReadOnly
        />
        <CustomButton
          w={10}
          h={10}
          onPress={() => updateQuantity(item.id, true)}
          margin={5}
          value={'+'}
        />
        <Pressable onPress={() => onRemoveBtnClick(item.id)} marginLeft={5}>
          <Box
            backgroundColor={Colors.secondaryRed}
            alignItems={'center'}
            borderRadius={10}>
            <TrashIcon padding={20} />
          </Box>
        </Pressable>
      </HStack>
    </VStack>
  );
};

export default CartItem;
