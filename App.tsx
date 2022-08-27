import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import MainNav from "./navigation/mainNav";
// import OnboardComponent from "./screens/Authentication/Onboarding";
import Signin from "./screens/Authentication/Signin";
import tw from "twrnc";

export default function App() {
  return (
    <View style={tw`h-full bg-white`}>
      <MainNav />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
