import { useState } from "react";
import { View, StyleSheet } from "react-native";
import { useTheme } from "../context/ThemeContext";
import UserInput from "../components/inputs/UserInput";
import PasswordInput from "../components/inputs/PasswordInput";
import ThemedButton from "../components/buttons/ThemedButton";

function Index() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const theme = useTheme();

  const handleSubmit = () => {
    console.log(`Username is: ${username}, the password is: ${password}`);
  };

  return (
    <View
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      <UserInput value={username} onChangeText={setUsername} style={theme} />
      <PasswordInput
        value={password}
        onChangeText={setPassword}
        theme={theme}
      />
      <ThemedButton title="Log-In" onPress={handleSubmit} style={theme} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
});

export default Index;
