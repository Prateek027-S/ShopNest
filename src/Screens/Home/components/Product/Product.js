import { Pressable, Image, View } from 'native-base';
import CustomText from '../../../../Components/UI-Kit/CustomText';

const Product = ({item, handleItemClick}) => {
  return (
    <Pressable
      style={{
        width: '48%',
        marginBottom: 10,
        borderRadius: 10,
        backgroundColor: 'white',
        elevation: 5,
        marginHorizontal: 5,
      }}
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
