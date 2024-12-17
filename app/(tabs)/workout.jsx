import { View, Text, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Card from "../../components/Card";
const workout = () => {
  return (
    <SafeAreaView className="h-full bg-[#323232]">
      <ScrollView className="p-10">
        <View className="flex-row flex-wrap items-center justify-center gap-5 mt-10">
          <Card id="bulk" />
          <Card id="lean" />
          <Card id="fit" />
          <Card id="yoga" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default workout;
