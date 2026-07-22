import { StyleSheet, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Svg, { Defs, Pattern, Rect, Line } from "react-native-svg";

type HomeBackgroundProps = {
  children?: React.ReactNode;
};

export default function HomeBackground({
  children,
}: HomeBackgroundProps) {
  return (
    <View style={styles.container}>
      {/* Base */}
      <View style={styles.base} />

      {/* Grid */}
      <Svg style={StyleSheet.absoluteFill}>
        <Defs>
          <Pattern
            id="grid"
            width="48"
            height="48"
            patternUnits="userSpaceOnUse"
          >
            <Line
              x1="48"
              y1="0"
              x2="48"
              y2="48"
              stroke="rgba(255,255,255,0.08)"
              strokeWidth="1"
            />
            <Line
              x1="0"
              y1="48"
              x2="48"
              y2="48"
              stroke="rgba(255,255,255,0.08)"
              strokeWidth="1"
            />
          </Pattern>
        </Defs>

        <Rect width="100%" height="100%" fill="url(#grid)" />
      </Svg>

      {/* Top Spotlight */}
      <LinearGradient
        colors={["rgba(99,102,241,0.25)", "transparent"]}
        style={styles.topGlow}
      />

      {/* Left Glow */}
      <View style={[styles.glow, styles.leftGlow]} />

      {/* Center Glow */}
      <View style={[styles.glow, styles.centerGlow]} />

      {/* Bottom Right Glow */}
      <View style={[styles.glow, styles.rightGlow]} />

      {/* Content */}
      <View style={{ flex: 1 }}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#09090B",
  },

  base: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "#09090B",
  },

  topGlow: {
    position: "absolute",
    top: 0,
    width: "100%",
    height: 320,
  },

  glow: {
    position: "absolute",
    borderRadius: 999,
    backgroundColor: "#6366F1",
    opacity: 0.18,
  },

  leftGlow: {
    width: 280,
    height: 280,
    top: 120,
    left: 20,
  },

  centerGlow: {
    width: 350,
    height: 350,
    top: 220,
    alignSelf: "center",
    opacity: 0.22,
  },

  rightGlow: {
    width: 250,
    height: 250,
    bottom: 120,
    right: 20,
    opacity: 0.12,
  },
});