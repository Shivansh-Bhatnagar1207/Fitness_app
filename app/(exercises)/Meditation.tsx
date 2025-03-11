import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

const Yoga = () => {
  return (
    <SafeAreaView className="h-screen bg-bgnd">
      <ScrollView>
        <View className="w-[90vw] mx-auto mt-10 mb-24 border-y-secondary border-x-bgnd py-2 border">
          <Text className="text-justify text-gray-600 text-base italic">
          Meditation is a powerful tool for calming the mind and cultivating inner peace. By focusing on the present moment or a particular object of attention, meditation helps reduce stress, anxiety, and negative thought patterns. It improves concentration, emotional regulation, and self-awareness. With consistent practice, meditation promotes relaxation, enhances mental clarity, and nurtures a sense of balance and well-being. It's a transformative practice for fostering mindfulness and emotional harmony.
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

const styles = StyleSheet.create({
  container: {
    height: "200",
    width: "200",
    backgroundSize: "cover",
    display: "flex",
    justifyContent: "center",
    // borderRadius: "20",
  },
});

export default Yoga;
