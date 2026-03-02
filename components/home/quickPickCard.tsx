import { Image, ImageSourcePropType, StyleSheet, Text, View } from 'react-native';

type Props = {
  title: string;
  imageSource: ImageSourcePropType;
};

export default function QuickPickCard({ title, imageSource }: Props) {
  return (
    <View style={styles.card}>
      <Image source={imageSource} style={styles.image} />
      <Text style={styles.title} numberOfLines={2}>
        {title}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '48%',
    backgroundColor: '#2a2a2a',
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 10,
  },
  image: {
    width: 56,
    height: 56,
  },
  title: {
    flex: 1,
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '700',
    paddingHorizontal: 12,
  },
});
