/**
 *  @author Group 9 - Aaron Reid, Joshua Couto, Kaley Wood
 *  Southern Alberta Institute of Technology: CPRG-303-C
 *  Assignment 2: Advanced Multi-Screen Mobile App w/ Collaborative Navigation
 *  Created: 02.21.2026
 */

export interface CategoryCardData {
  id: string;
  title: string;
  backgroundColor: string;
  image: { uri: string };
  size: "small" | "large";
}

export interface DiscoverCardData {
  id: string;
  title: string;
  image: { uri: string };
}

// TO-DO: Download Assets
export const startBrowsingData: CategoryCardData[] = [
  { id: "1", title: "Music", backgroundColor: "#DC148C", size: "small", 
    image: { uri: "https://raw.githubusercontent.com/GymLeaderC/YOUR_REPO/main/images/music.png" } 
  },
  { id: "2", title: "Podcasts", backgroundColor: "#006450", size: "small", image: require("../assets/hiphop.png") },
  { id: "3", title: "Audiobooks", backgroundColor: "#503750", size: "small", image: require("../assets/pop.png") },
  { id: "4", title: "Live Events", backgroundColor: "#8C3B7D", size: "small", image: require("../assets/hiphop.png") }
]

// TO-DO: Download Assets
export const browseAllData: CategoryCardData[] = [
  { id: "1", title: "Made For You", backgroundColor: "#8D67AB", size: "large", image: require("../assets/pop.png") },
  { id: "2", title: "Upcoming Releases", backgroundColor: "#056952", size: "large", image: require("../assets/hiphop.png") },
  { id: "3", title: "New Releases", backgroundColor: "#E8115B", size: "large", image: require("../assets/pop.png") },
  { id: "4", title: "Hip-Hop", backgroundColor: "#637A91", size: "large", image: require("../assets/hiphop.png") },
  { id: "5", title: "Pop", backgroundColor: "#8EACCD", size: "large", image: require("../assets/pop.png") },
  { id: "6", title: "Country", backgroundColor: "#E64A19", size: "large", image: require("../assets/hiphop.png") },
  { id: "7", title: "Rock", backgroundColor: "#4A40C4", size: "large", image: require("../assets/pop.png") },
  { id: "8", title: "Glow", backgroundColor: "#7D5335", size: "large", image: require("../assets/pop.png") },
  { id: "9", title: "Charts", backgroundColor: "#477B6C", size: "large", image: require("../assets/pop.png") },
  { id: "10", title: "Podcast Charts", backgroundColor: "#1B3254", size: "large", image: require("../assets/pop.png") }
]

// TO-DO: Download Assets
export const discoverData: DiscoverCardData[] = [
  { id: "1", title: "Music for you", image: require("../assets/pop.png") },
  { id: "2", title: "#chill dinner", image: require("../assets/pop.png") },
  { id: "3", title: "#granola vibes", image: require("../assets/pop.png") },
  { id: "4", title: "#retro soul", image: require("../assets/pop.png") },
  { id: "5", title: "#surf crush", image: require("../assets/pop.png") },
  { id: "6", title: "#rock out", image: require("../assets/pop.png") },
  { id: "7", title: "#disco", image: require("../assets/pop.png") },
  { id: "8", title: "#viscous jazz", image: require("../assets/pop.png") },
  { id: "9", title: "clean rap", image: require("../assets/pop.png") }
]