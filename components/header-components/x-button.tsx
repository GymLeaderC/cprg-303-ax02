/**
 *  @author Group 9 - Aaron Reid, Joshua Couto, Kaley Wood
 *  Southern Alberta Institute of Technology: CPRG-303-C
 *  Assignment 2: Advanced Multi-Screen Mobile App w/ Collaborative Navigation
 *  Created: 02.08.2026
 */

import { Pressable, StyleSheet, Text } from 'react-native';

interface XButtonProps {
  onPress: () => void;
}

function XButton({ onPress }: XButtonProps) {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.text}>✕</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: '#333333',
    borderRadius: 100,
  },
  text: {
    color: '#FCFCFC',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default XButton;