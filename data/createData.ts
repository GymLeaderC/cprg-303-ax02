export type IconLibrary = 'Ionicons' | 'MaterialCommunityIcons';

export type CreateOption = {
  id: string;
  title: string;
  subtitle: string;
  showBeta: boolean;
  iconName: string;
  iconLibrary: IconLibrary;
};

export const CREATE_OPTIONS: CreateOption[] = [
  {
    id: 'playlist',
    title: 'Playlist',
    subtitle: 'Create a playlist with songs or episodes',
    showBeta: false,
    iconName: 'musical-notes',
    iconLibrary: 'Ionicons',
  },
  {
    id: 'collaborative',
    title: 'Collaborative playlist',
    subtitle: 'Create a playlist together with friends',
    showBeta: false,
    iconName: 'people',
    iconLibrary: 'Ionicons',
  },
  {
    id: 'mixed',
    title: 'Mixed Playlist',
    subtitle: 'Mix songs with smooth transitions',
    showBeta: true,
    iconName: 'options',
    iconLibrary: 'Ionicons',
  },
  {
    id: 'blend',
    title: 'Blend',
    subtitle: "Combine your friends' tastes into a playlist",
    showBeta: false,
    iconName: 'circle-double',
    iconLibrary: 'MaterialCommunityIcons',
  },
  {
    id: 'ai-playlist',
    title: 'AI Playlist',
    subtitle: 'Turn your ideas into playlists with AI',
    showBeta: false,
    iconName: 'sparkles',
    iconLibrary: 'Ionicons',
  },
  {
    id: 'prompted',
    title: 'Prompted Playlist',
    subtitle: 'Generate a playlist that curates and updates',
    showBeta: true,
    iconName: 'code-slash',
    iconLibrary: 'Ionicons',
  },
  {
    id: 'jam',
    title: 'Jam',
    subtitle: 'Listen together from anywhere',
    showBeta: false,
    iconName: 'people-circle-outline',
    iconLibrary: 'Ionicons',
  },
];
