import lightTheme from "./lightTheme";
import darkTheme from "./darkTheme";
import { useColorScheme } from "react-native";

// Get the user's system theme (light or dark).
const colorScheme = useColorScheme();

const activeTheme = colorScheme === "dark" ? darkTheme : lightTheme;

export default activeTheme;
