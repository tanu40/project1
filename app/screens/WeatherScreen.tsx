import * as Location from "expo-location";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

export default function WeatherScreen() {
  const [weather, setWeather] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");

  const API_KEY = "YOUR_API_KEY_HERE"; // replace with your key

  useEffect(() => {
    (async () => {
      try {
        // 🔥 Request location permission
        let { status } = await Location.requestForegroundPermissionsAsync();

        if (status !== "granted") {
          setErrorMsg("Permission denied. Please enable location.");
          setLoading(false);
          return;
        }

        // 🔥 Get current coordinates
        let location = await Location.getCurrentPositionAsync({});
        const { latitude, longitude } = location.coords;

        // 🔥 Fetch weather
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;

        const response = await fetch(url);
        const data = await response.json();

        setWeather(data);
      } catch (error) {
        setErrorMsg("Failed to load weather");
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#4CAF50" />
        <Text>Fetching weather...</Text>
      </View>
    );
  }

  if (errorMsg) {
    return (
      <View style={styles.center}>
        <Text style={styles.error}>{errorMsg}</Text>
        <Text style={{ marginTop: 10 }}>Go to: Settings → Apps → Expo Go → Permissions → Allow Location</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Weather Update</Text>
      <Text style={styles.label}>City: {weather.name}</Text>
      <Text style={styles.label}>Temperature: {weather.main.temp}°C</Text>
      <Text style={styles.label}>Condition: {weather.weather[0].description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  container: {
    flex: 1,
    padding: 20,
  },
  error: {
    fontSize: 16,
    fontWeight: "bold",
    color: "red",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
  },
  label: {
    fontSize: 18,
    marginTop: 10,
  },
});
