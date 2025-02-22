import {
  View,
  Text,
  ScrollView,
  Image,
  ActivityIndicator,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
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
      <SafeAreaView className="bg-bgnd h-full flex justify-center items-center">
        <ActivityIndicator size="large" color="#fff" />
      </SafeAreaView>
    );
  }

  if (!userData) {
    return (
      <SafeAreaView className="bg-bgnd h-full flex justify-center items-center">
        <Text className="text-white text-xl">No data to display.</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView className="bg-bgnd h-full">
      <ScrollView>
        <View className=" ">
          <Image
            source={require("../../assets/images/logo.png")}
            className="w-full h-[84px] mt-5"
            resizeMode="cover"
          />

          <View className="py-5 bg-white w-[95vw]  my-10 mx-auto px-5  rounded-3xl">
            {/* <Text className="text-4xl text-center font-bold py-2">BMI</Text> */}
            <View className="flex-row justify-between">
              <Text className="text-base p-2">
                <Text className="font-semibold">Height : </Text>
                {Height} ft
              </Text>
              <Text className="text-base p-2">
                <Text className="font-semibold">Weight : </Text>
                {Weight} kg
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
                <Text className="text-center ">Obesity</Text>
              </View>
            </View>
          </View>

          <View>
            <Text className=" text-center text-3xl font-bold text-accent">
              Discover
            </Text>

            <View>
              <ScrollView horizontal>
                <View className="flex-row gap-2 mx-auto">
                  <View className="w-[90vw] h-24 bg-white mx-auto mt-10 rounded-3xl">
                    <ImageBackground
                      source={require("../../assets/images/confetti.png")}
                      height={200}
                      width={200}
                      resizeMode="cover"
                      className="flex-1"
                    >
                      <View className="flex justify-center h-24 px-6 gap-2">
                        <Text className="text-xl font-bold ">
                          "Big Goals start with small habits"
                        </Text>
                        <TouchableOpacity
                          activeOpacity={0.7}
                          className="bg-secondary h-8 w-28 rounded-full"
                        >
                          <Text className="my-auto text-white text-lg text-center font-semibold">
                            Track Now
                          </Text>
                        </TouchableOpacity>
                      </View>
                    </ImageBackground>
                  </View>
                  <View className="w-[90vw] h-24 bg-white mx-auto mt-10 rounded-3xl">
                    <ImageBackground
                      source={require("../../assets/images/confetti.png")}
                      height={200}
                      width={200}
                      resizeMode="cover"
                      className="flex-1"
                    >
                      <View className="flex justify-center h-24 px-6 gap-2">
                        <Text className="text-xl font-bold ">
                          "Big Goals start with small habits"
                        </Text>
                        <TouchableOpacity
                          activeOpacity={0.7}
                          className="bg-secondary h-8 w-28 rounded-full"
                        >
                          <Text className="my-auto text-white text-lg text-center font-semibold">
                            Track Now
                          </Text>
                        </TouchableOpacity>
                      </View>
                    </ImageBackground>
                  </View>
                  <View className="w-[90vw] h-24 bg-white mx-auto mt-10 rounded-3xl">
                    <ImageBackground
                      source={require("../../assets/images/confetti.png")}
                      height={200}
                      width={200}
                      resizeMode="cover"
                      className="flex-1"
                    >
                      <View className="flex justify-center h-24 px-6 gap-2">
                        <Text className="text-xl font-bold ">
                          "Big Goals start with small habits"
                        </Text>
                        <TouchableOpacity
                          activeOpacity={0.7}
                          className="bg-secondary h-8 w-28 rounded-full"
                        >
                          <Text className="my-auto text-white text-lg text-center font-semibold">
                            Track Now
                          </Text>
                        </TouchableOpacity>
                      </View>
                    </ImageBackground>
                  </View>
                </View>
              </ScrollView>
              <View className="flex-row mx-auto gap-4">
                <View className="w-[42vw] h-24 bg-white mt-10 rounded-3xl"></View>
                <View className="w-[42vw] h-24 bg-white mt-10 rounded-3xl"></View>
              </View>
            </View>
            <View className=" flex-row py-10 gap-1 p-3">
              <View className="bg-white h-20  w-[28vw]   mx-auto px-5 flex items-center justify-center rounded-full">
                <Text className="font-bold text-lg ">0.00</Text>
                <Text className=" text-l">KCAL</Text>
              </View>
              <View className="bg-white h-20 w-[28vw]  mx-auto px-5 flex items-center justify-center rounded-full">
                <Text className="font-bold text-lg ">0</Text>
                <Text className=" text-l">WORKOUTS</Text>
              </View>
              <View className="bg-white h-20 w-[28vw]  mx-auto px-5 flex items-center justify-center rounded-full">
                <Text className="font-bold text-lg ">0</Text>
                <Text className=" text-l">MINUTES</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
