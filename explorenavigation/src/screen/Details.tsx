import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';

//! Navigation
import {
  NativeStackScreenProps,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import {RootStackParamsList} from '../App';
import {useNavigation} from '@react-navigation/native';

type detailsProps = NativeStackScreenProps<RootStackParamsList, 'Details'>;

export const Details = ({route}: detailsProps) => {
  const {productId} = route.params;
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamsList>>();
  console.log(navigation.getState());

  const handleNavigation = () => {
    // ? if you use the replace option while coming to this screen then .goBack() or any navigation will not work . Soo if you go back it will throw error.

    // ! go back to pervious screen
    // navigation.goBack();
    // ! to go back 2 or more screen
    // navigation.pop(2)
    // ! to go back to first screen
    navigation.popToTop();
  };
  return (
    <View style={styles.container}>
      <Text style={styles.smallText}>Product Id : {productId}</Text>
      <Button title="Go to Home" onPress={handleNavigation} />
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
    margin: 20,
    color: '#000000',
  },
});
