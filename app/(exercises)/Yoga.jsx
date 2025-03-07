import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ImageBackground } from "react-native";
const Yoga = () => {
  return (
    <SafeAreaView className="h-screen bg-bgnd">
      <ScrollView>
        <Text className=" text-center text-3xl font-bold py-5">
          Choose your Training Intensity
        </Text>
        <ImageBackground
          source={require("@/assets/images/fitness.png")}
          resizeMode="cover"
        >
          <Text>Test</Text>
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Yoga;
