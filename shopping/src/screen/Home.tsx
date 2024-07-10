import {FlatList, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';

// ? Navigation
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {rootStackParamslist} from '../App';

// ! Components
import {ProductItems} from '../components/ProductItems';
import {Separator} from '../components/Separator';

// ! Data
import {ProductList} from '../data/constand';

// ! Types
type homeProps = NativeStackScreenProps<rootStackParamslist, 'Home'>;

export const Home = ({navigation}: homeProps) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={ProductList}
        keyExtractor={item => item.id}
        // ItemSeparatorComponent={Separator}
        renderItem={({item}) => (
          <Pressable
            onPress={() => {
              navigation.push('Detail', {product: item});
            }}>
            <ProductItems product={item} />
          </Pressable>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',

    padding: 12,
    backgroundColor: '#FFFFFF',
  },
});
