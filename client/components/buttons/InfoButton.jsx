import { Pressable, Text, StyleSheet, View, Image } from "react-native";
import { useTheme } from "../../context/ThemeContext";

const InfoButton = ({ title, onPress, style, src }) => {
  const theme = useTheme();

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        { transform: [{ scale: pressed ? 0.97 : 1 }] },
        style,
      ]}
    >
      <View style={styles.button}>
        <Image source={src} style={styles.icon} />
        <Text style={[styles.text, { color: theme.colors.text }]}>{title}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: "column",
    gap: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    width: 34,
    height: 34,
  },
  text: {
    fontSize: 16,
    fontWeight: "600",
  },
});

export default InfoButton;
