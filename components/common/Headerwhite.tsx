import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import React from "react";
import tw from "twrnc";
import { AntDesign } from "@expo/vector-icons";
import { Navigation } from "../../types/navTypes";
import { useNavigation } from "@react-navigation/native";

export default function Headerwhite(prop: any) {
  const navigation = useNavigation();
  return (
    <View style={tw`flex px-[5%] pt-[0.25rem] flex-row`}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <View style={tw``}>
          <AntDesign name="arrowleft" size={24} color="white" />
        </View>
      </TouchableOpacity>

      <Text style={tw`mx-auto text-white font-semibold text-lg`}>{prop.title}</Text>
    </View>
  );
}
