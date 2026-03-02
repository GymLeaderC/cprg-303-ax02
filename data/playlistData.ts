/**
 *  @author Group 9 - Aaron Reid, Joshua Couto, Kaley Wood
 *  Southern Alberta Institute of Technology: CPRG-303-C
 *  Assignment 2: Advanced Multi-Screen Mobile App w/ Collaborative Navigation
 *  Created: 03.01.2026
 */

export type Song = {
  id: string;
  title: string;
  artist: string;
  duration: string;
  explicit: boolean;
};

export type PlaylistMeta = {
  id: string;
  name: string;
  owner: string;
  songCount: number;
  coverImage: { uri: string };
  songs: Song[];
};

export const YOUR_EPISODES: PlaylistMeta = {
  id: 'your-episodes',
  name: 'Your Episodes',
  owner: 'Your Library',
  songCount: 5,
  coverImage: { uri: 'https://raw.githubusercontent.com/GymLeaderC/cprg-303-ax02/main/assets/images/bookmarked.png' },
  songs: [
    { id: '1', title: 'The Future of AI', artist: 'Lex Fridman Podcast', duration: '2:14', explicit: false },
    { id: '2', title: 'How To Build Wealth', artist: 'The Tim Ferriss Show', duration: '1:32', explicit: false },
    { id: '3', title: 'Science of Sleep', artist: 'Huberman Lab', duration: '1:58', explicit: false },
    { id: '4', title: 'Dark Matter Explained', artist: 'StarTalk Radio', duration: '48:22', explicit: false },
    { id: '5', title: 'The Art of Listening', artist: 'On Being', duration: '52:05', explicit: false },
  ],
};

export const ELEVATOR_MUSIC: PlaylistMeta = {
  id: 'elevator-music',
  name: 'Elevator Music',
  owner: 'Juan Pablo Borg...',
  songCount: 6,
  coverImage: { uri: 'https://raw.githubusercontent.com/GymLeaderC/cprg-303-ax02/main/assets/images/elevatorMusic.png' },
  songs: [
    { id: '1', title: 'Girl from Ipanema', artist: 'Stan Getz, João Gilberto', duration: '5:21', explicit: false },
    { id: '2', title: 'Fly Me to the Moon', artist: 'Frank Sinatra', duration: '2:27', explicit: false },
    { id: '3', title: 'What a Wonderful World', artist: 'Louis Armstrong', duration: '2:21', explicit: false },
    { id: '4', title: 'Misty', artist: 'Erroll Garner', duration: '3:12', explicit: false },
    { id: '5', title: 'Take Five', artist: 'Dave Brubeck', duration: '5:24', explicit: false },
    { id: '6', title: 'Autumn Leaves', artist: 'Cannonball Adderley', duration: '7:48', explicit: false },
  ],
};

export const DJ: PlaylistMeta = {
  id: 'dj',
  name: 'DJ',
  owner: 'Spotify',
  songCount: 7,
  coverImage: { uri: 'https://raw.githubusercontent.com/GymLeaderC/cprg-303-ax02/refs/heads/branch-kaley/assets/DjBeta.jpg' },
  songs: [
    { id: '1', title: 'Blinding Lights', artist: 'The Weeknd', duration: '3:20', explicit: false },
    { id: '2', title: 'Levitating', artist: 'Dua Lipa', duration: '3:23', explicit: false },
    { id: '3', title: 'MONTERO', artist: 'Lil Nas X', duration: '2:18', explicit: true },
    { id: '4', title: 'Good 4 U', artist: 'Olivia Rodrigo', duration: '2:58', explicit: false },
    { id: '5', title: 'Peaches', artist: 'Justin Bieber, Daniel Caesar, Giveon', duration: '3:18', explicit: true },
    { id: '6', title: 'drivers license', artist: 'Olivia Rodrigo', duration: '4:02', explicit: false },
    { id: '7', title: 'Butter', artist: 'BTS', duration: '2:43', explicit: false },
  ],
};

export const REWIND_2025: PlaylistMeta = {
  id: '2025-top',
  name: 'Top 2025',
  owner: 'aar.reid',
  songCount: 6,
  coverImage: { uri: 'https://raw.githubusercontent.com/GymLeaderC/cprg-303-ax02/refs/heads/branch-kaley/assets/top.png' },
  songs: [
    { id: '1', title: 'APT.', artist: 'ROSÉ, Bruno Mars', duration: '3:00', explicit: false },
    { id: '2', title: 'luther', artist: 'Kendrick Lamar, SZA', duration: '4:14', explicit: true },
    { id: '3', title: 'Die With A Smile', artist: 'Lady Gaga, Bruno Mars', duration: '4:11', explicit: false },
    { id: '4', title: 'Espresso', artist: 'Sabrina Carpenter', duration: '2:55', explicit: false },
    { id: '5', title: 'BIRDS OF A FEATHER', artist: 'Billie Eilish', duration: '3:30', explicit: false },
    { id: '6', title: 'Not Like Us', artist: 'Kendrick Lamar', duration: '4:34', explicit: true },
  ],
};

