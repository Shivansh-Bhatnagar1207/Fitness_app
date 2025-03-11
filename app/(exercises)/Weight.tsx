import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

const Yoga = () => {
  return (
    <SafeAreaView className="h-screen bg-bgnd">
      <ScrollView>
        <View className="w-[90vw] mx-auto mt-10 mb-24 border-y-secondary border-x-bgnd py-2 border">
          <Text className="text-justify text-gray-600 text-base italic">
            Weight training builds strength, enhances muscle tone, and increases
            metabolic efficiency. Lifting weights or using resistance exercises
            supports joint health and improves bone density, reducing the risk
            of osteoporosis. It can also aid in achieving fitness goals by
            sculpting the body and boosting overall physical performance. Beyond
            the physical benefits, weight training fosters a sense of
            accomplishment, increases energy levels, and supports mental
            toughness and confidence.
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
