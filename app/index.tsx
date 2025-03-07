import React from "react";
import { Image, ScrollView, StatusBar, Text, View } from "react-native";
import "@/global.css";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import Btn from "@/components/Btn";
export default function Index() {
  return (
    <SafeAreaView className="h-full bg-bgnd">
      <ScrollView>
        <View className="w-full px-4 justify-center mt-28">
          <Image
            source={require("@/assets/images/fitness.png")}
            className="w-full h-[84px] "
            resizeMode="cover"
          />
        </View>
        <View className="w-full px-4 justify-center mt-24">
          <Image
            source={require("@/assets/images/loader.gif")}
            className="w-full h-80 mx-auto "
            resizeMode="contain"
          />
        </View>
        <View className=" w-36 mx-auto mt-20">
          <Text className="text-3xl  font-bold text-center">
            Lets Do it with <Text className="text-accent">Our App</Text>
          </Text>
          {/* <View className="bg-orange-500"> */}

          <Btn
            title="Let's begin"
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
