import { View, Text, SafeAreaView, TouchableOpacity, ScrollView } from "react-native";
import React, { useState } from "react";
import tw from "twrnc";
import Bellicon from "../../assets/svgr/bell";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function Home() {
  const navigation = useNavigation();
  const [hidden, sethidden] = useState(false);
  return (
    <SafeAreaView style={tw` w-full h-full bg-white`}>
      <ScrollView showsHorizontalScrollIndicator={false} style={tw`pb-10`}>
        <View style={tw`px-[5%] mt-4`}>
          <Text style={tw``}> </Text>
          <View style={tw``}></View>
          <View style={tw`flex flex-row justify-between`}>
            <Text style={tw`text-lg text-[#001529] font-semibold`}>Welcome Faith</Text>
            <Bellicon />
          </View>

          <View style={tw`bg-[#D7E7F5] w-full py-2 mt-6 rounded-lg`}>
            <View style={tw`flex bg-[#005099] mt-4 px-2 py-3 flex-row justify-between`}>
              <Text style={tw` my-auto text-white font-semibold`}>Welcome Faith</Text>
              <View style={tw`pr-3`}>
                {hidden ? <Feather name="eye-off" size={20} color="#FFFFFF" /> : <Feather name="eye" size={20} color="#FFFFFF" />}
              </View>
            </View>
            <View style={tw`p-4 py-6 `}>
              <Text style={tw`text-center `}> Available Balance</Text>
              <Text style={tw`text-3xl mt-2 text-center font-semibold`}>#500.00 </Text>
            </View>
          </View>

          <View style={tw`flex flex-row w-full justify-between mt-4`}>
            <TouchableOpacity
              onPress={() => {
                // StageSignin();
                navigation.navigate("Signup");
              }}
              style={tw`w-[45%]  border-[#828282] border mt-4 rounded  py-3  `}
            >
              <Text style={tw`text-center text-[#005099] `}>Request Fund</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                // StageSignin();
                navigation.navigate("Signup");
              }}
              style={tw`w-[45%]  border-[#828282] border mt-4 rounded  py-3  `}
            >
              <Text style={tw`text-center text-[#005099] `}>Request Fund</Text>
            </TouchableOpacity>
          </View>

          <View style={tw`mt-8 border-t border-t`}>
            <TouchableOpacity
              onPress={() => {
                // StageSignin();
                navigation.navigate("Signin");
              }}
              style={tw`border-[#005099] bg-[#005099] border mt-4 rounded w-full py-3 px-4 mx-auto`}
            >
              <Text style={tw`text-center text-white `}>Disburse New Loan</Text>
            </TouchableOpacity>

            <View style={tw`flex flex-row w-full justify-between mt-4`}>
              <TouchableOpacity
                onPress={() => {
                  // StageSignin();
                  navigation.navigate("Signup");
                }}
                style={tw`w-[45%]  border-[#828282] border mt-4 rounded  py-3  `}
              >
                <Text style={tw`text-center text-[#005099] `}>Request Fund</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  // StageSignin();
                  navigation.navigate("Signup");
                }}
                style={tw`w-[45%]  border-[#828282] border mt-4 rounded  py-3  `}
              >
                <Text style={tw`text-center text-[#005099] `}>Request Fund</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
