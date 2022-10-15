import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import AboutUs from "./components/AboutUs";
import CONTACT from "./components/CONTACT";
import TermsConditions from "./components/TermsConditions";
import PostAClubDeaL from "./components/PostAClubDeaL";
import MainContainer from "./components/navigation/MainContainer";
const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          drawerStyle: {
            Color: "#ffffff",
            backgroundColor: "#051F4D",
            width: 240,
          },
        }}
      >
        <Drawer.Screen name="Home" component={MainContainer} />
        <Drawer.Screen name="AboutUs" component={AboutUs} />
        <Drawer.Screen name="CONTACT" component={CONTACT} />
        <Drawer.Screen name="PostAClubDeaL" component={PostAClubDeaL} />
        <Drawer.Screen name="TermsConditions" component={TermsConditions} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
