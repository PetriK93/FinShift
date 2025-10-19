import { Pressable, Text, StyleSheet, View, Image } from "react-native";
import { useTheme } from "../../context/ThemeContext";

const DashboardButton = ({ title, onPress, style, src }) => {
  const theme = useTheme();

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        { transform: [{ scale: pressed ? 0.97 : 1 }] },
        style,
      ]}
    >
      <View
        style={[
          styles.button,
          {
            backgroundColor: theme.colors.primary,
          },
        ]}
      >
        <Text style={[styles.text, { color: theme.colors.text }]}>{title}</Text>
        <Image source={src} style={styles.icon} />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    borderRadius: 5,
    paddingVertical: 12,
    marginTop: 8,
    paddingHorizontal: 24,
    alignItems: "center",
    justifyContent: "space-between",
  },
  text: {
    fontSize: 16,
    fontWeight: "600",
  },
  icon: {
    width: 26,
    height: 26,
  },
});

export default DashboardButton;
