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
            Cardiovascular exercises are excellent for improving heart health
            and endurance. Engaging in activities like running, cycling, or
            swimming increases your heart rate, boosting circulation and oxygen
            delivery throughout the body. Regular cardio helps burn calories,
            supports weight management, and enhances stamina. It also releases
            endorphins, reducing stress and improving mood. Over time, it
            contributes to better sleep, a stronger immune system, and overall
            physical and mental xresilience.
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
