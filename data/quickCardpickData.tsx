import { ImageSourcePropType } from "react-native";
export interface quickCardPick{
    id: string;
    title: string
    image: ImageSourcePropType;
}

export const quickCardPickData: quickCardPick[] = [
    {id:"1", title: "Liked Songs", image:require('"https://misc.scdn.co/liked-songs/liked-songs-640.png" },')},
    {id:"2", title:"Certified Lover Boy", image:require('https://raw.githubusercontent.com/GymLeaderC/cprg-303-ax02/refs/heads/branch-aaron/assets/images/clb.jpeg')},
    {id:"3", title:"Deorro", image:require('https://raw.githubusercontent.com/GymLeaderC/cprg-303-ax02/refs/heads/branch-aaron/assets/images/deorro.jpeg')},
    {id:"4", title:"Drake", image:require('https://raw.githubusercontent.com/GymLeaderC/cprg-303-ax02/refs/heads/branch-aaron/assets/images/Drake.jpeg')},
    {id:"5", title:"DeBÍ TiRAR MàS FOTos", image:require('https://raw.githubusercontent.com/GymLeaderC/cprg-303-ax02/refs/heads/branch-aaron/assets/images/dtmf.jpeg')},
    {id:"6", title:"Milo Mae", image:require('https://raw.githubusercontent.com/GymLeaderC/cprg-303-ax02/refs/heads/branch-aaron/assets/images/milomae.jpeg')},
    {id:"7", title:"Lagaan", image:require('https://raw.githubusercontent.com/GymLeaderC/cprg-303-ax02/refs/heads/branch-aaron/assets/images/Lagaan.jpeg')},
    {id:"8", title:"Ay Amor Radio", image:require('../assets')},
]