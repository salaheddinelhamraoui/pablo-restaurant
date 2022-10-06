import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { useFonts } from "expo-font";

import Login from "./screens/login/Login";
import Dashboard from "./screens/dashboard/Dashboard";
import NewClient from "./screens/newClient/NewClient";
import NewFranchise from "./screens/newFranchise/NewFranchise";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "#F2F2F2",
  },
};

const Stack = createStackNavigator();

export default function App() {
  const [loaded] = useFonts({
    GilroyExtraBold: require("./assets/fonts/Gilroy-ExtraBold.otf"),
    GilroyLight: require("./assets/fonts/Gilroy-Light.otf"),
  });

  if (!loaded) return null;

  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Login"
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="NewClient" component={NewClient} />
        <Stack.Screen name="NewFranchise" component={NewFranchise} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


