/**
 *  @author Group 9 - Aaron Reid, Joshua Couto, Kaley Wood
 *  Southern Alberta Institute of Technology: CPRG-303-C
 *  Assignment 2: Advanced Multi-Screen Mobile App w/ Collaborative Navigation
 *  Created: 02.23.2026
 */

import { Pressable, StyleSheet, Text, Image } from 'react-native';

interface SearchBarProps {
  onPress: () => void;
}

function SearchBar({ onPress }: SearchBarProps) {
  return (
    <Pressable onPress={onPress}
      style={styles.searchBar}
    >
      <Image
        source={require('../../assets/images/search-icon.png')}
        style={styles.searchIcon}
      />
      <Text style={styles.searchText}>
        What do you want to listen to?
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 12,
    marginHorizontal: 16,
    marginTop: 12,
  },
  searchIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
    tintColor: '#121212',
  },
  searchText: {
    color: '#757575',
    fontSize: 16,
    fontWeight: '500',
  },
});

export default SearchBar;
