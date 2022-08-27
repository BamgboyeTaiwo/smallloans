import { View, Text } from "react-native";
import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Signin from "../screens/Authentication/Signin";
import Signupscreen from "../screens/Authentication/signup";
import MyTabs from "../screens/Tab";



const Stack = createNativeStackNavigator();

export default function AuthNav() {
  return (
    <Stack.Navigator initialRouteName="Signup">
      {/* <Stack.Screen
        name="Onboarding"
        options={{
          headerShown: false,
        }}
        component={OnboardComponent}
      /> */}
      <Stack.Screen
        name="Signin"
        options={{
          headerShown: false,
        }}
        component={Signin}
      />  
      <Stack.Screen
        name="Signup"
        options={{
          headerShown: false,
        }}
        component={Signupscreen}
      />
      <Stack.Screen
        name="Tab"
        options={{
          headerShown: false,
        }}
        component={MyTabs}
      />
    </Stack.Navigator>
  );
}
