import React, {useEffect} from 'react';
import {ActivityIndicator, Text, View} from 'react-native';
import {useDispatch} from 'react-redux';

import {setCurrent} from '../../store/auth';

import {authenticate} from '../../api/toolbox';
import {useAsyncStorage} from '@react-native-async-storage/async-storage';
import styles from './styles';

const Auth = () => {
  const {setItem} = useAsyncStorage('auth');
  const dispatch = useDispatch();

  useEffect(() => {
    authenticate({sub: 'ToolboxMobileTest'})
      .then(data => {
        dispatch(setCurrent(data));
        setItem(JSON.stringify(data));
      })
      .catch(console.log);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#0000ff" />
      <Text style={styles.text}>Autenticando...</Text>
    </View>
  );
};

export default Auth;
