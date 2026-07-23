import { Pressable, StyleSheet, Text, View } from "react-native";
import { router } from "expo-router";

export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🎧 Relax & Enjoy</Text>

      <Pressable
        style={styles.aboutButton}
        onPress={() => router.push("/about")}
      >
        <Text style={styles.aboutText}>ℹ</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  title: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "bold",
  },

  aboutButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#1E1E1E",
    justifyContent: "center",
    alignItems: "center",
  },

  aboutText: {
    fontSize: 20,
    color: "#fff",
  },
});