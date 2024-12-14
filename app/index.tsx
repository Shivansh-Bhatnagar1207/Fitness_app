import React from "react";
import { Image, ScrollView, StatusBar, Text, View } from "react-native";
import "@/global.css";
import { Redirect, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import Btn from "../components/Btn";
export default function Index() {
  return (
    <SafeAreaView className="bg-[#323232] h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full items-center px-4">
          <Image
            source={require("../assets/images/logo.png")}
            className="w-[130px] h-[84px] mt-10"
            resizeMode="contain"
          />
        </View>
        <View className="relative mt-24 w-24 mx-auto">
          <Text className="text-3xl text-white font-bold text-center">
            Lets Do it with <Text className="text-orange-500">Our App</Text>
          </Text>
          <Btn
            title={"continue with email"}
            handlePress={() => {
              router.push("/SignIn");
            }}
            isLoading={false}
          />
        </View>
        <StatusBar backgroundColor={"#323232"} barStyle={"light-content"} />
      </ScrollView>
    </SafeAreaView>
  );
}
