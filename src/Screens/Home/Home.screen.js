import CustomText from '../../Components/UI-Kit/CustomText';
import React from 'react';
import useHomeController from './controller/useHomeController';
import Colors from '../../Theme/colors';
import Product from './components/Product/Product';
import {
  Box,
  FlatList,
  Spinner,
} from 'native-base';

const HomeScreen = () => {
  const {
    items,
    isFetching,
    handleItemClick,
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
        </>
      )}
    </Box>
  );
};

export default HomeScreen;
