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
    isLoading,
    fetchMoreData,
    fetchPreviousData,
    handleItemClick,
  } = useHomeController();

  console.log('items: ', items);

  const renderFooter = () => {
    return (
      isFetching && (<Spinner marginBottom={4} color={Colors.lightBronze} size={'sm'} />)
    )
  }

  return (
    <Box backgroundColor={Colors.backgroundBlack} flex={1}>
      {isLoading ? (
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
            onEndReachedThreshold={0.5}
            onEndReached={fetchMoreData}
            onStartReached={fetchPreviousData}
            onStartReachedThreshold={0.2}
            //ListFooterComponent={renderFooter}
          />
        </>
      )}
    </Box>
  );
};

export default HomeScreen;
