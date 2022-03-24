import React from 'react';
import {Text, View, Pressable} from 'react-native';
import {useDispatch} from 'react-redux';
import FastImage from 'react-native-fast-image';
import LinearGradient from 'react-native-linear-gradient';

import defaultStyles, {GRADIENT_COLORS} from './styles';
import {showPlayer} from '../../store/player';

const CarouselItem = ({
  title,
  imageUrl,
  videoUrl,
  styles = defaultStyles,
  withGradient = false,
}) => {
  const dispatch = useDispatch();
  const handlePress = () => dispatch(showPlayer({videoUrl}));

  const TitleContainer = ({children}) =>
    withGradient ? (
      <LinearGradient style={styles.titleContainer} colors={GRADIENT_COLORS}>
        {children}
      </LinearGradient>
    ) : (
      <View style={styles.titleContainer}>{children}</View>
    );

  return (
    <Pressable
      style={({pressed}) => [styles.container, pressed ? styles.pressed : {}]}
      onPress={handlePress}>
      <FastImage
        source={{
          uri: `${imageUrl}?random=${Math.random().toString(36).substring(7)}`,
          priority: 'high',
        }}
        resizeMode="cover"
        style={styles.image}
      />
      <TitleContainer>
        <Text style={styles.title}>{title}</Text>
      </TitleContainer>
    </Pressable>
  );
};

export default React.memo(CarouselItem);
