import React, {useCallback, useEffect} from 'react';
import {useQuery} from 'react-query';
import {ActivityIndicator, FlatList, Pressable, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useAsyncStorage} from '@react-native-async-storage/async-storage';
import {getData} from '../../api/toolbox';

import {reset} from '../../store/auth';
import Carousel from '../../components/carousel';
import styles from './styles';
import {UnauthorizedError} from '../../api/unauthorized-error';
import Player from '../../modals/player';
import {hidePlayer} from '../../store/player';

const Home = () => {
  const {removeItem} = useAsyncStorage('auth');
  const dispatch = useDispatch();

  const {isLoading, error, data, refetch} = useQuery('carouselData', () =>
    getData(),
  );
  const {shownPlayer} = useSelector(state => state.player);

  useEffect(() => {
    if (error instanceof UnauthorizedError) {
      removeItem();
      dispatch(reset());
    }
  }, [dispatch, error, removeItem]);

  const renderItem = useCallback(
    ({item}) => (
      <Carousel title={item.title} items={item.items} type={item.type} />
    ),
    [],
  );

  if (isLoading) {
    return (
      <View style={[styles.center]}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.center}>
        <Text style={styles.errorText}>{error?.message}</Text>
        <Pressable style={styles.retryButton} onPress={() => refetch()}>
          <Text style={styles.buttonText}>Reintentar</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <>
      <FlatList
        contentContainerStyle={styles.container}
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.title}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
      {shownPlayer && <Player onClose={() => dispatch(hidePlayer())} />}
    </>
  );
};

export default Home;
