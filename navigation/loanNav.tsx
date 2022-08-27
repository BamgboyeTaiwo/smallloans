import { View, Text } from "react-native";
import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home/Home";
import Loanspage from "../screens/loans/Loans";

const Stack = createNativeStackNavigator();

export default function LoanNav() {
  return (
    <Stack.Navigator initialRouteName="Loanspage">
      <Stack.Screen
        name="Loanspage"
        options={{
          headerShown: false,
        }}
        component={Loanspage}
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
