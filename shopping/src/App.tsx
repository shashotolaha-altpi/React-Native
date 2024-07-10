import {StyleSheet} from 'react-native';
import React from 'react';

// ! Navigation
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

// ! Screen
import {Home} from './screen/Home';
import {Details} from './screen/Details';

// ! Type for stack navigation rootstackParamslist hold all routes info about params had or not in routes
export type rootStackParamslist = {
  Home: undefined;
  Detail: {
    product: Product;
  };
};

const Stack = createNativeStackNavigator<rootStackParamslist>();

export const App = (): React.JSX.Element => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{title: 'Products'}}
        />
        <Stack.Screen
          name="Detail"
          component={Details}
          options={{title: 'Product Details'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});
