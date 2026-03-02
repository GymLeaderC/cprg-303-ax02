/**
 *  @author Group 9 - Aaron Reid, Joshua Couto, Kaley Wood
 *  Southern Alberta Institute of Technology: CPRG-303-C
 *  Assignment 2: Advanced Multi-Screen Mobile App w/ Collaborative Navigation
 *  Created: 03.01.2026
 */

import { ImageSourcePropType } from "react-native";

export type PlaylistItem = {
  id: string;
  playlistName: string;
  playlistOwner?: string;
  description?: string;
  songNumber?: number;
  pinned?: boolean;
  downloaded?: boolean;
  coverImage: ImageSourcePropType;
};

export const PLAYLISTS: PlaylistItem[] = [
  {
    id: 'liked-songs',
    playlistName: 'Liked Songs',
    songNumber: 2344,
    pinned: true,
    downloaded: true,
    coverImage: { uri: 'https://raw.githubusercontent.com/GymLeaderC/cprg-303-ax02/refs/heads/branch-kaley/assets/images/likedSongs.jpg' },
  },
  {
    id: 'daylist',
    playlistName: 'Daylist',
    description: 'Playlist • Saved episodes',
    pinned: true,
    coverImage: { uri: 'https://raw.githubusercontent.com/GymLeaderC/cprg-303-ax02/main/assets/images/bookmarked.png' },
  },
  {
    id: 'elt-music',
    playlistName: 'Elevator Music',
    playlistOwner: 'Juan Pablo Borg...',
    coverImage: { uri: 'https://raw.githubusercontent.com/GymLeaderC/cprg-303-ax02/main/assets/images/elevatorMusic.png' },
  },
  {
    id: 'dj',
    playlistName: 'DJ',
    description: 'Tap to start',
    coverImage: { uri: 'https://raw.githubusercontent.com/GymLeaderC/cprg-303-ax02/main/assets/images/DjBeta.jpg' },
  },
  {
    id: '2025-rewind',
    playlistName: '2025 Rewind',
    playlistOwner: 'aar.reid',
    coverImage: { uri: 'https://raw.githubusercontent.com/GymLeaderC/cprg-303-ax02/main/assets/images/top.png' },
  },
  {
    id: 'you-like-jazz',
    playlistName: 'You Like Jazz?',
    playlistOwner: 'aar.reid',
    coverImage: { uri: 'https://raw.githubusercontent.com/GymLeaderC/cprg-303-ax02/main/assets/images/modernJazz.png' },
  },
  {
    id: 'dance-party',
    playlistName: 'Dance Party',
    playlistOwner: 'aar.reid',
    coverImage: { uri: 'https://raw.githubusercontent.com/GymLeaderC/cprg-303-ax02/main/assets/images/danceparty.png' },
  },
  {
    id: 'daylist',
    playlistName: 'Daylist',
    playlistOwner: 'Maria Rivera',
    coverImage: { uri: 'https://raw.githubusercontent.com/GymLeaderC/cprg-303-ax02/main/assets/images/daylist.png' },
  },
  {
    id: 'alt-pop-mix',
    playlistName: 'Alt Pop Mix',
    playlistOwner: 'aar.reid',
    coverImage: { uri: 'https://raw.githubusercontent.com/GymLeaderC/cprg-303-ax02/main/assets/images/popmix.png' },
  },
];
