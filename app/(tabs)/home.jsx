import { View, Text, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
  return (
    <SafeAreaView className="h-full bg-[#323232]">
      <ScrollView>
        <Text className="">Home</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
