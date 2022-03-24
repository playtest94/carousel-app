import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  image: {
    borderRadius: 10,
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  titleContainer: {
    width: '100%',
    backgroundColor: '#57575770',
    borderRadius: 10,
    padding: 10,
    height: '100%',
  },
  title: {
    position: 'absolute',
    bottom: 0,
    color: 'white',
    padding: 10,
  },
});

export const GRADIENT_COLORS = ['#ffffff00', '#ffffff00', '#000000'];

export default styles;
