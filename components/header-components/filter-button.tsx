/**
 *  @author Group 9 - Aaron Reid, Joshua Couto, Kaley Wood
 *  Southern Alberta Institute of Technology: CPRG-303-C
 *  Assignment 2: Advanced Multi-Screen Mobile App w/ Collaborative Navigation
 *  Created: 02.08.2026
 */

import { Pressable, StyleSheet, Text } from 'react-native';

interface FilterButtonProps {
  title: string;
  isActive: boolean;
  onPress: () => void;
}

function FilterButton({ title, isActive, onPress }: FilterButtonProps) {
  return (
    <Pressable onPress={onPress}>
      <Text style={[isActive ? styles.active : styles.inactive, styles.text]}>
        {title}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  active: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: '#1ED760',
    borderRadius: 20,
  },
  inactive: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: '#333333',
    borderRadius: 20,
  },
  text: {
    color: '#FCFCFC',
    fontSize: 14,
    fontWeight: '600',
  },
});

export default FilterButton;