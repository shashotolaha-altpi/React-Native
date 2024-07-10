import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const FlatList = (): React.JSX.Element => {
  return (
    <View>
      <Text style={[styles.headingText, styles.wText]}>Flat Card</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.cardOne]}>
          <Text style={styles.wText}>Red</Text>
        </View>
        <View style={[styles.card, styles.cardTwo]}>
          <Text style={styles.wText}>Blue</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
          <Text style={styles.wText}>Green</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 10,
  },
  wText: {
    color: '#fff',
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 8,
  },
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
    borderRadius: 8,
    margin: 10,
  },
  cardOne: {
    backgroundColor: '#ff0000',
  },
  cardTwo: {
    backgroundColor: '#0073ff',
  },
  cardThree: {
    backgroundColor: '#00ff55',
  },
});

export default FlatList;
