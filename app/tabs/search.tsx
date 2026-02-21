/**
 *  @author Group 9 - Aaron Reid, Joshua Couto, Kaley Wood
 *  Southern Alberta Institute of Technology: CPRG-303-C
 *  Assignment 2: Advanced Multi-Screen Mobile App w/ Collaborative Navigation
 *  Created: 02.19.2026
 */

import CategoryCard from "../components/search-screen/CategoryCard"

// TO-DO: Download Assets and Change All Image References
const startBrowsingData: CategoryCardData[] = [
  {title: "Music", backgroundColor: "#DC148C", size: "small", image: require("../assets/hiphop.png")},       
  {title: "Podcasts", backgroundColor: "#006450", size: "small", image: require("../assets/hiphop.png")},       
  {title: "Audiobooks", backgroundColor: "#503750", size: "small", image: require("../assets/pop.png")},              
  {title: "Live Events", backgroundColor: "#8C3B7D", size: "small", image: require("../assets/hiphop.png")}
]

// TO-DO: Download Assets and Change All Image References
const browseAllData: CategoryCard[] = [
  {title: "Made For You", backgroundColor: "#8D67AB", size: "large", image: require("../assets/pop.png")},              
  {title: "Upcoming Releases", backgroundColor: "#056952", size: "large", image: require("../assets/hiphop.png")},       
  {title: "New Releases", backgroundColor: "#E8115B", size: "large", image: require("../assets/pop.png")},              
  {title: "Hip-Hop", backgroundColor: "#637A91", size: "large", image: require("../assets/hiphop.png")},       
  {title: "Pop", backgroundColor: "#8EACCD", size: "large", image: require("../assets/pop.png")},             
  {title: "Country", backgroundColor: "#E64A19", size: "large", image: require("../assets/hiphop.png")},       
  {title: "Glow", backgroundColor: "#4A40C4", size: "large", image: require("../assets/pop.png")},              
  {title: "Black History Month 2026", backgroundColor: "#7D5335", size: "large", image: require("../assets/pop.png")},
  {title: "Charts", backgroundColor: "#477B6C", size: "large", image: require("../assets/pop.png")},
  {title: "Podcast Charts", backgroundColor: "#1B3254", size: "large", image: require("../assets/pop.png")}
]