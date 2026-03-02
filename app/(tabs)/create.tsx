/**
 *  @author Group 9 - Aaron Reid, Joshua Couto, Kaley Wood
 *  Southern Alberta Institute of Technology: CPRG-303-C
 *  Assignment 2: Advanced Multi-Screen Mobile App w/ Collaborative Navigation
 *  Created: 03.01.2026
 */

import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { CREATE_OPTIONS, CreateOption, IconLibrary } from '@/data/createData';

/* Renders the correct icon component based on the library string stored in data */
function renderIcon(iconName: string, iconLibrary: IconLibrary) {
  if (iconLibrary === 'MaterialCommunityIcons') {
    return <MaterialCommunityIcons name={iconName as any} size={24} color="#FFFFFF" />;
  }
  return <Ionicons name={iconName as any} size={24} color="#FFFFFF" />;
}

/* Renders a single row in the Create options list */
function CreateOptionRow({ item }: { item: CreateOption }) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.row,
        pressed && { opacity: 0.7 },
      ]}
    >
      <View style={styles.iconContainer}>
        {renderIcon(item.iconName, item.iconLibrary)}
      </View>
      <View style={styles.textContainer}>
        <View style={styles.titleRow}>
          <Text style={styles.title}>{item.title}</Text>
          {item.showBeta && (
            <View style={styles.betaBadge}>
              <Text style={styles.betaText}>Beta</Text>
            </View>
          )}
        </View>
        <Text style={styles.subtitle}>{item.subtitle}</Text>
      </View>
    </Pressable>
  );
}

export default function Create() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Create</Text>
      <FlatList
        data={CREATE_OPTIONS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <CreateOptionRow item={item} />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  header: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 14,
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 8,
    backgroundColor: '#2A2A2A',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  textContainer: {
    flex: 1,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  subtitle: {
    color: '#B3B3B3',
    fontSize: 13,
    marginTop: 3,
  },
  betaBadge: {
    backgroundColor: '#1DB954',
    borderRadius: 4,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  betaText: {
    color: '#000000',
    fontSize: 11,
    fontWeight: '700',
  },
});