/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';
import * as Animatable from 'react-native-animatable';

export const Splash = ({navigation}: any) => {
  setTimeout(() => {
    navigation.navigate('Home');
  }, 1000);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000000',
      }}>
      <Animatable.Text duration={3000} animation="fadeOut">
        Splash
      </Animatable.Text>
    </View>
  );
};
