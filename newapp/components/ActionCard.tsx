import {
  StyleSheet,
  Text,
  View,
  Linking,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const ActionCard = () => {
  function openWebsite(webSiteLink: string) {
    Linking.openURL(webSiteLink);
  }
  return (
    <View>
      <Text style={[styles.headingText]}>Blog Card</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <View style={styles.headingContainer}>
          <Text style={[styles.blackColor, styles.headerText]}>
            What's new is javascript in 2024
          </Text>
        </View>
        <Image
          source={require('../Asserts/images/1.jpg')}
          style={styles.cardImage}
        />
        <View style={styles.bodyContainer}>
          <Text numberOfLines={3} style={[styles.blackColor]}>
            In this article, we'll explore some of the most exciting and hotly
            anticipated JavaScript features that are expected to land in 2024.
          </Text>
        </View>
        <View style={styles.footerContainer}>
          <TouchableOpacity
            onPress={() => openWebsite('https://roadmap.sh/javascript')}>
            <Text style={[styles.blackColor, styles.socialLink]}>Read Me</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => openWebsite('https://www.youtube.com/@veritasium')}>
            <Text
              style={[
                styles.blackColor,
                styles.socialLink,
                {backgroundColor: '#BA2F16'},
              ]}>
              YouTube
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ActionCard;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  card: {
    width: 350,
    height: 360,
    borderRadius: 6,
    marginVertical: 12,
    marginHorizontal: 16,
  },
  cardElevated: {
    backgroundColor: '#2475B0',
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.4,
  },
  headingContainer: {
    height: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: '#333',
    fontSize: 16,
    fontWeight: '600',
  },
  cardImage: {
    height: 190,
    width: '100%',
  },
  bodyContainer: {
    padding: 10,
  },
  footerContainer: {
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  socialLink: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    backgroundColor: '#87b7ff',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 6,
  },

  blackColor: {
    color: '#000',
  },
});
