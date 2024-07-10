import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from './HomeScreen';
import {Splash} from './Splash';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{fullScreenGestureEnabled: true, headerShown: false}}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{statusBarColor: '#ffffff'}}
        />
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{statusBarColor: '#000000'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
