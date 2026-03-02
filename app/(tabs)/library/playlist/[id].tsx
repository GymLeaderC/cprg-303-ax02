/**
 *  @author Group 9 - Aaron Reid, Joshua Couto, Kaley Wood
 *  Southern Alberta Institute of Technology: CPRG-303-C
 *  Assignment 2: Advanced Multi-Screen Mobile App w/ Collaborative Navigation
 *  Created: 03.01.2026
 */

import {
  ALT_POP_MIX,
  DANCE_PARTY,
  DAYLIST,
  DJ,
  ELEVATOR_MUSIC,
  LIKED_SONGS,
  REWIND_2025,
  Song,
  YOU_LIKE_JAZZ,
  YOUR_EPISODES,
} from "@/data/playlistData";
import { getSongArt } from "@/data/songArtData";
import { Ionicons } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import React from "react";
import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

/* Maps route id param to the correct playlist data */
const PLAYLIST_MAP: Record<string, typeof LIKED_SONGS> = {
  "liked-songs": LIKED_SONGS,
  "your-episodes": YOUR_EPISODES,
  "elevator-music": ELEVATOR_MUSIC,
  dj: DJ,
  "2025-rewind": REWIND_2025,
  "you-like-jazz": YOU_LIKE_JAZZ,
  "dance-party": DANCE_PARTY,
  daylist: DAYLIST,
  "alt-pop-mix": ALT_POP_MIX,
};

/* Renders a single song row with album art, title, artist, duration */
function SongRow({ song }: { song: Song }) {
  return (
    <Pressable
      style={({ pressed }) => [styles.songRow, pressed && { opacity: 0.6 }]}
    >
      {/* Album art sourced from Spotify CDN via getSongArt helper */}
      <Image source={getSongArt(song.title)} style={styles.albumArt} />

      <View style={styles.songInfo}>
        <View style={styles.songTitleRow}>
          {song.explicit && (
            <View style={styles.explicitBadge}>
              <Text style={styles.explicitText}>E</Text>
            </View>
          )}
          <Text style={styles.songTitle} numberOfLines={1}>
            {song.title}
          </Text>
        </View>
        <Text style={styles.songArtist} numberOfLines={1}>
          {song.artist}
        </Text>
      </View>
      <Text style={styles.songDuration}>{song.duration}</Text>
      <Ionicons name="ellipsis-horizontal" size={20} color="#B3B3B3" />
    </Pressable>
  );
}

export default function PlaylistScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const playlist = PLAYLIST_MAP[id];

  /* Fallback if an unknown id is passed */
  if (!playlist) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.errorText}>Playlist not found.</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={playlist.songs}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <SongRow song={item} />}
        /* Header renders the playlist art, name, and controls */
        ListHeaderComponent={
          <View>
            <Pressable style={styles.backButton} onPress={() => router.back()}>
              <Ionicons name="chevron-back" size={28} color="#FFFFFF" />
            </Pressable>

            <Image source={playlist.coverImage} style={styles.coverArt} />

            <View style={styles.metaContainer}>
              <Text style={styles.playlistName}>{playlist.name}</Text>
              <Text style={styles.playlistMeta}>
                {playlist.owner} · {playlist.songCount.toLocaleString()} songs
              </Text>
            </View>

            {/* Playback Controls */}
            <View style={styles.controls}>
              <Pressable>
                <Ionicons name="heart-outline" size={28} color="#B3B3B3" />
              </Pressable>
              <Pressable>
                <Ionicons
                  name="arrow-down-circle-outline"
                  size={28}
                  color="#B3B3B3"
                />
              </Pressable>
              <Pressable>
                <Ionicons
                  name="ellipsis-horizontal"
                  size={28}
                  color="#B3B3B3"
                />
              </Pressable>
              <View style={styles.rightControls}>
                <Pressable>
                  <Ionicons name="shuffle" size={28} color="#1DB954" />
                </Pressable>
                <Pressable style={styles.playButton}>
                  <Ionicons name="play" size={28} color="#000000" />
                </Pressable>
              </View>
            </View>

            <Text style={styles.sectionTitle}>Songs</Text>
          </View>
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
  },
  backButton: {
    paddingHorizontal: 12,
    paddingTop: 8,
    paddingBottom: 4,
  },
  coverArt: {
    width: 220,
    height: 220,
    borderRadius: 8,
    alignSelf: "center",
    marginVertical: 16,
  },
  metaContainer: {
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  playlistName: {
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "bold",
  },
  playlistMeta: {
    color: "#B3B3B3",
    fontSize: 13,
    marginTop: 4,
  },
  controls: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    gap: 16,
    marginBottom: 16,
  },
  rightControls: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: "auto",
    gap: 16,
  },
  playButton: {
    backgroundColor: "#1DB954",
    borderRadius: 50,
    width: 52,
    height: 52,
    alignItems: "center",
    justifyContent: "center",
  },
  sectionTitle: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
    paddingHorizontal: 16,
    marginBottom: 8,
  },
  songRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 10,
    gap: 12,
  },
  albumArt: {
    width: 48,
    height: 48,
    borderRadius: 4,
  },
  songInfo: {
    flex: 1,
  },
  songTitleRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  songTitle: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "500",
    flexShrink: 1,
  },
  songArtist: {
    color: "#B3B3B3",
    fontSize: 13,
    marginTop: 2,
  },
  songDuration: {
    color: "#B3B3B3",
    fontSize: 13,
  },
  explicitBadge: {
    backgroundColor: "#B3B3B3",
    borderRadius: 2,
    paddingHorizontal: 4,
    paddingVertical: 1,
  },
  explicitText: {
    color: "#121212",
    fontSize: 10,
    fontWeight: "bold",
  },
  errorText: {
    color: "#B3B3B3",
    textAlign: "center",
    marginTop: 40,
  },
});
