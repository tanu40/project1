import { DrawerNavigationProp } from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { RootDrawerParamList } from "../types/navigation";

type HomeScreenNavProp = DrawerNavigationProp<RootDrawerParamList>;

export default function HomeScreen() {
  const navigation = useNavigation<HomeScreenNavProp>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🌾 Farmer Assistant</Text>
      <Text style={styles.subtitle}>Welcome / स्वागत आहे!</Text>

      <View style={styles.grid}>

        {/* Voice Assistant */}
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate("Voice Assistant")}
        >
          <Text style={styles.icon}>🎤</Text>
          <Text style={styles.cardText}>Voice Assistant</Text>
        </TouchableOpacity>

        {/* Crop Info */}
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate("Crop Info")}
        >
          <Text style={styles.icon}>🌱</Text>
          <Text style={styles.cardText}>Crop Information</Text>
        </TouchableOpacity>

        {/* Weather */}
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate("Weather")}
        >
          <Text style={styles.icon}>🌦️</Text>
          <Text style={styles.cardText}>Weather</Text>
        </TouchableOpacity>

        {/* Profile */}
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate("Profile")}
        >
          <Text style={styles.icon}>👤</Text>
          <Text style={styles.cardText}>Profile</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
  },
  grid: {
    marginTop: 20,
  },
  card: {
    backgroundColor: "#EAF8E6",
    padding: 20,
    borderRadius: 10,
    marginBottom: 15,
  },
  icon: {
    fontSize: 30,
  },
  cardText: {
    fontSize: 18,
    marginTop: 5,
  },
});
