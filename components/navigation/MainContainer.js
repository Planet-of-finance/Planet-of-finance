import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useLayoutEffect } from "react";
import { MaterialIcons } from "@expo/vector-icons";

// Screens
import HomeScreen from "../navigation/screens/HomeScreen.js";
import DetailsScreen from "../navigation/screens/DerailsScreen.js";
import SettingsScreen from "./screens/SettingsScreen.js";

//Screen names
const homeName = "Professionals";
const detailsName = "PrivateInestors";
const settingsName = "Club deals";

const Tab = createBottomTabNavigator();

function MainContainer({ navigation }) {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <Tab.Navigator
      initialRouteName={homeName}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let rn = route.name;

          if (rn === homeName) {
            iconName = focused ? "person-outline" : "person-outline";
          } else if (rn === detailsName) {
            iconName = focused ? "list" : "chess-queen";
          } else if (rn === settingsName) {
            iconName = focused ? "shield-sync-shield-outline" : "shield-outline";
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "#f9be34",
        inactiveTintColor: "#f9be34",
        labelStyle: { paddingBottom: 0, fontSize: 10 },
        tabStyle: [{ backgroundColor: "#051F4D" }],
      }}
    >
      <Tab.Screen name={homeName} component={HomeScreen} />
      <Tab.Screen name={detailsName} component={DetailsScreen} />
      <Tab.Screen name={settingsName} component={SettingsScreen} />
    </Tab.Navigator>
  );
}

export default MainContainer;
