/**
 *  @author Group 9 - Aaron Reid, Joshua Couto, Kaley Wood
 *  Southern Alberta Institute of Technology: CPRG-303-C
 *  Assignment 2: Advanced Multi-Screen Mobile App w/ Collaborative Navigation
 *  Created: 02.24.2026
 */

import { Pressable, Image, Text, View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface RecentCardProps {
  title: string;
  image: { uri: string };
  type: "Album" | "Playlist" | "Artist" | "Song";
  createdBy?: string;
  explicit?: boolean;
}

function RecentCard({ title, image, type, createdBy, explicit }: RecentCardProps) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.recentCard,
        pressed ? { opacity: 0.7 } : {},
      ]}
    >
      <Image
        source={image}
        style={[styles.image,
        type === "Artist" ? styles.circleImage : styles.squareImage,
        ]}
      />
      <View style={styles.textColumn}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.subtitleRow}>
          {explicit && (
            <View style={styles.explicitBadge}>
              <Text style={styles.explicitText}>E</Text>
            </View>
          )}
          <Text style={styles.subtitle}>{type}</Text>
          {createdBy && (
            <Text style={styles.subtitle}> • {createdBy} </Text>
          )}
        </View>
      </View>
      <View style={styles.iconsRow}>
        <Ionicons name="add-circle-outline" size={24} color="#B3B3B3" />
        <Ionicons name="close" size={24} color="#B3B3B3" />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  recentCard: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: '#121212',
  },
  image: {
    width: 50,
    height: 50,
  },
  circleImage: {
    borderRadius: 25,
  },
  squareImage: {
    borderRadius: 4,
  },
  textColumn: {
    flex: 1,
    marginLeft: 12,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '500',
  },
  subtitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 3,
    gap: 4,
  },
  subtitle: {
    color: '#B3B3B3',
    fontSize: 13,
  },
  explicitBadge: {
    backgroundColor: '#B3B3B3',
    borderRadius: 2,
    paddingHorizontal: 5,
    paddingVertical: 1,
  },
  explicitText: {
    color: '#121212',
    fontSize: 10,
    fontWeight: 'bold',
  },
  iconsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
});

export default RecentCard;