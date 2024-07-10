import {View, Text, SafeAreaView, StyleSheet, ScrollView} from 'react-native';
import React from 'react';

import FlatList from './components/FlateList';
import ElevatedCard from './components/ElevatedCard';
import FancyCard from './components/FancyCard';
import ActionCard from './components/ActionCard';
import ContactList from './components/ContactList';

const App = (): React.JSX.Element => {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatList />
        <ElevatedCard />
        <FancyCard />
        <FancyCard />
        <ContactList />
        <ActionCard />
      </ScrollView>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  centerAll: {
    flex: 1,
    alignItems: 'center',
  },
  whiteText: {
    color: 'white',
  },
});
export default App;
