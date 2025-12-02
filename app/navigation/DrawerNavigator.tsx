import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen';
import VoiceScreen from '../screens/VoiceScreen';
import WeatherScreen from '../screens/WeatherScreen';
import CropInfoScreen from '../screens/CropInfoScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#4CAF50' },
        headerTintColor: '#fff',
        drawerActiveBackgroundColor: '#4CAF50',
        drawerActiveTintColor: '#fff',
        drawerLabelStyle: { fontSize: 16 },
      }}
    >
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Voice Assistant" component={VoiceScreen} />
      <Drawer.Screen name="Weather" component={WeatherScreen} />
      <Drawer.Screen name="Crop Info" component={CropInfoScreen} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
    </Drawer.Navigator>
  );
}
