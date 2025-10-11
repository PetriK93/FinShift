import { useState } from "react";
import { View, StyleSheet, Image, Platform, Text } from "react-native";
import { Asset } from "expo-asset";
import { useTheme } from "../context/ThemeContext";
import UserInput from "../components/inputs/UserInput";
import PasswordInput from "../components/inputs/PasswordInput";
import ThemedButton from "../components/buttons/ThemedButton";

const logoAsset = Asset.fromModule(
  require("../assets/images/adaptive-icon.png")
).uri;

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
      {Platform.OS === "web" ? (
        <img
          src={logoAsset} // ✅ this is now a real URL string
          alt="App Logo"
          style={{
            width: 250,
            height: 250,
            borderRadius: 20,
            marginBottom: 20,
            objectFit: "cover",
          }}
        />
      ) : (
        <Image
          source={require("../assets/images/adaptive-icon.png")}
          style={styles.logo}
        />
      )}

      <UserInput value={username} onChangeText={setUsername} style={theme} />
      <PasswordInput
        value={password}
        onChangeText={setPassword}
        theme={theme}
      />
      <ThemedButton title="Log-In" onPress={handleSubmit} style={theme} />
      <Text style={[styles.forgotPassword, { color: theme.colors.primary }]}>
        Forgot your password?
      </Text>
      <Text style={[styles.signUpText, { color: theme.colors.primary }]}>
        Don’t have an account? Sign up.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-center",
    alignItems: "center",
    width: "100%",
  },
  logo: {
    width: 250,
    height: 250,
    marginBottom: 20,
    borderRadius: 20,
  },
  forgotPassword: {
    fontSize: 16,
    fontStyle: "italic",
    marginTop: 20,
    marginBottom: 5,
    cursor: "pointer",
  },
  signUpText: {
    fontSize: 16,
    fontStyle: "italic",
    cursor: "pointer",
  },
});

export default Index;
