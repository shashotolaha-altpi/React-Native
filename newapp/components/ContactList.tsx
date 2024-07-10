import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ContactList = () => {
  const contacts = [
    {
      id: 1,
      name: 'John Doe',
      age: 21,
      occupation: 'Software Engineer',
      image: 'https://api.multiavatar.com/stefan.png',
    },
    {
      id: 2,
      name: 'sidhesh Doe',
      age: 22,
      occupation: 'Prompt Engineer',
      image: 'https://api.multiavatar.com/stefan.png',
    },
    {
      id: 3,
      name: 'salman Doe',
      age: 20,
      occupation: 'Software Engineer',
      image: 'https://api.multiavatar.com/stefan.png',
    },
    {
      id: 4,
      name: 'shashoto Doe',
      age: 23,
      occupation: 'Software Engineer',
      image: 'https://api.multiavatar.com/stefan.png',
    },
  ];
  return (
    <View>
      <Text style={styles.headingText}>ContactList</Text>
      <ScrollView style={styles.container} scrollEnabled={false}>
        {contacts.map(({id, name, age, occupation, image}) => (
          <View key={id} style={styles.userCard}>
            <Image
              source={{
                uri: image,
              }}
              style={styles.userImage}
            />
            <View style={{}}>
              <View style={styles.userDetails}>
                <Text style={styles.userName}>{name}</Text>
                <Text style={styles.age}>Age: {age}</Text>
              </View>
              <Text style={styles.occupation}>{occupation}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  container: {
    paddingHorizontal: 16,
    paddingTop: 2,
  },
  userCard: {
    backgroundColor: '#EA7773',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
    borderRadius: 30 / 2,
    borderTopLeftRadius: 60 / 2,
    borderBottomLeftRadius: 60 / 2,
    padding: 2,
  },
  userImage: {
    height: 60,
    width: 60,
    borderRadius: 60 / 2,
    marginRight: 14,
  },
  userDetails: {
    width: 250,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  userName: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white',
  },
  age: {
    fontSize: 16,
  },
  occupation: {
    fontSize: 16,
  },
});
export default ContactList;
