import React from 'react';
import {Pressable, SafeAreaView, Text, View} from 'react-native';
import Modal from 'react-native-modal';
import VideoPlayer from 'react-native-video-controls';

import {useSelector} from 'react-redux';
import styles from './styles';

const Player = ({onClose}) => {
  const {videoUrl} = useSelector(state => state.player);

  return (
    <View>
      <Modal isVisible={true}>
        <SafeAreaView style={styles.container}>
          <Pressable onPress={onClose} style={styles.closeContainer}>
            <Text style={styles.close}>Cerrar</Text>
          </Pressable>
          <View style={styles.body}>
            {videoUrl ? (
              <VideoPlayer source={{uri: videoUrl}} disableBack />
            ) : (
              <Text style={styles.notAvailable}>Video no disponible</Text>
            )}
          </View>
        </SafeAreaView>
      </Modal>
    </View>
  );
};

export default Player;
