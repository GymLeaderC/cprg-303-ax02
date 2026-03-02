/**
 *  @author Group 9 - Aaron Reid, Joshua Couto, Kaley Wood
 *  Southern Alberta Institute of Technology: CPRG-303-C
 *  Assignment 2: Advanced Multi-Screen Mobile App w/ Collaborative Navigation
 *  Created: 03.01.2026
 */

/* Album art URLs sourced from the Spotify CDN.
 * Format: { uri: string } to match React Native's ImageSourcePropType.
 * Keyed by song title for lookup in playlist screens. */

export const SONG_ART: Record<string, { uri: string }> = {

  // ─── LIKED SONGS ────────────────────────────────────────────────────────────
  'back to friends':    { uri: 'https://raw.githubusercontent.com/GymLeaderC/cprg-303-ax02/refs/heads/branch-kaley/assets/images/dtmf.jpeg' }, // sombr
  'Flowers':            { uri: 'https://raw.githubusercontent.com/GymLeaderC/cprg-303-ax02/refs/heads/branch-kaley/assets/images/flowers.jpg' },
  'Daylight':           { uri: 'https://raw.githubusercontent.com/GymLeaderC/cprg-303-ax02/refs/heads/branch-kaley/assets/images/daylight.jpg' },
  'Kill Bill':          { uri: 'https://raw.githubusercontent.com/GymLeaderC/cprg-303-ax02/refs/heads/branch-kaley/assets/images/bill.jpg' }, // SZA
  "Creepin'":           { uri: 'https://raw.githubusercontent.com/GymLeaderC/cprg-303-ax02/refs/heads/branch-kaley/assets/images/creep.jpg' }, // Metro Boomin, The Weeknd
  'As It Was':          { uri: 'https://raw.githubusercontent.com/GymLeaderC/cprg-303-ax02/refs/heads/branch-kaley/assets/images/asItWas.jpg' }, // Harry Styles - Harry's House
  'Cruel Summer':       { uri: 'https://raw.githubusercontent.com/GymLeaderC/cprg-303-ax02/refs/heads/branch-kaley/assets/images/summer.jpg' }, // Taylor Swift - Lover
  'Escapism.':          { uri: 'https://raw.githubusercontent.com/GymLeaderC/cprg-303-ax02/refs/heads/branch-kaley/assets/images/escapism.jpg' }, // RAYE, 070 Shake
  'Golden Hour':        { uri: 'https://raw.githubusercontent.com/GymLeaderC/cprg-303-ax02/refs/heads/branch-kaley/assets/images/golden.jpg' }, // JVKE
  'Bad Habit':          { uri: 'https://raw.githubusercontent.com/GymLeaderC/cprg-303-ax02/refs/heads/branch-kaley/assets/images/badHabits.jpg' }, // Steve Lacy
};

/* Fallback image used when a song title has no match in SONG_ART.
 * A neutral grey square — keeps layouts from breaking. */
export const FALLBACK_ART: { uri: string } = {
  uri: 'https://raw.githubusercontent.com/GymLeaderC/cprg-303-ax02/refs/heads/main/assets/images/jaronadel.png',
};

/* Helper — call this anywhere instead of indexing SONG_ART directly.
 * Guarantees you always get a valid ImageSource back.
 *
 * Usage:
 *   <Image source={getSongArt(song.title)} style={styles.albumArt} />
 */
export function getSongArt(title: string): { uri: string } {
  return SONG_ART[title] ?? FALLBACK_ART;
}
