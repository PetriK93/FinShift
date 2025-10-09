import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { useTheme } from "../../context/ThemeContext";

const UserInput = ({ value, onChangeText, placeholder = "Enter username" }) => {
  const theme = useTheme();

  return (
    <View style={[styles.container]}>
      <Text style={[styles.label, { color: theme.colors.text }]}>Username</Text>
      <TextInput
        style={[
          styles.input,
          {
            backgroundColor: theme.colors.inputBackground,
            color: theme.colors.text,
            borderColor: theme.colors.border,
          },
        ]}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={theme.colors.subtext}
        autoCapitalize="none"
        autoCorrect={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
  },
  label: {
    fontSize: 16,
    marginBottom: 6,
    alignSelf: "center",
  },
  input: {
    borderWidth: 2,
    borderRadius: 6,
    padding: 10,
    fontSize: 16,
  },
});

export default UserInput;
