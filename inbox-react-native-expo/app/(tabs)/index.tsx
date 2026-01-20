import { StyleSheet, View } from "react-native";
import { NovuNotifications } from "@/components/NovuNotifications";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <NovuNotifications />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
});


