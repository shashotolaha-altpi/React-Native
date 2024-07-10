import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>

      <View style={[styles.card, styles.cardElevated]}>
        <Image
          source={require('../Asserts/images/1.jpg')}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <View >
            <Text style={[styles.cardTitle, styles.wText]}>Mountain</Text>
            <Text style={[styles.cardLabel, styles.wText]}>scenery</Text>
          </View>
          <Text style={[styles.cardDesc, styles.wText]}>
            The name of the range hails from the Sanskrit Himālaya (हिमालय
            'abode of snow'), from hima (हिम 'frost/cold') and ālaya (आलय
            'dwelling/house'). They are now known as "the Himalaya Mountains",
            usually shortened to "the Himalayas".
          </Text>
          <View style={styles.cardFooter}>
            <View>
              <Text style={[styles.wText]}>By,</Text>
              <Text style={[styles.wText]}>Shashoto</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  card: {
    width: 350,
    height: 390,
    borderRadius: 8,
    marginVertical: 12,
    marginHorizontal: 16,
  },
  cardElevated: {
    backgroundColor: '#bfbfbf',
    elevation: 8,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  cardImage: {
    height: 180,
    width: '100%',
    marginBottom: 8,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  cardBody: {
    flex: 1,
    flexGrow: 1,
    paddingHorizontal: 12,
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  cardLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  cardDesc: {
    fontSize: 12,
    fontWeight: 'bold',
    marginTop: 6,
    marginBottom: 7,
  },
  cardFooter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  wText: {
    color: '#000000',
  },
});
