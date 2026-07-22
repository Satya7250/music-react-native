import { Text, View, StyleSheet } from "react-native";
import HomeBackground from "../components/home/home-header";

export default function HomeScreen() {
  return (
    <HomeBackground>
      <View style={styles.container}>
        <Text style={styles.title}>Mussic...</Text>
      </View>
    </HomeBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "white",
    fontSize: 32,
    fontWeight: "bold",
  },
});