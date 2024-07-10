import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';

// Optional configuration
const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: true,
};

const handleBtn = (feedback: string) => {
  console.log(feedback);
  // Trigger haptic feedback
  ReactNativeHapticFeedback.trigger(feedback, options);
};

function App(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.Text} onPress={() => handleBtn('selection')}>
          Vibrate selection
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.Text} onPress={() => handleBtn('impactLight')}>
          Vibrate impactLight
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.Text} onPress={() => handleBtn('impactMedium')}>
          Vibrate impactMedium
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.Text} onPress={() => handleBtn('impactHeavy')}>
          Vibrate impactHeavy
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    backgroundColor: '#4dff00',
    borderRadius: 5,
    padding: 6,
    margin: 2,
  },
  Text: {
    fontSize: 18,
    color: '#000',
  },
});

export default App;
