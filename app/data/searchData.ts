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
  image: any;
  size: "small" | "large";
}

export interface DiscoverCardData {
  id: string;
  title: string;
  image: any;
}

// TO-DO: Download Assets and Change All Image References
export const startBrowsingData: CategoryCardData[] = [
  { id: "1", title: "Music", backgroundColor: "#DC148C", size: "small", image: require("../assets/hiphop.png") },
  { id: "2", title: "Podcasts", backgroundColor: "#006450", size: "small", image: require("../assets/hiphop.png") },
  { id: "3", title: "Audiobooks", backgroundColor: "#503750", size: "small", image: require("../assets/pop.png") },
  { id: "4", title: "Live Events", backgroundColor: "#8C3B7D", size: "small", image: require("../assets/hiphop.png") }
]

// TO-DO: Download Assets and Change All Image References
export const browseAllData: CategoryCardData[] = [
  { id: "5", title: "Made For You", backgroundColor: "#8D67AB", size: "large", image: require("../assets/pop.png") },
  { id: "6", title: "Upcoming Releases", backgroundColor: "#056952", size: "large", image: require("../assets/hiphop.png") },
  { id: "7", title: "New Releases", backgroundColor: "#E8115B", size: "large", image: require("../assets/pop.png") },
  { id: "8", title: "Hip-Hop", backgroundColor: "#637A91", size: "large", image: require("../assets/hiphop.png") },
  { id: "9", title: "Pop", backgroundColor: "#8EACCD", size: "large", image: require("../assets/pop.png") },
  { id: "10", title: "Country", backgroundColor: "#E64A19", size: "large", image: require("../assets/hiphop.png") },
  { id: "11", title: "Glow", backgroundColor: "#4A40C4", size: "large", image: require("../assets/pop.png") },
  { id: "12", title: "Black History Month 2026", backgroundColor: "#7D5335", size: "large", image: require("../assets/pop.png") },
  { id: "13", title: "Charts", backgroundColor: "#477B6C", size: "large", image: require("../assets/pop.png") },
  { id: "14", title: "Podcast Charts", backgroundColor: "#1B3254", size: "large", image: require("../assets/pop.png") }
]

// TO-DO: Download Assets and Change All Image References
export const discoverData: DiscoverCardData[] = [
  { id: "1", title: "Music for you", image: require("../assets/pop.png") },
  { id: "2", title: "#chill dinner", image: require("../assets/pop.png") },
  { id: "3", title: "#granola vibes", image: require("../assets/pop.png") },
  { id: "4", title: "#retro soul", image: require("../assets/pop.png") },
  { id: "5", title: "#surf crush", image: require("../assets/pop.png") },
  { id: "6", title: "#make out", image: require("../assets/pop.png") },
  { id: "7", title: "#power ballad", image: require("../assets/pop.png") },
  { id: "8", title: "#viscous jazz", image: require("../assets/pop.png") },
  { id: "9", title: "clean rap", image: require("../assets/pop.png") }
]