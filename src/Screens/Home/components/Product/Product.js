import {TouchableOpacity, Image, View} from 'react-native';
import CustomText from '../../../../Components/UI-Kit/CustomText';

const Product = ({item, handleItemClick}) => {
  return (
    <TouchableOpacity
      style={{
        width: '45%',
        marginBottom: 10,
        borderRadius: 10,
        backgroundColor: 'white',
        elevation: 5,
        marginHorizontal: 5,
      }}
      onPress={() => handleItemClick(item)}>
      <Image
        source={{uri: item.images[0]}}
        style={{
          height: 200,
          width: '100%',
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          objectFit: 'contain',
        }}
      />
      <View style={{padding: 10}}>
        <CustomText bold fontSize={'lg'} marginBottom={2}>{item.title}</CustomText>
        <CustomText fontSize={'md'} marginTop={5}>Price: {item.price}</CustomText>
      </View>
    </TouchableOpacity>
  );
};

export default Product;
