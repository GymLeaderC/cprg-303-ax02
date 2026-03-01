/**
 *  @author Group 9 - Aaron Reid, Joshua Couto, Kaley Wood
 *  Southern Alberta Institute of Technology: CPRG-303-C
 *  Assignment 2: Advanced Multi-Screen Mobile App w/ Collaborative Navigation
 *  Created: 02.23.2026
 */

import { Pressable, StyleSheet, Text, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface SearchBarProps {
  onPress: () => void;
}

function SearchBar({ onPress }: SearchBarProps) {
  return (
    <Pressable onPress={onPress}
      style={styles.searchBar}
    >
      <Ionicons name="search" size={24} color="#4f4f4f" />
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
  },
  searchIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
    tintColor: '#757575',
  },
  searchText: {
    color: '#757575',
    fontSize: 16,
    fontWeight: '500',
    margin: 4,
  },
});

export default SearchBar;
