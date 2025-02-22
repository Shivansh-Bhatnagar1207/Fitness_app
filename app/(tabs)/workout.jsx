import { View, Text, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Card from "../../components/Card";
const workout = () => {
  return (
    <SafeAreaView className="h-full bg-bgnd">
      <ScrollView className="">
        <View className="gap-10 p-10">
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
