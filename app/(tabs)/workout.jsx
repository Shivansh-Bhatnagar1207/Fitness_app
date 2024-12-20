import { View, Text, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Card from "../../components/Card";
const workout = () => {
  return (
    <SafeAreaView className="h-full bg-[#323232]">
      <ScrollView className="p-10">
        <View className="flex-row flex-wrap items-center justify-center gap-20 mt-10">
          <Card id="Bulk" />
          <Card id="Lean" />
          <Card id="Fit" />
          <Card id="Yoga" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default workout;
