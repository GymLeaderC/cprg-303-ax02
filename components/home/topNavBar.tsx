
import { StyleSheet, Text, View } from 'react-native';

type Props = {
  title: string;
};

export default function TopNavBar({ title }: Props) {
  return (
    <View style={styles.card}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 999,
    borderWidth: 1,
    borderColor: '#2f2f2f',
    backgroundColor: '#2a2a2a',
    paddingHorizontal: 18,
    paddingVertical: 10,
    alignSelf: 'flex-start',
  },
  text: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
});
