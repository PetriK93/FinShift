import React from "react";
import { Pressable, Text, StyleSheet, View } from "react-native";
import { useTheme } from "../../context/ThemeContext";

const ThemedButton = ({ title, onPress, style }) => {
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
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
    paddingVertical: 12,
    marginTop: 8,
    paddingHorizontal: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 16,
    fontWeight: "600",
  },
});

export default ThemedButton;
