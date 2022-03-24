import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  closeContainer: {
    position: 'absolute',
    top: 50,
    alignSelf: 'flex-end',
    padding: 20,
  },
  close: {
    color: 'white',
    fontSize: 15,
  },
  body: {
    position: 'relative',
    width: '100%',
    height: '40%',
    backgroundColor: 'black',
    justifyContent: 'center',
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  notAvailable: {
    textAlign: 'center',
    color: 'white',
  },
});
export default styles;
