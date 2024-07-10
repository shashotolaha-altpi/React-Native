import React from 'react';
import {SafeAreaView} from 'react-native';
import {PropsWithChildren} from 'react';

//! Navigation
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// ! Screens
import {Home} from './screen/Home';
import {Details} from './screen/Details';

export type RootStackParamsList = {
  Home: undefined;
  // Details: {productId: string} | undefined;
  Details: {productId: string};
};

const Stack = createNativeStackNavigator<RootStackParamsList>();

export const App = (): React.JSX.Element => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{statusBarColor: '#009dff'}}>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{title: 'Trending Product'}}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          options={{title: 'Product Details'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
