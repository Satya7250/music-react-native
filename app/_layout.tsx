import { useEffect } from "react";
import { Stack } from "expo-router";
import { Image } from "react-native";
import { setAudioModeAsync } from "expo-audio";

export default function RootLayout() {
  useEffect(() => {
    setAudioModeAsync({
      shouldPlayInBackground: true,
      playsInSilentMode: true,
    }).catch(console.error);
  }, []);

  return (
    <Stack screenOptions={{
      animation: "slide_from_right",
      animationDuration: 200,
    }}>

      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
          title: "Home",
        }}
      />

      <Stack.Screen
        name="library"
        options={{
          title: "Library",
          headerStyle: {
            backgroundColor: "#121212",
          },
          headerTintColor: "#fff",
          headerShadowVisible: false,

          headerRight: () => (
            <Image
              source={require("../assets/images/mussic.png")}
              style={{
                width: 35,
                height: 35,
                borderRadius: 18,
              }}
            />

          ),
        }}
      />

      <Stack.Screen
        name="about"
        options={{
          title: "About",
          headerStyle: {
            backgroundColor: "#121212",
          },
          headerTintColor: "#fff",
          headerShadowVisible: false,

          headerRight: () => (
            <Image
              source={require("../assets/images/mussic.png")}
              style={{
                width: 35,
                height: 35,
                borderRadius: 18,
              }}
            />
          ),
        }}
      />

      <Stack.Screen
        name="player"
        options={{
          title: "Now Playing",
          headerStyle: {
            backgroundColor: "#121212",
          },
          headerTintColor: "#fff",
          headerShadowVisible: false,
        }}
      />

    </Stack>
  );
}