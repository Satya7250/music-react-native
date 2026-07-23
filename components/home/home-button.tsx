import { Pressable, StyleSheet, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

type GradientButtonProps = {
  title: string;
  onPress: () => void;
};

export default function GradientButton({
  title,
  onPress,
}: GradientButtonProps) {
  return (
    <Pressable onPress={onPress}>
      <LinearGradient
        colors={["#a27e65", "#000000"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.button}
      >
        <Text style={styles.buttonText}>{title}</Text>
      </LinearGradient>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 27,
    paddingVertical: 13,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },

  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});