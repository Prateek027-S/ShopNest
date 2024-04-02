import { Pressable, Image, View } from 'native-base';
import CustomText from '../../../../Components/UI-Kit/CustomText';

const Product = ({item, handleItemClick}) => {
  return (
    <Pressable
      width={'48%'}
      marginBottom={4}
      borderRadius={10}
      backgroundColor={'white'}
      shadow={5}
      marginLeft={1}
      marginRight={2}
      onPress={() => handleItemClick(item)}>
      <Image
        source={{uri: item.images[0]}}
        alt={item.title}
        height={'200'}
        width={'100%'}
        borderTopLeftRadius={10}
        borderTopRightRadius={10}
        resizeMode='contain'
      />
      <View style={{padding: 10}}>
        <CustomText bold fontSize={'lg'} marginBottom={2}>{item.title}</CustomText>
        <CustomText fontSize={'md'} marginTop={5}>Price: {item.price}</CustomText>
      </View>
    </Pressable>
  );
};

export default Product;
