import { ImageSourcePropType } from "react-native";
export interface quickCardPick{
    id: string;
    title: string
    image: ImageSourcePropType;
}

export const quickCardPickData: quickCardPick[] = [
    {id:"1", title: "Liked Songs", image:require('"https://misc.scdn.co/liked-songs/liked-songs-640.png" },')},
    {id:"2", title:"Certified Lover Boy", image:require('../assets')},
    {id:"3", title:"Deorro", image:require('../assets')},
    {id:"4", title:"Drake", image:require('../assets')},
    {id:"5", title:"DeBÍ TiRAR MàS FOTos", image:require('../assets')},
    {id:"6", title:"Milo Mae", image:require('../assets')},
    {id:"7", title:"Lagaan", image:require('../assets')},
    {id:"8", title:"Ay Amor Radio", image:require('../assets')},
]