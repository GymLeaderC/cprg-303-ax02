
import { Image, ImageSourcePropType, StyleSheet, Text, View } from 'react-native';

type Props = {
    title: string;
  imageSource: ImageSourcePropType;
};

export default function QuickPickCard({ title, imageSource }: Props) {
  return (
    <View style={styles.card}>
      <Image source={imageSource} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    card: {},
    image: { width: 56, height: 56, borderRadius: 6 },
    title: {},
});
