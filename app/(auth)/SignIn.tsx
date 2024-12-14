import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const SignIn = () => {
  return (
    <SafeAreaView className="bg-[#323232] h-full">
      <ScrollView>
        <View className="w-full h-full justify-center min-h-[85vh] px-4 my-6">
          <Image
            source={require("../../assets/images/logo.png")}
            resizeMode="contain"
            className="w-[115px] h-[35px]"
          />
          <Text className="text-semibold text-white text-2xl mt-10">Log into Fitness App</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
