import { ImageSourcePropType } from 'react-native';

export interface PlaylistCard {
  id: string;
  title: string;
  artists: string;
  image: ImageSourcePropType;
}

export interface HomeCategorySection {
  id: string;
  heading: string;
  cards: PlaylistCard[];
}

export const homeSectionsData: HomeCategorySection[] = [
  {
    id: 'todays-biggest-hits',
    heading: "Today's biggest hits",
    cards: [
      {
        id: 'latin-hit-mix',
        title: 'Latin Hit Mix',
        artists: 'Bad Bunny, Fuerza Regida, Junior H, Tito Double P, Beele',
        image: require('../assets/images/search-images/browse-upcoming.jpg'),
      },
      {
        id: 'viva-latino',
        title: 'Viva Latino',
        artists: 'Bad Bunny, Junior H, Omar Courtz, Beele, Natanael Cano',
        image: require('../assets/images/search-images/browse-mfy.jpg'),
      },
      {
        id: 'reggaeton-ahora',
        title: 'Reggaeton Ahora',
        artists: 'Omar Courtz, Tainy, Plan B, Jhayco, Rauw Alejandro',
        image: require('../assets/images/search-images/browse-hiphop.jpg'),
      },
    ],
  },
  {
    id: 'latin-music-dj-kit',
    heading: 'Latin Music DJ Kit',
    cards: [
      {
        id: 'casa-del-perreo',
        title: 'La Casa del Perreo',
        artists: 'Bad Bunny, Rauw Alejandro, KAROL G, JHAYCO',
        image: require('../assets/images/search-images/recent-rap.jpg'),
      },
      {
        id: 'reggaeton-viejito',
        title: 'Reggaeton Viejito',
        artists: 'Arcangel, Don Omar, Zion & Lennox, Hector El Father',
        image: require('../assets/images/search-images/browse-rock.jpg'),
      },
      {
        id: 'old-school-reggaeton',
        title: 'Old School Reggaeton',
        artists: 'Daddy Yankee, Don Omar, Wisin & Yandel, Plan B',
        image: require('../assets/images/search-images/browse-charts.jpg'),
      },
    ],
  },
];
