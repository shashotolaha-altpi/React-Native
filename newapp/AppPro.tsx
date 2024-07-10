/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, Text, StyleSheet, useColorScheme, Button} from 'react-native';

function AppPro(): React.JSX.Element {
  const [isDarkMode, setisDarkMode] = useState(useColorScheme() === 'dark');
  return (
    <View style={[style.container, isDarkMode ? style.bbg : style.wbg]}>
      <View style={[style.marginTop5]}>
        <Text style={[isDarkMode ? style.wtext : style.dText]}>Hello</Text>
      </View>
      <View style={[style.marginTop5]}>
        <Button
          title={isDarkMode ? 'light' : 'dark'}
          onPress={() => {
            setisDarkMode(!isDarkMode);
          }}
        />
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  wbg: {
    backgroundColor: '#fff',
  },
  bbg: {
    backgroundColor: '#000',
  },
  wtext: {
    color: '#fff',
  },
  dText: {
    color: '#000',
  },
  marginTop5: {
    marginTop: 50,
  },
});
export default AppPro;
