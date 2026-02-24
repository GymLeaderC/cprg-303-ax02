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
    id: "1", title: "This is The Teskey Brothers", type: "Playlist", createdBy: "Spotify",
    image: { uri: "https://raw.githubusercontent.com/GymLeaderC/cprg-303-ax02/main/assets/images/search-images/browse-mfy.jpg" }
  },
  {
    id: "2", title: "This is GoldFord", type: "Playlist", createdBy: "Spotify",
    image: { uri: "https://raw.githubusercontent.com/GymLeaderC/cprg-303-ax02/main/assets/images/search-images/browse-mfy.jpg" }
  },
  {
    id: "3", title: "The Teskey Brothers Radio", type: "Playlist", createdBy: "Spotify",
    image: { uri: "https://raw.githubusercontent.com/GymLeaderC/cprg-303-ax02/main/assets/images/search-images/browse-mfy.jpg" }
  },
  {
    id: "4", title: "Teskey Brothers", type: "Artist",
    image: { uri: "https://raw.githubusercontent.com/GymLeaderC/cprg-303-ax02/main/assets/images/search-images/browse-mfy.jpg" }
  },
  {
    id: "5", title: "DeBÍ TiRAR MáS FOToS", type: "Album", createdBy: "Bad Bunny", explicit: true,
    image: { uri: "https://raw.githubusercontent.com/GymLeaderC/cprg-303-ax02/main/assets/images/search-images/browse-mfy.jpg" }
  },
  {
    id: "6", title: "DtMF", type: "Song", createdBy: "Bad Bunny", explicit: true,
    image: { uri: "https://raw.githubusercontent.com/GymLeaderC/cprg-303-ax02/main/assets/images/search-images/browse-mfy.jpg" }
  },
  {
    id: "7", title: "The Fall-Off", type: "Album", createdBy: "J.Cole", explicit: true,
    image: { uri: "https://raw.githubusercontent.com/GymLeaderC/cprg-303-ax02/main/assets/images/search-images/browse-mfy.jpg" }
  },
  {
    id: "8", title: "90s Chill R&B Mix", type: "Playlist", createdBy: "Spotify",
    image: { uri: "https://raw.githubusercontent.com/GymLeaderC/cprg-303-ax02/main/assets/images/search-images/browse-mfy.jpg" }
  },
  {
    id: "9", title: "Brandy", type: "Artist",
    image: { uri: "https://raw.githubusercontent.com/GymLeaderC/cprg-303-ax02/main/assets/images/search-images/browse-mfy.jpg" }
  },
  {
    id: "10", title: "Under The Moon", type: "Song", createdBy: "Ari Lennox", explicit: true,
    image: { uri: "https://raw.githubusercontent.com/GymLeaderC/cprg-303-ax02/main/assets/images/search-images/browse-mfy.jpg" }
  },
]