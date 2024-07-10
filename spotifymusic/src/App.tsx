import React, {useState, useEffect} from 'react';
import {
  ActivityIndicator,
  SafeAreaView,
  StatusBar,
  StyleSheet,
} from 'react-native';

import {setupPlayer, addTrack} from '../musicPlayerService';
import {View} from 'react-native';
import {MusicPlayer} from './screen/MusicPlayer';

function App(): React.JSX.Element {
  const [isplayerReady, setIsplayerReady] = useState<boolean>(false);

  async function setup() {
    let isStepup = await setupPlayer();
    if (isStepup) {
      await addTrack();
    }

    setIsplayerReady(isStepup);
  }

  useEffect(() => {
    setup();
  }, []);

  console.log('hello world');

  if (!isplayerReady) {
    return (
      <SafeAreaView>
        <ActivityIndicator />
      </SafeAreaView>
    );
  }
  return (
    <View style={styles.contaner}>
      <StatusBar barStyle={'light-content'} />
      <MusicPlayer />
    </View>
  );
}

const styles = StyleSheet.create({
  contaner: {
    flex: 1,
  },
});

export default App;
