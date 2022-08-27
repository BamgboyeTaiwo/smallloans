import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import React from "react";

import tw from "twrnc";
import { AntDesign } from "@expo/vector-icons";

import { Navigation } from "../../types/navTypes";
// type Props = {
//   navigation: Navigation;
// };
import { useNavigation } from '@react-navigation/native';



export default function HeaderComp(prop:any) {
    const navigation = useNavigation(); 
  return (
    <View style={tw`flex px-[5%] pt-[0.25rem] flex-row`}>
      <TouchableOpacity onPress={()=> navigation.goBack()}>
        <View style={tw``}>
          <AntDesign name="arrowleft" size={24} color="black" />
        </View>
      </TouchableOpacity>

      <Text style={tw`mx-auto text-[#212325] font-semibold text-lg`}>{prop.title}</Text>
    </View>
  );
}
