import {StyleSheet} from 'react-native';
import {CAROUSEL_VERTICAL_PADDING, OUTTER_TITLE_HEIGHT} from './constants';

const styles = StyleSheet.create({
  carousel: {
    paddingVertical: CAROUSEL_VERTICAL_PADDING / 2,
  },
  title: {
    fontSize: 16,
    marginLeft: 15,
    marginVertical: 10,
    fontWeight: 'bold',
    color: 'black',
  },
});

const commonContainerStyle = {
  backgroundColor: '#f0f0f0',
  borderRadius: 10,
  shadowColor: '#000',
  shadowOffset: {width: 0, height: 2},
  shadowOpacity: 0.5,
  shadowRadius: 2,
  elevation: 2,
};

const pressed = {
  backgroundColor: '#f0f0f0',
  padding: 2,
};

export const outterStyles = StyleSheet.create({
  container: {
    height: '100%',
    ...commonContainerStyle,
  },
  pressed,
  image: {
    flex: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: 'gray',
  },
  titleContainer: {
    width: '100%',
    backgroundColor: '#575757',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    justifyContent: 'center',
    textAlign: 'center',
    paddingLeft: 10,
    height: OUTTER_TITLE_HEIGHT,
  },
  title: {
    color: 'white',
  },
});

export const innerStyles = StyleSheet.create({
  container: {
    position: 'relative',
    ...commonContainerStyle,
  },
  pressed,
  image: {
    borderRadius: 10,
    width: '100%',
    height: '100%',
    backgroundColor: 'gray',
  },
  titleContainer: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderRadius: 10,
    justifyContent: 'flex-end',
  },
  title: {
    bottom: 0,
    color: 'white',
    padding: 10,
  },
});

export default styles;
