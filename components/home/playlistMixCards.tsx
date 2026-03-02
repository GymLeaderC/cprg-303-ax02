import { Image, ImageSourcePropType, StyleSheet, Text, View } from 'react-native';

type Props = {
  title: string;
  artists: string;
  imageSource: ImageSourcePropType;
};

export default function PlaylistMixCards({ title, artists, imageSource }: Props) {
  return (
    <View style={styles.card}>
      <Image source={imageSource} style={styles.cover} />
      <Text style={styles.title} numberOfLines={1}>
        {title}
      </Text>
      <Text style={styles.artists} numberOfLines={2}>
        {artists}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 156,
    marginRight: 12,
  },
  cover: {
    width: 156,
    height: 156,
    borderRadius: 8,
    marginBottom: 8,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '700',
    marginBottom: 4,
  },
  artists: {
    color: '#B3B3B3',
    fontSize: 12,
    lineHeight: 16,
  },
});
