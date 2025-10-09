import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { useTheme } from "../../context/ThemeContext";

const PasswordInput = ({
  value,
  onChangeText,
  placeholder = "Enter a password",
}) => {
  const theme = useTheme();

  return (
    <View style={[styles.container]}>
      <Text style={[styles.label, { color: theme.colors.text }]}>Password</Text>
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
        secureTextEntry={true}
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

export default PasswordInput;
