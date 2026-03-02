import { ImageSourcePropType } from "react-native";
export interface QuickCardPick {
  id: string;
  title: string;
  image: ImageSourcePropType;
}

export const quickCardPickData: QuickCardPick[] = [
  { id: "1", title: "Liked Songs", image: require("../assets/images/icon.png") },
  { id: "2", title: "Certified Lover Boy", image: require("../assets/images/clb.jpeg") },
  { id: "3", title: "Deorro", image: require("../assets/images/deorro.jpeg") },
  { id: "4", title: "Drake", image: require("../assets/images/Drake.jpeg") },
  { id: "5", title: "DeBI TiRAR MaS FOTos", image: require("../assets/images/dtmf.jpeg") },
  { id: "6", title: "Milo Mae", image: require("../assets/images/milomae.jpeg") },
  { id: "7", title: "Lagaan", image: require("../assets/images/Lagaan.jpeg") },
  { id: "8", title: "Ay Amor Radio", image: require("../assets/images/ayamor.jpeg") },
];
