import { View, Text, SafeAreaView, TextInput, TouchableOpacity,ScrollView, ActivityIndicator } from "react-native";
import React, { useState } from "react";
import tw from "twrnc";
import Googleicon from "../../assets/svgr/Google";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import Appleicon from "../../assets/svgr/appleicon";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function Signupscreen() {
  const navigation = useNavigation();
  const [loading, setloading] = useState(false);
  const [hidden, sethidden] = useState(true);
  return (
    <>
      <SafeAreaView style={tw` w-full h-full bg-white `}>
        <View style={tw`w-full px-[4%] pt-12 h-full`}>
          <Text style={tw`text-[#005099] text-lg text-center`}> Sign Up</Text>
          <View style={tw`flex flex-row mt-10`}>
            <View style={tw`border flex-1 flex flex-row px-3 mx-2 py-2 border-[#005099] rounded`}>
              <TouchableOpacity onPress={() => {}} style={tw`mx-auto flex flex-row`}>
                <Text style={tw`text-xs my-auto mx-2`}>Continue with</Text>
                <Googleicon />
              </TouchableOpacity>
            </View>
            <View style={tw`border flex-1 flex mx-2 px-3 py-2 border-[#005099] rounded`}>
              <TouchableOpacity onPress={() => {}} style={tw`mx-auto flex flex-row`}>
                <Text style={tw`text-xs my-auto mx-2`}>Continue with</Text>
                <Appleicon />
              </TouchableOpacity>
            </View>
          </View>
          <View style={tw`mt-8 flex flex-row`}>
            <View style={tw`flex-1 h-[1px] bg-[#828282] my-auto `}></View>
            <Text style={tw`my-auto mx-2 text-[#005099] font-bold`}>OR</Text>
            <View style={tw`flex-1 h-[1px] bg-[#828282] my-auto `}></View>
          </View>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={tw`mt-8 px-2 pb-10`}>
              <View style={tw`bg-[#F2F2F2] active:border-red-400  flex px-3 flex-row rounded-lg`}>
                <FontAwesome5 style={tw`my-auto`} name="user-alt" size={20} color="#BDBDBD" />
                <TextInput
                  onChangeText={(text) => {}}
                  placeholder="First Name"
                  style={tw`flex-1 mx-2 py-4 placeholder:text-[#BDBDBD] text-[#BDBDBD] `}
                ></TextInput>
              </View>
              <View style={tw`bg-[#F2F2F2] mt-4 active:border-red-400  flex px-3 flex-row rounded-lg`}>
                <FontAwesome5 style={tw`my-auto`} name="user-alt" size={20} color="#BDBDBD" />
                <TextInput
                  onChangeText={(text) => {}}
                  placeholder="Last Name"
                  style={tw`flex-1 mx-2 py-4 placeholder:text-[#BDBDBD] text-[#BDBDBD] `}
                ></TextInput>
              </View>
              <View style={tw`bg-[#F2F2F2] mt-4 active:border-red-400  flex px-3 flex-row rounded-lg`}>
                <MaterialIcons style={tw`my-auto`} name="email" size={20} color="#BDBDBD" />
                <TextInput
                  onChangeText={(text) => {}}
                  placeholder="Email"
                  style={tw`flex-1 mx-2 py-4 placeholder:text-[#BDBDBD] text-[#BDBDBD] `}
                ></TextInput>
              </View>
              <View style={tw`bg-[#F2F2F2] mt-4 active:border-red-400  flex px-3 flex-row rounded-lg`}>
                <FontAwesome style={tw`my-auto`} name="phone" size={20} color="#BDBDBD" />
                <TextInput
                  onChangeText={(text) => {}}
                  placeholder="Phone Number"
                  style={tw`flex-1 mx-2 py-4 placeholder:text-[#BDBDBD] text-[#BDBDBD] `}
                ></TextInput>
              </View>
              <View style={tw`bg-[#F2F2F2] mt-4 active:border-red-400  flex px-3 flex-row rounded-lg`}>
                <Ionicons style={tw`my-auto`} name="location" size={20} color="#BDBDBD" />
                <TextInput
                  onChangeText={(text) => {}}
                  placeholder="Home Address"
                  style={tw`flex-1 mx-2 py-4 placeholder:text-[#BDBDBD] text-[#BDBDBD] `}
                ></TextInput>
              </View>
              <View style={tw`flex flex-row mt-2 px-3  bg-[#F2F2F2] rounded`}>
                <AntDesign style={tw`my-auto`} name="lock1" size={20} color="#BDBDBD" />
                <TextInput
                  onChangeText={(text) => {}}
                  secureTextEntry={hidden}
                  placeholder="Password"
                  style={tw`p-3 py-4  flex-1 placeholder:text-[#BDBDBD] text-[#BDBDBD] font-semibold  `}
                ></TextInput>
                <TouchableOpacity onPress={() => sethidden(!hidden)}>
                  <View style={tw`my-auto pr-[1rem]`}>
                    {hidden ? (
                      <Feather name="eye-off" size={20} color="#BDBDBD" />
                    ) : (
                      <Feather name="eye" size={20} color="#BDBDBD" />
                    )}
                  </View>
                </TouchableOpacity>
              </View>

              <TouchableOpacity
                onPress={() => {
                  // StageSignin();
                  // navigation.navigate('HomeNav')
                }}
                style={tw` ${"bg-[#005099]"} mt-8 rounded w-full py-3 px-4 mx-auto`}
              >
                <View style={tw``}>
                  {loading ? (
                    <ActivityIndicator size="large" color="#ffffff" />
                  ) : (
                    <Text style={tw`text-center  text-white `}>Sign In</Text>
                  )}
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  // StageSignin();
                  navigation.navigate('Signin')
                }}
                style={tw`border-[#005099] border mt-4 rounded w-full py-3 px-4 mx-auto`}
              >
                <Text style={tw`text-center text-[#005099] `}>Log in</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    </>
  );
}
