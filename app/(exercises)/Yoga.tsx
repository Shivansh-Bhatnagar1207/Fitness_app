import {
  View,
  Text,
  Image,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

const Yoga = () => {
  return (
    <SafeAreaView className="h-screen bg-bgnd">
      <ScrollView>
        <View className="w-[90vw] mx-auto mt-10 mb-24 border-y-secondary  border-y border-x-0 py-2 border">
          <Text className="text-justify text-gray-600 text-base italic">
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
        <Text className=" text-center text-2xl font-semibold py-14">
          Choose your Training Intensity
        </Text>
        <View className="flex items-center">
          <View className="mr-80 flex-row">
            <Ionicons name="sparkles-outline" size={30} color="#FFBD73" />
          </View>
          <View className="h-80 w-[35vw]  gap-2 ">
            <TouchableOpacity className="bg-[#81C784] h-24 w-44 rounded-3xl flex items-center justify-center border-[#388E3C] border">
              <Text className="text-2xl font-semibold text-white outline-1">
                Beginner
              </Text>
            </TouchableOpacity>
            <TouchableOpacity className="bg-[#FFD54F] h-24 w-44 rounded-3xl flex items-center justify-center border-[#F98A25] border">
              <Text className="text-2xl font-semibold text-white">
                Intermediate
              </Text>
            </TouchableOpacity>
            <TouchableOpacity className="bg-[#E57373] h-24 w-44 rounded-3xl flex items-center justify-center border-[#C62828] border">
              <Text className="text-2xl font-semibold text-white">
                Advanced
              </Text>
            </TouchableOpacity>
          </View>
          <View className="ml-80 flex-row">
            <Ionicons name="sparkles-outline" size={30} color="#FFBD73" />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Yoga;
