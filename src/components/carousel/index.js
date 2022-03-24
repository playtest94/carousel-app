import React from 'react';
import {Dimensions, Text, View} from 'react-native';
import SnapCarousel from 'react-native-snap-carousel';
import CarouselItem from '../item';
import styles, {outterStyles, innerStyles} from './styles';
import {getThumbSize, getPosterSize} from './utils';
import {CAROUSEL_VERTICAL_PADDING, OUTTER_TITLE_HEIGHT} from './constants';

const ComponentTypes = {
  thumb: {
    component: CarouselItem,
    ...getThumbSize({
      extraHeight: OUTTER_TITLE_HEIGHT + CAROUSEL_VERTICAL_PADDING,
    }),
    styles: outterStyles,
  },
  poster: {
    component: CarouselItem,
    ...getPosterSize({
      extraHeight: CAROUSEL_VERTICAL_PADDING,
    }),
    styles: innerStyles,
    withGradient: true,
  },
};

const Carousel = ({title, items, type}) => {
  const _renderItem = ({item}) => {
    const ComponentType = ComponentTypes[type];
    if (!ComponentType) {
      return null;
    }

    const props = {
      ...item,
      styles: ComponentType.styles,
      withGradient: ComponentType.withGradient,
    };

    return <ComponentType.component testId="CarouselItem" {...props} />;
  };
  return (
    <View>
      <Text testId="CarouselTitle" style={styles.title}>
        {title}
      </Text>
      <SnapCarousel
        testId="CarouselItems"
        data={items}
        renderItem={_renderItem}
        sliderWidth={Dimensions.get('window').width}
        itemWidth={ComponentTypes[type].width || 0}
        height={ComponentTypes[type].height || 0}
        enableSnap={false}
        containerCustomStyle={styles.carousel}
      />
    </View>
  );
};

export default Carousel;
