/**
 *  @author Group 9 - Aaron Reid, Joshua Couto, Kaley Wood
 *  Southern Alberta Institute of Technology: CPRG-303-C
 *  Assignment 2: Advanced Multi-Screen Mobile App w/ Collaborative Navigation
 *  Created: 02.21.2026
 */

import { Pressable, StyleSheet, Text, Image } from 'react-native';

/* Props for the reusable card component used in both 
   'Start Browsing' and 'Browse All' sections */

interface CategoryCardProps {
  title: string;
  backgroundColor: string;
  image: any;
  size: "small" | "large";
}

/* Renders a single category card. Size prop controls whether it
 * displays as a compact Start Browsing card or a taller Browse All card. */

function CategoryCard({ title, backgroundColor, image, size }: CategoryCardProps) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.card,
        size === "small" ? styles.smallCard : styles.largeCard,
        { backgroundColor: pressed ? darkenColor(backgroundColor) : backgroundColor }
      ]}
    >
      <Text style={styles.title}>{title}</Text>
      <Image source={image} style={[styles.cardImage, size === "large" && styles.largeCardImage]} />
    </Pressable>
  );
}

/* Takes a hex value, subtracts 30 from each of the red, green, 
 * and blue channels. Clamps at 0 so it never goes negative.
 * returns a new, darker hex value. */

function darkenColor(hex: string): string {
  const num = parseInt(hex.replace("#", ""), 16);
  const r = Math.max((num >> 16) - 30, 0);
  const g = Math.max(((num >> 8) & 0x00ff) - 30, 0);
  const b = Math.max((num & 0x0000ff) - 30, 0);
  return `#${(r << 16 | g << 8 | b).toString(16).padStart(6, "0")}`;
}

const styles = StyleSheet.create({
  /* Base styles shared by both card sizes
   * Clips the rotated image at card edges
   * Allows absolute positioning of the card image */
  card: {
    borderRadius: 8,
    padding: 12,
    overflow: "hidden",
    position: "relative",
  },
  // 'Start Browsing' section card styling
  smallCard: {
    width: "47%",
    height: 70,
  },
  // 'Browse All' section cards
  largeCard: {
    width: "47%",
    height: 100,
  },
  // Keeps text above the image when they overlap
  title: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "700",
    zIndex: 1,
  },
  // Pinned to bottom-right corner with a slight rotation
  cardImage: {
    position: "absolute",
    bottom: -5,
    right: -5,
    width: 60,
    height: 60,
    borderRadius: 4,
    transform: [{ rotate: "20deg" }],
  },
  // 25% larger image for 'Browse All' large cards
  largeCardImage: {
    width: 75,
    height: 75,
  }
})

export default CategoryCard;