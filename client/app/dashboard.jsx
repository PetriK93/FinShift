import { View, StyleSheet, Image } from "react-native";
import { useTheme } from "../context/ThemeContext";
import { useRouter } from "expo-router";
import DashboardButton from "../components/buttons/DashboardButton";
import logo from "../assets/images/adaptive-icon.png";
import RequestWorkHours from "../assets/images/request_work_hours_image.png";
import LogOvertimeHours from "../assets/images/log_overtime_hours_image.png";
import MyRequests from "../assets/images/my_requests_image.png";
import ContactSupervisor from "../assets/images/contact_supervisor_image.png";
import InfoButton from "../components/buttons/InfoButton";
import MaleAvatarImage from "../assets/images/male_avatar_image.png";
import FemaleAvatarImage from "../assets/images/female_avatar_image.png";
import Notifications from "../assets/images/notifications_image.png";
import Help from "../assets/images/help_image.png";

const testButton = (buttonTitle) => {
  console.log(buttonTitle);
};

function Dashboard() {
  const theme = useTheme();

  return (
    <View
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      <Image source={logo} style={styles.logo} />
      <View style={styles.buttons}>
        <DashboardButton
          title="Request Work Hours"
          onPress={() => testButton("You clicked 'Request Work Hours'!")}
          style={theme}
          src={RequestWorkHours}
        />
        <DashboardButton
          title="Log Overtime Hours"
          onPress={() => testButton("You clicked 'Log Overtime Hours'!")}
          style={theme}
          src={LogOvertimeHours}
        />
        <DashboardButton
          title="My Requests"
          onPress={() => testButton("You clicked 'My Requests'!")}
          style={theme}
          src={MyRequests}
        />
        <DashboardButton
          title="Contact Supervisor"
          onPress={() => testButton("You clicked 'Contact Supervisor'!")}
          style={theme}
          src={ContactSupervisor}
        />
      </View>
      <View style={styles.infoBar}>
        <InfoButton
          title="Profile"
          onPress={() => testButton("You clicked 'Profile'!")}
          style={theme}
          src={FemaleAvatarImage}
        ></InfoButton>
        <InfoButton
          title="Notifications"
          onPress={() => testButton("You clicked 'Notifications'!")}
          style={theme}
          src={Notifications}
        ></InfoButton>
        <InfoButton
          title="Help"
          onPress={() => testButton("You clicked 'Help'!")}
          style={theme}
          src={Help}
        ></InfoButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 250,
    height: 250,
    marginBottom: 20,
    borderRadius: 20,
    objectFit: "cover",
  },
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    paddingTop: "5%",
    alignItems: "center",
    width: "100%",
  },
  buttons: {
    width: 250,
    gap: 5,
  },
  infoBar: {
    flexDirection: "row",
    gap: 30,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  },
});

export default Dashboard;
