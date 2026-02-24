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

export const startBrowsingData: CategoryCardData[] = [
  {
    id: "1", title: "Music", backgroundColor: "#DC148C", size: "small",
    image: { uri: "https://raw.githubusercontent.com/GymLeaderC/cprg-303-ax02/main/assets/images/search-images/start-music.jpg" }
  },
  {
    id: "2", title: "Podcasts", backgroundColor: "#006450", size: "small",
    image: { uri: "https://raw.githubusercontent.com/GymLeaderC/cprg-303-ax02/main/assets/images/search-images/start-podcasts.jpg" }
  },
  {
    id: "3", title: "Audiobooks", backgroundColor: "#503750", size: "small",
    image: { uri: "https://raw.githubusercontent.com/GymLeaderC/cprg-303-ax02/main/assets/images/search-images/start-audiobook.jpg" }
  },
  {
    id: "4", title: "Live Events", backgroundColor: "#8C3B7D", size: "small",
    image: { uri: "https://raw.githubusercontent.com/GymLeaderC/cprg-303-ax02/main/assets/images/search-images/start-live.jpg" }
  }
]

export const browseAllData: CategoryCardData[] = [
  {
    id: "1", title: "Made For You", backgroundColor: "#8D67AB", size: "large",
    image: { uri: "https://raw.githubusercontent.com/GymLeaderC/cprg-303-ax02/main/assets/images/search-images/browse-mfy.jpg" }
  },
  {
    id: "2", title: "Upcoming Releases", backgroundColor: "#056952", size: "large",
    image: { uri: "https://raw.githubusercontent.com/GymLeaderC/cprg-303-ax02/main/assets/images/search-images/browse-upcoming.jpg" }
  },
  {
    id: "3", title: "New Releases", backgroundColor: "#E8115B", size: "large",
    image: { uri: "https://raw.githubusercontent.com/GymLeaderC/cprg-303-ax02/main/assets/images/search-images/browse-new.jpg" }
  },
  {
    id: "4", title: "Hip-Hop", backgroundColor: "#637A91", size: "large",
    image: { uri: "https://raw.githubusercontent.com/GymLeaderC/cprg-303-ax02/main/assets/images/search-images/browse-hiphop.jpg" }
  },
  {
    id: "5", title: "Pop", backgroundColor: "#cbd14f", size: "large",
    image: { uri: "https://raw.githubusercontent.com/GymLeaderC/cprg-303-ax02/main/assets/images/search-images/browse-pop.jpg" }
  },
  {
    id: "6", title: "Country", backgroundColor: "#E64A19", size: "large",
    image: { uri: "https://raw.githubusercontent.com/GymLeaderC/cprg-303-ax02/main/assets/images/search-images/browse-country.jpg" }
  },
  {
    id: "7", title: "Rock", backgroundColor: "#4A40C4", size: "large",
    image: { uri: "https://raw.githubusercontent.com/GymLeaderC/cprg-303-ax02/main/assets/images/search-images/browse-rock.jpg" }
  },
  {
    id: "8", title: "Glow", backgroundColor: "#1B3254", size: "large",
    image: { uri: "https://raw.githubusercontent.com/GymLeaderC/cprg-303-ax02/main/assets/images/search-images/browse-glow.jpg" }
  },
  {
    id: "9", title: "Charts", backgroundColor: "#477B6C", size: "large",
    image: { uri: "https://raw.githubusercontent.com/GymLeaderC/cprg-303-ax02/main/assets/images/search-images/browse-charts.jpg" }
  },
  {
    id: "10", title: "Podcast Charts", backgroundColor: "#7D5335", size: "large",
    image: { uri: "https://raw.githubusercontent.com/GymLeaderC/cprg-303-ax02/main/assets/images/search-images/browse-podcast.jpg" }
  }
]

export const discoverData: DiscoverCardData[] = [
  {
    id: "1", title: "Music for you",
    image: { uri: "https://raw.githubusercontent.com/GymLeaderC/cprg-303-ax02/main/assets/images/search-images/discover-mfy.jpg" }
  },
  {
    id: "2", title: "#rap god",
    image: { uri: "https://raw.githubusercontent.com/GymLeaderC/cprg-303-ax02/main/assets/images/search-images/discover-rap.jpg" }
  },
  {
    id: "3", title: "#granola vibes",
    image: { uri: "https://raw.githubusercontent.com/GymLeaderC/cprg-303-ax02/main/assets/images/search-images/discover-granola.jpg" }
  },
  {
    id: "4", title: "#retro soul",
    image: { uri: "https://raw.githubusercontent.com/GymLeaderC/cprg-303-ax02/main/assets/images/search-images/discover-retro.jpg" }
  },
  {
    id: "5", title: "#aloha daze",
    image: { uri: "https://raw.githubusercontent.com/GymLeaderC/cprg-303-ax02/main/assets/images/search-images/discover-surf.jpg" }
  },
  {
    id: "6", title: "#rock out",
    image: { uri: "https://raw.githubusercontent.com/GymLeaderC/cprg-303-ax02/main/assets/images/search-images/discover-rock.jpg" }
  },
  {
    id: "7", title: "#disco fever",
    image: { uri: "https://raw.githubusercontent.com/GymLeaderC/cprg-303-ax02/main/assets/images/search-images/discover-disco.jpg" }
  },
  {
    id: "8", title: "#viscous jazz",
    image: { uri: "https://raw.githubusercontent.com/GymLeaderC/cprg-303-ax02/main/assets/images/search-images/discover-jazz.jpg" }
  },
  {
    id: "9", title: "#chill dinner",
    image: { uri: "https://raw.githubusercontent.com/GymLeaderC/cprg-303-ax02/main/assets/images/search-images/discover-dinner.jpg" }
  }
]