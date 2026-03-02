/**
 *  @author Group 9 - Aaron Reid, Joshua Couto, Kaley Wood
 *  Southern Alberta Institute of Technology: CPRG-303-C
 *  Assignment 2: Advanced Multi-Screen Mobile App w/ Collaborative Navigation
 *  Created: 02.24.2026
 */

import { View, TextInput, Pressable, Text, StyleSheet } from 'react-native';

interface RecentSearchHeaderProps {
  onPress: () => void;
}

function RecentSearchHeader({ onPress }: RecentSearchHeaderProps) {
  return (
    <View style={styles.recentSearchHeader}>
      <TextInput
        style={styles.textInput}
        placeholder="What do you want to listen to?"
        placeholderTextColor="#9E9E9E"
        selectionColor="#1DB954"
      />
      <Pressable onPress={onPress}
        style={styles.cancelButton}>
        <Text style={styles.cancelText}>Cancel</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  recentSearchHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#121212',
    gap: 12,
  },
  textInput: {
    flex: 1,
    backgroundColor: '#2A2A2A',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 10,
    color: '#FFFFFF',
    fontSize: 16,
  },
  cancelButton: {
    paddingVertical: 8,
  },
  cancelText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
});

export default RecentSearchHeader;