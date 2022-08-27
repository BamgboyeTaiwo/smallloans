import { View, Text } from "react-native";
import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home/Home";
import Account from "../screens/Account/Account";

const Stack = createNativeStackNavigator();

export default function AccountNav() {
  return (
    <Stack.Navigator initialRouteName="Accountpage">
      <Stack.Screen
        name="Accountpage"
        options={{
          headerShown: false,
        }}
        component={Account}
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