export const YOU_LIKE_JAZZ: PlaylistMeta = {
  id: 'you-like-jazz',
  name: 'Modern Jazz',
  owner: 'aar.reid',
  songCount: 5,
  coverImage: { uri: https://raw.githubusercontent.com/GymLeaderC/cprg-303-ax02/refs/heads/branch-kaley/assets/modernJazz.png' },
  songs: [
    { id: '1', title: 'So What', artist: 'Miles Davis', duration: '9:22', explicit: false },
    { id: '2', title: 'A Love Supreme, Pt. I', artist: 'John Coltrane', duration: '7:46', explicit: false },
    { id: '3', title: 'Take Five', artist: 'Dave Brubeck', duration: '5:24', explicit: false },
    { id: '4', title: "'Round Midnight", artist: 'Thelonious Monk', duration: '5:30', explicit: false },
    { id: '5', title: 'Blue in Green', artist: 'Miles Davis', duration: '5:37', explicit: false },
  ],
};

export const DANCE_PARTY: PlaylistMeta = {
  id: 'dance-party',
  name: 'Dance Party',
  owner: 'aar.reid',
  songCount: 7,
  coverImage: { uri: 'https://raw.githubusercontent.com/GymLeaderC/cprg-303-ax02/refs/heads/branch-kaley/assets/danceparty.png' },
  songs: [
    { id: '1', title: 'As It Was', artist: 'Harry Styles', duration: '2:37', explicit: false },
    { id: '2', title: 'Shivers', artist: 'Ed Sheeran', duration: '3:27', explicit: false },
    { id: '3', title: "I'm Good (Blue)", artist: 'David Guetta, Bebe Rexha', duration: '2:55', explicit: false },
    { id: '4', title: 'Unholy', artist: 'Sam Smith, Kim Petras', duration: '2:37', explicit: true },
    { id: '5', title: 'About Damn Time', artist: 'Lizzo', duration: '3:13', explicit: true },
    { id: '6', title: 'BREAK MY SOUL', artist: 'Beyoncé', duration: '4:38', explicit: false },
    { id: '7', title: 'Boom Boom', artist: 'Daddy Yankee, RedOne, French Montana', duration: '3:15', explicit: false },
  ],
};

export const DAYLIST: PlaylistMeta = {
  id: 'daylist',
  name: 'Daylist',
  owner: 'Maria Rivera',
  songCount: 5,
  coverImage: { uri: 'https://raw.githubusercontent.com/GymLeaderC/cprg-303-ax02/refs/heads/branch-kaley/assets/daylist.png' },
  songs: [
    { id: '1', title: 'Telepatía', artist: 'Kali Uchis', duration: '2:55', explicit: false },
    { id: '2', title: 'La Noche de Anoche', artist: 'Bad Bunny, ROSALÍA', duration: '3:30', explicit: false },
    { id: '3', title: 'Hawái', artist: 'Maluma', duration: '3:23', explicit: false },
    { id: '4', title: 'Con Calma', artist: 'Daddy Yankee, Snow', duration: '3:24', explicit: false },
    { id: '5', title: 'Tusa', artist: 'KAROL G, Nicki Minaj', duration: '3:17', explicit: false },
  ],
};

export const ALT_POP_MIX: PlaylistMeta = {
  id: 'elvt-music',
  name: 'Elevator Music',
  owner: 'aar.reid',
  songCount: 6,
  coverImage: { uri: 'https://raw.githubusercontent.com/GymLeaderC/cprg-303-ax02/refs/heads/branch-kaley/assets/elevatorMusic.png' },
  songs: [
    { id: '1', title: 'Ribs', artist: 'Lorde', duration: '3:49', explicit: false },
    { id: '2', title: 'Motion Sickness', artist: 'Phoebe Bridgers', duration: '3:33', explicit: false },
    { id: '3', title: 'Apocalypse', artist: 'Cigarettes After Sex', duration: '4:56', explicit: false },
    { id: '4', title: 'Tennessee Whiskey', artist: 'Chris Stapleton', duration: '4:53', explicit: false },
    { id: '5', title: 'Pink + White', artist: 'Frank Ocean', duration: '3:00', explicit: false },
    { id: '6', title: 'Somebody Else', artist: 'The 1975', duration: '5:42', explicit: false },
  ],
};

export const LIKED_SONGS: PlaylistMeta = {
  id: 'liked-songs',
  name: 'Liked Songs',
  owner: 'Your Library',
  songCount: 2344,
  coverImage: { uri: 'https://raw.githubusercontent.com/GymLeaderC/cprg-303-ax02/refs/heads/branch-kaley/assets/likedSongs.jpg' },
  songs: [
    { id: '1', title: 'back to friends', artist: 'sombr', duration: '3:12', explicit: false },
    { id: '2', title: 'Flowers', artist: 'Miley Cyrus', duration: '3:21', explicit: false },
    { id: '3', title: 'Daylight', artist: 'David Kushner', duration: '3:44', explicit: false },
    { id: '4', title: 'Kill Bill', artist: 'SZA', duration: '2:33', explicit: true },
    { id: '5', title: "Creepin'", artist: 'Metro Boomin, The Weeknd', duration: '3:54', explicit: true },
    { id: '6', title: 'As It Was', artist: 'Harry Styles', duration: '2:37', explicit: false },
    { id: '7', title: 'Cruel Summer', artist: 'Taylor Swift', duration: '2:58', explicit: false },
    { id: '8', title: 'Escapism.', artist: 'RAYE, 070 Shake', duration: '3:49', explicit: true },
    { id: '9', title: 'Golden Hour', artist: 'JVKE', duration: '3:29', explicit: false },
    { id: '10', title: 'Bad Habit', artist: 'Steve Lacy', duration: '3:52', explicit: false },
  ],
};

/* Central map for looking up any playlist by its route id */
export const PLAYLIST_MAP: Record<string, PlaylistMeta> = {
  'liked-songs': LIKED_SONGS,
  'your-episodes': YOUR_EPISODES,
  'elevator-music': ELEVATOR_MUSIC,
  'dj': DJ,
  '2025-rewind': REWIND_2025,
  'you-like-jazz': YOU_LIKE_JAZZ,
  'dance-party': DANCE_PARTY,
  'daylist': DAYLIST,
  'alt-pop-mix': ALT_POP_MIX,
};