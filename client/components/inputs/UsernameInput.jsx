import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { useTheme } from "../../context/ThemeContext";

const UserInput = ({ value, onChangeText, placeholder = "Enter username" }) => {
  const theme = useTheme();
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={[styles.container]}>
      <Text style={[styles.label, { color: theme.colors.text }]}>Username</Text>
      <View
        style={{
          borderWidth: 3,
          borderRadius: 6,
          borderColor: isFocused
            ? theme.colors.borderFocused
            : theme.colors.border,
        }}
      >
        <TextInput
          style={[
            styles.input,
            {
              backgroundColor: theme.colors.inputBackground,
              color: theme.colors.text,
              borderColor: isFocused
                ? theme.colors.borderFocused
                : theme.colors.border,
            },
          ]}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor={theme.colors.subtext}
          autoCapitalize="none"
          autoCorrect={false}
          spellCheck={false}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
      </View>
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
    borderWidth: 0,
    outlineWidth: 0,
    borderRadius: 6,
    padding: 10,
    fontSize: 16,
  },
});

export default UserInput;
