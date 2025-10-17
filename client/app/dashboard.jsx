import { Text, View, StyleSheet } from "react-native";

function Dashboard() {
  return (
    <View style={styles.container}>
      <Text>This is the dashboard.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Dashboard;
