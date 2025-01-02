import { View, Text, ScrollView, Image, ActivityIndicator } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useUser } from "@/context/UserContext";

export default function Home() {
  const { userData, loading } = useUser();

  const { name, Height, Weight } = userData || {};

  let BMI = Weight / (Height * Height);
  BMI = BMI.toFixed(2);
  let category;
  let textColor;

  if (BMI < 18.5) {
    category = "Underweight";
    textColor = "text-red-500";
  } else if (BMI >= 18.5 && BMI < 24.9) {
    category = "Normal weight";
    textColor = "text-green-500";
  } else if (BMI >= 25 && BMI < 29.9) {
    category = "Overweight";
    textColor = "text-orange-500";
  } else {
    category = "Obesity";
    textColor = "text-black";
  }

  if (loading) {
    return (
      <SafeAreaView className="bg-[#faf9f6] h-full flex justify-center items-center">
        <ActivityIndicator size="large" color="#fff" />
      </SafeAreaView>
    );
  }

  if (!userData) {
    return (
      <SafeAreaView className="bg-[#faf9f6] h-full flex justify-center items-center">
        <Text className="text-white text-xl">No data to display.</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView className="bg-[#faf9f6] h-full">
      <ScrollView>
        <View className=" ">
          <Image
            source={require("../../assets/images/logo.png")}
            className="w-full h-[84px]"
            resizeMode="cover"
          />
          <Text className="text-bold text-2xl mt-10 text-center ">
            Welcome {name}!!
          </Text>

          <View className="py-5 bg-white w-[85vw]  my-10 mx-auto px-5 border-black border-2 rounded-md">
            <Text className="text-4xl text-center font-bold py-2">BMI</Text>
            <View className="flex-row justify-between">
              <Text className="text-base p-2">
                <Text className="font-bold">Height : </Text>
                {Height} ft
              </Text>
              <Text className="text-base p-2">
                <Text className="font-bold">Weight : </Text>
                {Weight} ft
              </Text>
            </View>
            <Text className="text-center my-2">
              On Calculating your BMI is as follows:
            </Text>
            <Text
              className={`text-center ${textColor} text-4xl font-extrabold`}
            >
              {BMI}
            </Text>

            <Text className="text-center">
              According to this you are{" "}
              <Text className={`${textColor}`}>{category}</Text>
            </Text>
            <View className="flex-row mt-5">
              <View className="h-5 w-[25%] bg-red-500"></View>
              <View className="h-5 w-[25%] bg-green-500"></View>
              <View className="h-5 w-[25%] bg-orange-500"></View>
              <View className="h-5 w-[25%] bg-black"></View>
            </View>
            <View className="flex-row">
              <View className="h-10 w-[25%] ">
                <Text className="text-center">Under Weight</Text>
              </View>
              <View className="h-10 w-[25%] ">
                <Text className="text-center">Normal</Text>
              </View>
              <View className="h-10 w-[25%] ">
                <Text className="text-center">Over Weight</Text>
              </View>
              <View className="h-10 w-[25%] ">
                <Text className="text-center">Obesity</Text>
              </View>
            </View>
          </View>
          <Text className=" text-center text-4xl font-bold">
            Today's Activites
          </Text>
          <View className=" flex-col justify-around gap-10 py-10">
            <View className="bg-white h-28  w-[85vw]  mx-auto px-5 border-2 rounded-md py-5">
              <Text className="font-bold text-lg text-center">0.00</Text>
              <Text className="text-center text-xl">KCAL</Text>
            </View>
            <View className="bg-white h-28 w-[85vw]  mx-auto px-5 border-2 rounded-md py-5">
              <Text className="font-bold text-lg text-center">0</Text>
              <Text className="text-center text-xl">WORKOUTS</Text>
            </View>
            <View className="bg-white h-28 w-[85vw]  mx-auto px-5 border-2 rounded-md py-5">
              <Text className="font-bold text-lg text-center">0</Text>
              <Text className="text-center text-xl">MINUTES</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
