import React, {useState} from 'react';
import {PropsWithChildren} from 'react';
import {
  ImageSourcePropType,
  Image,
  StyleSheet,
  Text,
  View,
  Pressable,
} from 'react-native';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';

//! requiring the images

import DiceOne from '../assets/One.png';
import DiceTwo from '../assets/Two.png';
import DiceThree from '../assets/Three.png';
import DiceFour from '../assets/Four.png';
import DiceFive from '../assets/Five.png';
import DiceSix from '../assets/Six.png';

//! type declaration
type DiceProps = PropsWithChildren<{
  imageUrl: ImageSourcePropType;
}>;

//! option for the Haptic feedback
const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: true,
};

//! dice Function
const Dice = ({imageUrl}: DiceProps): React.JSX.Element => {
  return (
    <View>
      <Image style={styles.diceImage} source={imageUrl} />
    </View>
  );
};

function App(): React.JSX.Element {
  const [diceImg, setdiceImg] = useState<ImageSourcePropType>(DiceOne);

  const roll = () => {
    let random = Math.floor(Math.random() * 6) + 1;
    switch (random) {
      case 1:
        setdiceImg(DiceOne);
        break;
      case 2:
        setdiceImg(DiceTwo);
        break;
      case 3:
        setdiceImg(DiceThree);
        break;
      case 4:
        setdiceImg(DiceFour);
        break;
      case 5:
        setdiceImg(DiceFive);
        break;
      case 6:
        setdiceImg(DiceSix);
        break;

      default:
        setdiceImg(DiceOne);
        break;
    }
    // Trigger haptic feedback
    ReactNativeHapticFeedback.trigger('impactMedium', options);
  };

  return (
    <View style={styles.container}>
      <Dice imageUrl={diceImg} />
      <Pressable onPress={roll}>
        <Text style={styles.rollDiceBtnText}>Roll</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF2F2',
  },
  diceContainer: {
    margin: 12,
  },
  diceImage: {
    width: 200,
    height: 200,
  },
  rollDiceBtnText: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: '#E5E0FF',
    fontSize: 16,
    color: '#8EA7E9',
    fontWeight: '700',
    textTransform: 'uppercase',
  },
});

export default App;
