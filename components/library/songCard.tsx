import { Pressable, StyleSheet, Text } from "react-native";

type Props = {
  title: string;
  onPress: () => void;
};

export default function SongCard({ title, onPress }: Props) {
  return (
    <Pressable style={styles.card} onPress={onPress}>
      <Text style={styles.title}>🎵 {title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#1f1f1f",
    padding: 18,
    borderRadius: 12,
    marginBottom: 15,
  },

  title: {
    color: "#fff",
    fontSize: 18,
  },
});