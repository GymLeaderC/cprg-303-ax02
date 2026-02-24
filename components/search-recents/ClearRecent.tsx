/**
 *  @author Group 9 - Aaron Reid, Joshua Couto, Kaley Wood
 *  Southern Alberta Institute of Technology: CPRG-303-C
 *  Assignment 2: Advanced Multi-Screen Mobile App w/ Collaborative Navigation
 *  Created: 02.24.2026
 */

import { Pressable, Text, StyleSheet } from 'react-native';

function ClearRecent() {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.clearButton,
        pressed ? { transform: [{ scale: 0.95 }], opacity: 0.7 } : {},
      ]}
    >
      <Text style={styles.clearText}>Clear recent searches</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  clearButton: {
    alignSelf: 'center',
    paddingVertical: 12,
    paddingHorizontal: 24,
    marginTop: 16,
    marginBottom: 32,
    borderRadius: 20,
    backgroundColor: '#2A2A2A',
  },
  clearText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
  },
});

export default ClearRecent;