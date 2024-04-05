import {Pressable, Image, Box, VStack} from 'native-base';
import CustomText from '../../../../Components/UI-Kit/CustomText';
import Colors from '../../../../Theme/colors';

const Product = ({item, handleItemClick}) => {
  return (
    <Pressable
      width={'48%'}
      flex={1}
      marginBottom={4}
      rounded={10}
      backgroundColor={Colors.secondaryBlack}
      shadow={5}
      marginLeft={2}
      marginRight={2}
      onPress={() => handleItemClick(item)}>
      <VStack flex={1} justifyContent={'flex-start'}>
        <Box height={200} width={'100%'}>
          <Image
            source={{uri: item.images[0]}}
            alt={item.title}
            flex={1}
            width={'100%'}
            height={200}
            resizeMode="stretch"
            borderTopLeftRadius={10}
            borderTopRightRadius={10}
            borderBottomLeftRadius={20}
            borderBottomRightRadius={20}
          />
        </Box>
        <CustomText fontSize={'lg'} padding={3} color={Colors.white}>
          {item.title}
        </CustomText>
        <CustomText
          fontSize={'md'}
          paddingLeft={3}
          paddingBottom={3}
          color={Colors.lightBronze}>
          Price: ${item.price}
        </CustomText>
      </VStack>
    </Pressable>
  );
};

export default Product;
