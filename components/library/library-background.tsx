import { StyleSheet, View, Dimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { BlurView } from "expo-blur";

const { width, height } = Dimensions.get("window");

type LibraryBackgroundProps = {
  children?: React.ReactNode;
};

export default function LibraryBackground({
  children,
}: LibraryBackgroundProps) {
  return (
    <View style={styles.container}>
      {/* Base Gradient - deep night tones */}
      <LinearGradient
        colors={["#0A0118", "#0D0B1F", "#000000"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={StyleSheet.absoluteFill}
      />

      {/* Glowing Blobs */}
      <View style={[styles.blob, styles.blob1]} />
      <View style={[styles.blob, styles.blob2]} />
      <View style={[styles.blob, styles.blob3]} />

      {/* Blur pass to melt the blobs into soft glows */}
      <BlurView intensity={90} tint="dark" style={StyleSheet.absoluteFill} />

      {/* Subtle grain / sheen overlay */}
      <LinearGradient
        colors={[
          "rgba(255,255,255,0.05)",
          "transparent",
          "rgba(0,0,0,0.35)",
        ]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={StyleSheet.absoluteFill}
      />

      {/* Vignette so foreground content stays readable */}
      <LinearGradient
        colors={["transparent", "rgba(0,0,0,0.55)"]}
        start={{ x: 0.5, y: 0.3 }}
        end={{ x: 0.5, y: 1 }}
        style={StyleSheet.absoluteFill}
      />

      <View style={{ flex: 1 }}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    overflow: "hidden",
  },

  blob: {
    position: "absolute",
    borderRadius: 999,
  },

  blob1: {
    width: width * 0.9,
    height: width * 0.9,
    backgroundColor: "#7C3AED", // violet
    opacity: 0.55,
    top: -width * 0.35,
    left: -width * 0.25,
  },

  blob2: {
    width: width * 0.75,
    height: width * 0.75,
    backgroundColor: "#EC4899", // pink/magenta
    opacity: 0.35,
    top: height * 0.35,
    right: -width * 0.3,
  },

  blob3: {
    width: width * 0.8,
    height: width * 0.8,
    backgroundColor: "#06B6D4", // cyan
    opacity: 0.3,
    bottom: -width * 0.3,
    left: width * 0.15,
  },
});