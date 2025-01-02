import React from "react";
import { Image, ScrollView, StatusBar, Text, View } from "react-native";
import "@/global.css";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import Btn from "../components/Btn";
export default function Index() {
  return (
    <SafeAreaView className="h-full bg-[#faf9f6]">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full items-center px-4">
          <Image
            source={require("../assets/images/logo.png")}
            className="w-full h-[84px] mt-10"
            resizeMode="cover"
          />
        </View>
        <View className="relative mt-24 w-36 mx-auto">
          <Text className="text-3xl  font-bold text-center">
            Lets Do it with <Text className="text-orange-500">Our App</Text>
          </Text>
          {/* <View className="bg-orange-500"> */}

          <Btn
            title={"Sign In"}
            handlePress={() => {
              router.push("/SignIn");
            }}
            isLoading={false}
          />
          </View>
        {/* </View> */}
        <StatusBar backgroundColor={"#323232"} barStyle={"light-content"} />
      </ScrollView>
    </SafeAreaView>
  );
}
