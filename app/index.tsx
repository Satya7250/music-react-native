import { View, Text, StyleSheet, Image } from "react-native";
import { router } from "expo-router";
import HomeBackground from "../components/home/home-header";
import GradientButton from "@/components/home/home-button";

export default function HomeScreen() {
  return (
    <HomeBackground>
      <View style={styles.container}>
        <Image
          source={require("../assets/images/mussic.png")}
          style={styles.logo}
        />

        <Text style={styles.title}>Music</Text>
        <Text style={styles.subtitle}>
          ✨ Music That Moves You.
        </Text>
        <Text>
          <GradientButton
            title="Get Started"
            onPress={() => router.push("/library")}
          />;
        </Text>
      </View>
    </HomeBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },

  title: {
    fontSize: 36,
    color: "#fff",
    fontWeight: "bold",
  },

  subtitle: {
    color: "#ddd",
    textAlign: "center",
    marginTop: 10,
    marginBottom: 40,
    fontSize: 16,
  },

});