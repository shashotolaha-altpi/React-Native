import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';

//! Navigation
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamsList} from '../App';

type homeProps = NativeStackScreenProps<RootStackParamsList, 'Home'>;

export const Home = ({navigation}: homeProps) => {
  const handleNavigation = () => {
    // ! First approach
    // navigation.navigate('Details', {productId: '1'});
    // ! Second approach
    // navigation.navigate('Details');
    //! Third approach
    // navigation.push('Details', {productId: '1'});
    // ! forth approach
    // ? if you want the use to not come again in home route then use replace. It will replace the home with Details
    navigation.replace('Details', {productId: '1'});
  };
  return (
    <View style={styles.container}>
      <Text style={styles.smallText}>Home Sreen</Text>
      <Button title="Go to details" onPress={handleNavigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  smallText: {
    color: '#000000',
  },
});
