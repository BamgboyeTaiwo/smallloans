// import AsyncStorage from "@react-native-async-storage/async-storage";
// import React, { useEffect, useState } from "react";
// import { StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView } from "react-native";
// import AppIntroSlider from "react-native-app-intro-slider";
// import tw from "twrnc";
// // import Intro1 from "../../../assets/svgs/intro1";
// // import Intro2 from "../../../assets/svgs/intro2";
// // import Intro3 from "../../../assets/svgs/intro3";

// import Onboard from "../../assets/svg/Onboard";
// import Onboard2 from "../../assets/svg/Onboard2";
// import Onboard3 from "../../assets/svg/Onboard3";

// // import { Navigation } from "../../../navigation/types";
// // import { theme } from "../../../theme/core/theme";

// import { Navigation } from "../../types/navTypes";
// import { Signinfunc } from "../../utils/Authfunc";
// type Props = {
//   navigation: Navigation;
// };

// export default function OnboardComponent({ navigation }: Props) {
//   const slides = [
//     {
//       key: 1,
//       title: `Gain total control ${"\n"} of your money`,
//       text: `Become your own money manager and make every cent count`,
//       image: <Onboard />,
//       backgroundColor: "#F0FCFD",
//     },
//     {
//       key: 2,
//       title: `Know where your ${"\n"} money goes`,
//       text: `Track your transaction easily, with categories and financial report `,
//       image: <Onboard2 />,
//       backgroundColor: "#F0FCFD",
//     },
//     {
//       key: 3,
//       title: `Planning ahead`,
//       text: "Easily Sign Up For, And Manage Your Product / Services Subscriptions On Our Marketplace",
//       image: <Onboard3 />,
//       backgroundColor: "#F0FCFD",
//     },
//   ];

//   const renderNextButton = (param: any) => {
//     // console.log("next btn clicked");
//     return (
//       <View style={tw`py-2 px-3 bg-[#0077FF] rounded-lg`}>
//         <Text style={tw`font-semibold text-center text-white`}>{param}</Text>
//       </View>
//     );
//   };

//   const loadChecker = async () => {
//     try {
//       const value = await AsyncStorage.getItem("first_time");
//       if (value !== null) {
//         // value previously stored
//         console.log("asyncemail:", value, "first_time:", value);
//         if (value=== "true") {
//           const email = await AsyncStorage.getItem("email");
//           const password = await AsyncStorage.getItem("password");

//           const values = {
//             email: email,
//             password: password,
//           };
//           Signinfunc(values);
//         }
//       }
//     } catch (e) {
//       // error reading value
//     }
//   };

//   useEffect(() => {
//     loadChecker()
//   }, []);

//   return (
//     <AppIntroSlider
//       style={tw`h-full `}
//       data={slides}
//       renderItem={({ item }) => {
//         return (
//           <SafeAreaView style={[tw`h-full bg-[white]`]}>
//             <View style={[tw`bg-[white]`]}>
//               <View style={tw``}></View>
//               <View style={tw`  flex flex-row w-full mx-auto py-2 pr-3`}>
//                 <TouchableOpacity onPress={() => navigation.navigate("Signup")} style={tw`ml-auto`}>
//                   <View style={tw`  w-min `}>
//                     <Text style={tw` text-[#EB6A5E] opacity-90 `}>Skip{">>"}</Text>
//                   </View>
//                 </TouchableOpacity>
//               </View>

//               <View style={tw`mt-[10%] flex justify-center items-center`}>{item.image}</View>

//               <View style={tw`w-full px-3 mt-[1rem]`}>
//                 <Text style={[tw`text-[#212325] font-bold text-center text-[1.3rem]`]}>{item.title}</Text>
//               </View>

//               <View style={tw`mt-4 w-70  mx-auto`}>
//                 <Text style={tw`text-[#91919F] text-center text-sm `}>{item.text}</Text>
//               </View>

//               <TouchableOpacity
//                 onPress={() => navigation.navigate("Signup")}
//                 style={tw`bg-[#0077FF] mt-[25%] rounded-[1rem] w-[80%] py-[1rem] px-[1rem] mx-auto`}
//               >
//                 <View style={tw``}>
//                   <Text style={tw`text-center text-lg text-white font-semibold`}>Sign up</Text>
//                 </View>
//               </TouchableOpacity>

//               <TouchableOpacity
//                 onPress={() => navigation.navigate("Signin")}
//                 style={tw`bg-[#BDDCFF] mt-[1rem] rounded-[1rem] w-[80%] py-[1rem] px-[1rem] mx-auto`}
//               >
//                 <View style={tw``}>
//                   <Text style={tw`text-center text-lg text-[#0077FF] font-semibold`}>Log In</Text>
//                 </View>
//               </TouchableOpacity>
//             </View>
//           </SafeAreaView>
//         );
//       }}
//       activeDotStyle={{
//         backgroundColor: "#0077FF",
//         // width: 10,
//       }}
//       renderNextButton={() => renderNextButton("Next >")}
//       //renderSkipButton={() => renderNextButton("skip")}
//       renderDoneButton={() => renderNextButton("Done>")}
//       onDone={() => {
//         navigation.navigate("Signup");
//       }}
//     />
//   );
// }
