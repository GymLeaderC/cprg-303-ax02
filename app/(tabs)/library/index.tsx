/**
 *  @author Group 9 - Aaron Reid, Joshua Couto, Kaley Wood
 *  Southern Alberta Institute of Technology: CPRG-303-C
 *  Assignment 2: Advanced Multi-Screen Mobile App w/ Collaborative Navigation
 *  Created: 03.01.2026
 */

import React, { useState } from 'react';
import {
  Image,
  LayoutChangeEvent,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import FilterBar from '@/components/header-components/filter-bar';
import { PLAYLISTS, PlaylistItem } from '@/data/libraryData';

const GAP = 8;
const PADDING = 12;
const TEXT_HEIGHT = 19;

/* Renders a single playlist card in the grid */
function PlaylistCard({ item, cardSize }: { item: PlaylistItem; cardSize: number }) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.playlistContainer,
        pressed && { opacity: 0.7 },
      ]}
      onPress={() => router.push(`/(tabs)/library/playlist/${item.id}` as any)}
    >
      <Image
        source={item.coverImage}
        style={[styles.coverImage, { width: cardSize, height: cardSize }]}
      />
      {(item.pinned || item.downloaded) && (
        <View style={styles.badgeRow}>
          {item.downloaded && (
            <Ionicons name="arrow-down-circle" size={12} color="#1DB954" />
          )}
          {item.pinned && (
            <Ionicons name="pin" size={12} color="#1DB954" />
          )}
        </View>
      )}
      <Text style={styles.playlistName} numberOfLines={1}>
        {item.playlistName}
      </Text>
      {item.playlistOwner && (
        <Text style={styles.playlistOwner} numberOfLines={1}>
          {item.playlistOwner}
        </Text>
      )}
      {item.description && (
        <Text style={styles.playlistOwner} numberOfLines={1}>
          {item.description}
        </Text>
      )}
    </Pressable>
  );
}

/* Renders the 3-column grid of playlist cards */
function PlaylistGrid() {
  const [cardSize, setCardSize] = useState(0);
  const rows = [PLAYLISTS.slice(0, 3), PLAYLISTS.slice(3, 6), PLAYLISTS.slice(6, 9)];

  const handleLayout = (e: LayoutChangeEvent) => {
    const { width, height } = e.nativeEvent.layout;
    const contentWidth = width - PADDING * 2;
    const contentHeight = height - PADDING * 2;
    const maxFromWidth = (contentWidth - GAP * 2) / 3;
    const maxFromHeight = (contentHeight - GAP * 2 - TEXT_HEIGHT * 3) / 3;
    setCardSize(Math.min(maxFromWidth, maxFromHeight));
  };

  return (
    <View style={styles.gridContainer} onLayout={handleLayout}>
      {cardSize > 0 && rows.map((row, rowIndex) => (
        <View key={rowIndex} style={styles.row}>
          {row.map((item) => (
            <PlaylistCard key={item.id} item={item} cardSize={cardSize} />
          ))}
        </View>
      ))}
    </View>
  );
}

export default function Library() {
  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      {/* Header */}
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://raw.githubusercontent.com/GymLeaderC/cprg-303-ax02/main/assets/images/jaronadel.png' }}
          style={styles.profilePic}
        />
        <Text style={styles.title}>Your Library</Text>
        <Ionicons name="search" size={24} color="#FFFFFF" style={styles.headerIcon} />
        <Ionicons name="add" size={24} color="#FFFFFF" style={styles.headerIcon} />
      </View>

      <FilterBar />

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <PlaylistGrid />
      </ScrollView>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
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
  headerIcon: {
    marginLeft: 16,
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 100,
  },
  gridContainer: {
    flex: 1,
    padding: PADDING,
    gap: GAP,
    overflow: 'hidden',
  },
  row: {
    flexDirection: 'row',
    gap: GAP,
    justifyContent: 'center',
  },
  playlistContainer: {
    alignItems: 'center',
  },
  coverImage: {
    borderRadius: 6,
  },
  badgeRow: {
    flexDirection: 'row',
    gap: 4,
    marginTop: 4,
  },
  playlistName: {
    marginTop: 6,
    fontWeight: '600',
    color: '#FFFFFF',
    fontSize: 13,
  },
  playlistOwner: {
    color: '#B3B3B3',
    fontSize: 11,
    marginTop: 2,
  },
});