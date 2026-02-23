/**
 *  @author Group 9 - Aaron Reid, Joshua Couto, Kaley Wood
 *  Southern Alberta Institute of Technology: CPRG-303-C
 *  Assignment 2: Advanced Multi-Screen Mobile App w/ Collaborative Navigation
 *  Created: 02.23.2026
 */

import { Image, StyleSheet, Text, View } from 'react-native';

function SearchHeader() {
  return (
    <View style={styles.header}>
      <Image
        source={require('../../assets/images/jaronadel.png')} // TO-DO: Download Assets
        style={styles.profilePic}
      />
      <Text style={styles.title}>Search</Text>
      <Image
        source={require('../../assets/images/camera-icon.png')} // TO-DO: Download Assets
        style={styles.searchIcon}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#121212',
  },
  profilePic: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
    flex: 1,
  },
  searchIcon: {
    width: 24,
    height: 24,
    marginLeft: 12,
  } 
});

export default SearchHeader;