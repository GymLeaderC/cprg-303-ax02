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
  'back to friends':    { uri: 'https://i.scdn.co/image/ab67616d0000b273e787cffec20aa2a396a61647' }, // sombr
  'Flowers':            { uri: 'https://i.scdn.co/image/ab67616d0000b2732e8ed79e177ff6011076f5f0' }, // Miley Cyrus
  'Daylight':           { uri: 'https://i.scdn.co/image/ab67616d0000b273e787cffec20aa2a396a61647' }, // David Kushner
  'Kill Bill':          { uri: 'https://i.scdn.co/image/ab67616d0000b2732e8ed79e177ff6011076f5f0' }, // SZA
  "Creepin'":           { uri: 'https://i.scdn.co/image/ab67616d0000b273e787cffec20aa2a396a61647' }, // Metro Boomin, The Weeknd
  'As It Was':          { uri: 'https://i.scdn.co/image/ab67616d0000b2732e8ed79e177ff6011076f5f0' }, // Harry Styles - Harry's House
  'Cruel Summer':       { uri: 'https://i.scdn.co/image/ab67616d0000b273e787cffec20aa2a396a61647' }, // Taylor Swift - Lover
  'Escapism.':          { uri: 'https://i.scdn.co/image/ab67616d0000b2732e8ed79e177ff6011076f5f0' }, // RAYE, 070 Shake
  'Golden Hour':        { uri: 'https://i.scdn.co/image/ab67616d0000b273e787cffec20aa2a396a61647' }, // JVKE
  'Bad Habit':          { uri: 'https://i.scdn.co/image/ab67616d0000b2732e8ed79e177ff6011076f5f0' }, // Steve Lacy
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