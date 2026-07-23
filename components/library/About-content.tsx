import { StyleSheet, Text, View } from "react-native";

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About</Text>

      <Text style={styles.text}>
        This is a simple music player built with React Native.
      </Text>

      <Text style={styles.text}>Version: 1.0.0</Text>

      <Text style={styles.text}>Made by Satya Prakash ❤️</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#121212",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    color: "#ddd",
    marginBottom: 10,
    textAlign: "center",
  },
});