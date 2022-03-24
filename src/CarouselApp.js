import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useAsyncStorage} from '@react-native-async-storage/async-storage';

import Auth from './screens/auth';
import Home from './screens/home';
import {setCurrent} from './store/auth';
import {Text} from 'react-native';

const CarouselApp = () => {
  const [isLoading, setIsLoading] = useState(true);
  const {current} = useSelector(state => state.auth);

  const {getItem} = useAsyncStorage('auth');
  const dispatch = useDispatch();

  useEffect(() => {
    getItem()
      .then(authItem => {
        if (authItem) {
          dispatch(setCurrent(JSON.parse(authItem)));
        }
      })
      .finally(() => setIsLoading(false));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading) {
    return <Text>Cargando...</Text>;
  }
  return current ? <Home /> : <Auth />;
};

export default CarouselApp;
