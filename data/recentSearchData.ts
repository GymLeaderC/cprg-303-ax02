/**
 *  @author Group 9 - Aaron Reid, Joshua Couto, Kaley Wood
 *  Southern Alberta Institute of Technology: CPRG-303-C
 *  Assignment 2: Advanced Multi-Screen Mobile App w/ Collaborative Navigation
 *  Created: 02.24.2026
 */

export interface RecentSearchData {
  id: string;
  title: string;
  image: { uri: string };
  type: "Album" | "Playlist" | "Artist" | "Song";
  createdBy?: string;
  explicit?: boolean;
}

export const recentSearches: RecentSearchData[] = [
  {
    id: "1", title: "This is Guitar Girl", type: "Playlist", createdBy: "Spotify",
    image: { uri: "https://raw.githubusercontent.com/GymLeaderC/cprg-303-ax02/main/assets/images/search-images/recent-guitargirl.jpg" }
  },
  {
    id: "2", title: "This is Guitar Guy", type: "Playlist", createdBy: "Spotify",
    image: { uri: "https://raw.githubusercontent.com/GymLeaderC/cprg-303-ax02/main/assets/images/search-images/recent-guitarguy.jpg" }
  },
  {
    id: "3", title: "The Horse Brothers Radio", type: "Playlist", createdBy: "Spotify",
    image: { uri: "https://raw.githubusercontent.com/GymLeaderC/cprg-303-ax02/main/assets/images/search-images/recent-horses.jpg" }
  },
  {
    id: "4", title: "Dirt n Roots", type: "Artist",
    image: { uri: "https://raw.githubusercontent.com/GymLeaderC/cprg-303-ax02/main/assets/images/search-images/recent-folk.jpg" }
  },
  {
    id: "5", title: "Tokyo Disco", type: "Album", createdBy: "Satoru Itawa", explicit: true,
    image: { uri: "https://raw.githubusercontent.com/GymLeaderC/cprg-303-ax02/main/assets/images/search-images/recent-mountain.jpg" }
  },
  {
    id: "6", title: "The Music Stand", type: "Song", createdBy: "Music Vendor", explicit: true,
    image: { uri: "https://raw.githubusercontent.com/GymLeaderC/cprg-303-ax02/main/assets/images/search-images/recent-musicstand.jpg" }
  },
  {
    id: "7", title: "The Mustache", type: "Album", createdBy: "Mustachio", explicit: true,
    image: { uri: "https://raw.githubusercontent.com/GymLeaderC/cprg-303-ax02/main/assets/images/search-images/recent-mustacheman.jpg" }
  },
  {
    id: "8", title: "90s Chill R&B Mix", type: "Playlist", createdBy: "Spotify",
    image: { uri: "https://raw.githubusercontent.com/GymLeaderC/cprg-303-ax02/main/assets/images/search-images/recent-rap.jpg" }
  },
  {
    id: "9", title: "RockStaar", type: "Artist",
    image: { uri: "https://raw.githubusercontent.com/GymLeaderC/cprg-303-ax02/main/assets/images/search-images/recent-rockstar.jpg" }
  },
  {
    id: "10", title: "The Set Up", type: "Song", createdBy: "Unknown Rocker", explicit: true,
    image: { uri: "https://raw.githubusercontent.com/GymLeaderC/cprg-303-ax02/main/assets/images/search-images/recent-musicequipment.jpg" }
  },
]