import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Pressable,
  Image,
} from "react-native";
import { useTheme } from "../../context/ThemeContext";

const PasswordInput = ({
  value,
  onChangeText,
  placeholder = "Enter a password",
}) => {
  const theme = useTheme();
  const [isFocused, setIsFocused] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  let visibility;

  if (isVisible) {
    visibility = require("../../assets/images/visible_image.png");
  } else {
    visibility = require("../../assets/images/hidden_image.png");
  }

  return (
    <View style={[styles.container]}>
      <Text style={[styles.label, { color: theme.colors.text }]}>Password</Text>

      <View style={styles.inputWrapper}>
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
            secureTextEntry={!isVisible}
            autoCorrect={false}
            spellCheck={false}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
        </View>
        <Pressable
          onPress={() => setIsVisible((prev) => !prev)}
          style={styles.visibilityIconWrapper}
        >
          <Image source={visibility} style={styles.visibilityIcon} />
        </Pressable>
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
  inputWrapper: {
    position: "relative",
    width: "100%",
  },
  visibilityIconWrapper: {
    position: "absolute",
    right: -35,
    top: "50%",
    transform: [{ translateY: -13 }],
  },
  visibilityIcon: {
    width: 26,
    height: 26,
  },
});

export default PasswordInput;
