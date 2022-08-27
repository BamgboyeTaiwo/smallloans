import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthNav from "./authNav";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MyTabs from "../screens/Tab";

export default function MainNav() {
  const [IsLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {}, []);

  return <NavigationContainer>{<AuthNav />}</NavigationContainer>;
}
