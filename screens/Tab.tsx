import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import tw from "twrnc";

import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import HomeNav from "../navigation/homeNav";
import LoanNav from "../navigation/loanNav";
import AccountNav from "../navigation/accountNav";

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: "#005099",
      }}
    >
      <Tab.Screen
        name="Loans"
        component={LoanNav}
        options={{
          headerShown: false,
          tabBarLabel: "Loans",
          tabBarIcon: ({ color, size }) => <FontAwesome name="exchange" color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name="Home"
        component={HomeNav}
        options={{
          headerShown: false,
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="home" color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountNav}
        options={{
          headerShown: false,
          tabBarLabel: "Account",
          tabBarIcon: ({ color, size }) => <FontAwesome name="user" color={color} size={size}/>,
        }}
      />
    </Tab.Navigator>
  );
}

export default MyTabs;
