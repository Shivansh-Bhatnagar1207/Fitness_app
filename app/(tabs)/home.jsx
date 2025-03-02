import {
  View,
  Text,
  ScrollView,
  Image,
  ActivityIndicator,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useUser } from "@/context/UserContext";
import Animated, {
  useSharedValue,
  useAnimatedScrollHandler,
  interpolate,
  Extrapolate,
  Extrapolation,
} from "react-native-reanimated";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

const { width } = Dimensions.get("window");
const CARD_WIDTH = width * 0.9;
const SLIDE_COUNT = 3;

export default function Home() {
  const { userData, loading } = useUser();
  const { name, Height, Weight } = userData || {};

  let BMI = Weight / (Height * Height);
  BMI = BMI.toFixed(2);

  let category, textColor;
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

  // Smooth Animation for Slider & Indicators
  const scrollX = useSharedValue(0);
  const scrollHandler = useAnimatedScrollHandler((event) => {
    scrollX.value = event.contentOffset.x;
  });

  return (
    <SafeAreaView className="bg-bgnd h-full">
      <ScrollView>
        <View>
          {/* Logo */}
          <Image
            source={require("../../assets/images/logo.png")}
            className="w-full h-[84px] mt-5"
            resizeMode="cover"
          />

          {/* BMI Section */}
          <View className="py-5 bg-white w-[95vw]  my-10 mx-auto px-5  rounded-3xl">
            {/* <Text className="text-4xl text-center font-semibold text-seconday py-2">BMI</Text> */}
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
          {/* Discover Section with Smooth Slider & Indicators */}
          <View>
            <Text className="text-center text-3xl font-bold text-accent">
              Discover
            </Text>

            <Animated.ScrollView
              horizontal
              pagingEnabled
              showsHorizontalScrollIndicator={false}
              onScroll={scrollHandler}
              scrollEventThrottle={16}
              className="mt-5"
            >
              {/* Slide 1 */}
              <View
                style={{
                  width: CARD_WIDTH,
                  marginHorizontal: 10,
                  borderRadius: 20,
                  overflow: "hidden",
                  backgroundColor: "white",
                }}
              >
                <ImageBackground
                  source={require("../../assets/images/confetti3.jpg")}
                  className="flex-1 justify-center px-5 h-32 w-full"
                  resizeMode="cover"
                >
                  <Text className="text-xl text-white font-bold">
                    Small changes, big results!
                  </Text>
                  <TouchableOpacity
                    activeOpacity={0.7}
                    className="bg-secondary h-8 w-28 rounded-full mt-2"
                  >
                    <Text className="text-white text-lg text-center font-semibold">
                      Track Now
                    </Text>
                  </TouchableOpacity>
                </ImageBackground>
              </View>

              {/* Slide 2 */}
              <View
                style={{
                  width: CARD_WIDTH,
                  marginHorizontal: 10,
                  borderRadius: 20,
                  overflow: "hidden",
                  backgroundColor: "white",
                }}
              >
                <ImageBackground
                  source={require("../../assets/images/confetti3.jpg")}
                  className="flex-1 justify-center px-5"
                  resizeMode="cover"
                >
                  <Text className="text-xl text-white font-bold">
                    Monitor your cycle with ease
                  </Text>
                  <TouchableOpacity
                    activeOpacity={0.7}
                    className="bg-secondary h-8 w-28 rounded-full mt-2"
                  >
                    <Text className="text-white text-lg text-center font-semibold">
                      Join Workout
                    </Text>
                  </TouchableOpacity>
                </ImageBackground>
              </View>

              {/* Slide 3 */}
              <View
                style={{
                  width: CARD_WIDTH,
                  marginHorizontal: 10,
                  borderRadius: 20,
                  overflow: "hidden",
                  backgroundColor: "white",
                }}
              >
                <ImageBackground
                  source={require("../../assets/images/confetti3.jpg")}
                  className="flex-1 justify-center px-5"
                  resizeMode="cover"
                >
                  <Text className="text-xl text-white font-bold">
                    Track of your daily calorie intake
                  </Text>
                  <TouchableOpacity
                    activeOpacity={0.7}
                    className="bg-secondary h-8 w-28 rounded-full mt-2"
                  >
                    <Text className="text-white text-lg text-center font-semibold">
                      Start Now
                    </Text>
                  </TouchableOpacity>
                </ImageBackground>
              </View>
            </Animated.ScrollView>

            {/* Smooth Slider Indicators */}
            <View className="flex-row justify-center mt-3">
              {[...Array(SLIDE_COUNT)].map((_, index) => {
                const animatedStyle = {
                  transform: [
                    {
                      scale: interpolate(
                        scrollX.value,
                        [
                          (index - 1) * CARD_WIDTH,
                          index * CARD_WIDTH,
                          (index + 1) * CARD_WIDTH,
                        ],
                        [0.8, 1.3, 0.8],
                        Extrapolation.CLAMP
                      ),
                    },
                  ],
                  opacity: interpolate(
                    scrollX.value,
                    [
                      (index - 1) * CARD_WIDTH,
                      index * CARD_WIDTH,
                      (index + 1) * CARD_WIDTH,
                    ],
                    [0.3, 1, 0.3],
                    Extrapolate.CLAMP
                  ),
                  backgroundColor: "#FFFFFF",
                  marginHorizontal: 5,
                  borderRadius: 6,
                  width: 10,
                  height: 10,
                };

                return <Animated.View key={index} style={animatedStyle} />;
              })}
            </View>
          </View>
          <View className="flex-row mx-auto mt-2 gap-4">
            <View className="flex justify-evenly">
              <TouchableOpacity
                onPress={() => {
                  router.push("/Steps");
                }}
                className="flex items-center justify-center w-44 h-24 bg-white rounded-3xl border-primary border"
              >
                <Text className="font-semibold">
                  Steps{" "}
                  <Ionicons name="footsteps" size={20} color={"#FFBD73"} />
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  router.push("/Hydration");
                }}
                className="flex items-center justify-center w-44 h-24 bg-white rounded-3xl border-primary border"
              >
                <Text className="font-semibold">
                  Hydration{" "}
                  <Ionicons name="water-outline" size={20} color={"#FFBD73"} />{" "}
                </Text>
              </TouchableOpacity>
            </View>
            <ImageBackground
              source={require("../../assets/images/hero.jpg")}
              className="w-56 h-64 bg-white rounded-3xl overflow-hidden border border-primary"
              resizeMode="cover"
            ></ImageBackground>
          </View>
        </View>
        <ImageBackground
          source={require("../../assets/images/background.jpg")}
          className="flex-row justify-center my-5 border-primary border mx-auto rounded-full bg-secondary overflow-hidden"
        >
          <View className="h-20 w-30 px-5 flex items-center justify-center">
            <Text className="font-bold text-lg text-white ">0.00</Text>
            <Text className=" font-bold text-lg text-white">KCAL</Text>
          </View>
          <View className="h-20 w-30 px-5 flex items-center justify-center">
            <Text className="font-bold text-lg text-white ">0</Text>
            <Text className="font-bold text-lg text-white">WORKOUTS</Text>
          </View>
          <View className="h-20 w-30 px-5 flex items-center justify-center">
            <Text className="font-bold text-lg text-white">0</Text>
            <Text className="font-bold text-lg text-white">MINUTES</Text>
          </View>
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
}
