import {Dimensions} from 'react-native';
import {
  POSTER_BASE_WIDTH_PERCENT,
  POSTER_HEIGHT_PERCENT,
  THUMB_BASE_WIDTH_PERCENT,
  THUMB_HEIGHT_PERCENT,
} from './constants';

const windowWidth = Dimensions.get('window').width;

export const getThumbSize = ({extraHeight = 0} = {}) => {
  const baseWidth = (windowWidth * THUMB_BASE_WIDTH_PERCENT) / 100;
  return {
    width: baseWidth,
    height: (baseWidth * THUMB_HEIGHT_PERCENT) / 100 + extraHeight,
  };
};
export const getPosterSize = ({extraHeight = 0} = {}) => {
  const baseWidth = (windowWidth * POSTER_BASE_WIDTH_PERCENT) / 100;

  return {
    width: baseWidth,
    height: (baseWidth * POSTER_HEIGHT_PERCENT) / 100 + extraHeight,
  };
};
