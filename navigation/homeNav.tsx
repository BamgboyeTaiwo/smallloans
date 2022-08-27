import { View, Text } from "react-native";
import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home/Home";

const Stack = createNativeStackNavigator();

export default function HomeNav() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        options={{
          headerShown: false,
        }}
        component={Home}
      />  
      {/* <Stack.Screen
        name="Signup"
        options={{
          headerShown: false,
        }}
        component={Signupscreen}
      /> */}
    </Stack.Navigator>
  );
}
