import { View, Text, Image, ScrollView, ImageBackground } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const Yoga = () => {
  return (
    <SafeAreaView className="h-screen bg-bgnd">
      <ScrollView>
        <View className="w-[90vw] mx-auto mt-10 mb-24 border-y-secondary border-x-bgnd py-2 border">
          <Text className="text-justify font-semibold text-base italic">
            Yoga offers numerous benefits for both the mind and body. It helps
            improve flexibility, strength, and posture while promoting better
            balance and coordination. Regular practice can reduce stress,
            enhance mental clarity, and support emotional well-being through
            mindful breathing and relaxation techniques. Additionally, yoga is
            known to boost energy levels, improve sleep quality, and support
            overall physical and mental health. It's a holistic practice that
            nurtures harmony within.
          </Text>
        </View>
        <Text className=" text-center text-2xl font-semibold py-5">
          Choose your Training Intensity
        </Text>
        <View className="h-80 w-[95vw] flex gap-4 mx-auto">
          <View className="bg-[#4CAF50] h-28 rounded-3xl flex items-center justify-center border-[#388E3C] border">
            <Text className="text-2xl font-semibold text-white">Beginner</Text>
          </View>
          <View className="bg-[#FBC02D] h-28 rounded-3xl flex items-center justify-center border-[#F98A25] border">
            <Text className="text-2xl font-semibold text-white">
              Intermediate
            </Text>
          </View>
          <View className="bg-[#E53935] h-28 rounded-3xl flex items-center justify-center border-[#C62828] border">
            <Text className="text-2xl font-semibold text-white">Advanced</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Yoga;
