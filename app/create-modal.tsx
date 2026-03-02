/**
 *  @author Group 9 - Aaron Reid, Joshua Couto, Kaley Wood
 *  Southern Alberta Institute of Technology: CPRG-303-C
 *  Assignment 2: Advanced Multi-Screen Mobile App w/ Collaborative Navigation
 *  Created: 03.01.2026
 */

import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function CreateModal() {
  return (
    <Pressable style={styles.backdrop} onPress={() => router.back()}>
      <Pressable style={styles.sheet} onPress={(e) => e.stopPropagation()}>
        <Text style={styles.title}>Create</Text>

        <Pressable style={styles.option}>
          <Ionicons name="musical-notes-outline" size={24} color="#FFF" />
          <Text style={styles.optionText}>New playlist</Text>
        </Pressable>

        <Pressable style={styles.option}>
          <Ionicons name="folder-outline" size={24} color="#FFF" />
          <Text style={styles.optionText}>New playlist folder</Text>
        </Pressable>

        <Pressable style={styles.option}>
          <Ionicons name="mic-outline" size={24} color="#FFF" />
          <Text style={styles.optionText}>New blend</Text>
        </Pressable>

        <Pressable onPress={() => router.back()} style={styles.cancelButton}>
          <Text style={styles.cancelText}>Cancel</Text>
        </Pressable>
      </Pressable>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
    justifyContent: 'flex-end',
  },
  sheet: {
    backgroundColor: '#282828',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    padding: 24,
    paddingBottom: 40,
    gap: 8,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    paddingVertical: 14,
  },
  optionText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  cancelButton: {
    marginTop: 8,
    alignItems: 'center',
    paddingVertical: 14,
  },
  cancelText: {
    color: '#B3B3B3',
    fontSize: 16,
  },
});