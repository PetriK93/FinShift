import { useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  Platform,
  Text,
  Alert,
  Switch,
} from "react-native";
import logo from "../assets/images/adaptive-icon.png";
import { useTheme } from "../context/ThemeContext";
import UsernameInput from "../components/inputs/UsernameInput";
import PasswordInput from "../components/inputs/PasswordInput";
import ThemedButton from "../components/buttons/ThemedButton";

function Index() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const theme = useTheme();

  const handleSubmit = async () => {
    if (!username || !password) {
      if (Platform.OS === "web") {
        window.alert("Please fill in both fields.");
      } else {
        Alert.alert("Error", "Please fill in both fields.", [{ text: "OK" }]);
      }
      return;
    }
  };

  return (
    <View
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      <Image source={logo} style={styles.logo} />
      <View>
        <UsernameInput
          value={username}
          onChangeText={setUsername}
          theme={theme}
          accessibilityLabel="Username input"
          selectable={true}
        />
        <PasswordInput
          value={password}
          onChangeText={setPassword}
          theme={theme}
          accessibilityLabel="Password input"
        />
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: "10px",
            marginBottom: "4px",
          }}
        >
          <Switch
            value={rememberMe}
            onValueChange={setRememberMe}
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={rememberMe ? "#f5dd4b" : "#f4f3f4"}
          />
          <Text style={{ color: theme.colors.text }}>Remember Me</Text>
        </View>
      </View>
      <ThemedButton title="Log-In" onPress={handleSubmit} style={theme} />
      <Text style={[styles.forgotPassword, { color: theme.colors.primary }]}>
        Forgot your password?
      </Text>
      <Text style={[styles.signUpText, { color: theme.colors.primary }]}>
        Don’t have an account? Sign me up.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    paddingTop: "10%",
    alignItems: "center",
    width: "100%",
  },
  logo: {
    width: 250,
    height: 250,
    marginBottom: 20,
    borderRadius: 20,
    objectFit: "cover",
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
