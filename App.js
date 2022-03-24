/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StatusBar, useColorScheme, Platform} from 'react-native';
import {QueryClient, QueryClientProvider} from 'react-query';
import {Provider} from 'react-redux';

import {store} from './src/store';
import CarouselApp from './src/CarouselApp';

const queryClient = new QueryClient();

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    flex: 1,
    marginTop: Platform.select({ios: StatusBar.currentHeight, android: 0}),
    backgroundColor: 'white',
  };
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <SafeAreaView style={backgroundStyle}>
          <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
          <CarouselApp />
        </SafeAreaView>
      </Provider>
    </QueryClientProvider>
  );
};

export default App;
