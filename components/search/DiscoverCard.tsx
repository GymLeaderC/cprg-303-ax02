/**
 *  @author Group 9 - Aaron Reid, Joshua Couto, Kaley Wood
 *  Southern Alberta Institute of Technology: CPRG-303-C
 *  Assignment 2: Advanced Multi-Screen Mobile App w/ Collaborative Navigation
 *  Created: 02.21.2026
 */

import { Pressable, StyleSheet, Text, ImageBackground } from 'react-native';

/* Props for the reusable card component used in  
 * the 'Discover something new' section */

interface DiscoverCardProps {
  title: string;
  image: any;
}

/* Renders a single card for the 'Discover something new' horizontal
 * scroll section. Uses ImageBackground to fill the card with artwork,
 * with the title overlaid at the bottom. */

function DiscoverCard({ title, image }: DiscoverCardProps) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.card,
        pressed ? { transform: [{ scale: 0.95 }] } : {},
      ]}
    >
      <ImageBackground source={image} style={styles.imageBackground}>
        <Text style={styles.title}>{title}</Text>
      </ImageBackground>
    </Pressable >
  );
}

const styles = StyleSheet.create({
  /* Outer wrapper — fixed dimensions to keep cards uniform in
   * the horizontal scroll. Overflow hidden clips the image
   * to the rounded corners. */
  card: {
    width: 140,
    height: 200,
    borderRadius: 8,
    overflow: "hidden",
    marginRight: 12,
  },
  /* flex: 1 fills the Pressable container so the image covers
   * the full card. justifyContent pushes children (title) to
   * the bottom edge. */
  imageBackground: {
    flex: 1,
    justifyContent: "flex-end",
    padding: 10,
  },
  title: {
    color: "#FFFFFF",
    fontSize: 13,
    fontWeight: "700",
  },
});

export default DiscoverCard;