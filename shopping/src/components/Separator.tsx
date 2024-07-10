import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export const Separator = () => {
  return <View style={styles.separator}></View>;
};
const styles = StyleSheet.create({
  separator: {
    // height: 0.8,
    height: 1,
    backgroundColor: '#5f5f5f',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 24,
    },
    shadowOpacity: 0.88,
    shadowRadius: 26.0,

    elevation: 5,
  },
});
