import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

const workout = () => {
  return (
    <SafeAreaView className="h-full bg-bgnd">
      <ScrollView>
        <ImageBackground
          source={require("@/assets/images/confetti1.png")}
          resizeMode="cover"
          className="h-32 w-[30rem] py-2 flex justify-center mx-auto"
        >
          <Text className="text-xl font-semibold px-7 ">
            Find a plan that suits your needs and helps you follow along and
            reach your goals
          </Text>
        </ImageBackground>
        <TouchableOpacity
          className="my-5 bg-accent border border-primary h-64 w-[28rem] mx-auto rounded-3xl overflow-hidden"
          onPress={() => {
            router.push("/Cardio");
          }}
        >
          <ImageBackground
            source={require("@/assets/images/Cardio.jpg")}
            resizeMode="cover"
            className="h-48 "
          />
          <View className="flex-1 justify-center">
            <Text className="text-2xl font-semibold px-5 text-white">
              Cardio
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          className="my-5 bg-accent border border-primary h-64 w-[28rem] mx-auto rounded-3xl overflow-hidden"
          onPress={() => {
            router.push("/Meditation");
          }}
        >
          <ImageBackground
            source={require("@/assets/images/meditation.jpg")}
            resizeMode="cover"
            className="h-48 "
          />
          <View className="flex-1 justify-center">
            <Text className="text-2xl font-semibold px-5 text-white ">
              Meditation
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          className="my-5 bg-accent border border-primary h-64 w-[28rem] mx-auto rounded-3xl overflow-hidden"
          onPress={() => {
            router.push("/Streching");
          }}
        >
          <ImageBackground
            source={require("@/assets/images/strech.jpg")}
            resizeMode="cover"
            className="h-48 "
          />
          <View className="flex-1 justify-center">
            <Text className="text-2xl font-semibold px-5 text-white">
              Streching
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          className="my-5 bg-accent border border-primary h-64 w-[28rem] mx-auto rounded-3xl overflow-hidden"
          onPress={() => {
            router.push("/Weight");
          }}
        >
          <ImageBackground
            source={require("@/assets/images/wt.jpg")}
            resizeMode="cover"
            className="h-48 "
          />
          <View className="flex-1 justify-center">
            <Text className="text-2xl font-semibold px-5 text-white">
              Weight Training
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          className="my-5 bg-accent border border-primary h-64 w-[28rem] mx-auto rounded-3xl overflow-hidden"
          onPress={() => {
            router.push("/Yoga");
          }}
        >
          <ImageBackground
            source={require("@/assets/images/yoga.jpg")}
            resizeMode="cover"
            className="h-48 "
          />
          <View className="flex-1 justify-center">
            <Text className="text-2xl font-semibold px-5 text-white">Yoga</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          className="my-5 bg-accent border border-primary h-64 w-[28rem] mx-auto rounded-3xl overflow-hidden"
          onPress={() => {
            router.push("/Zumba");
          }}
        >
          <ImageBackground
            source={require("@/assets/images/zoomba.jpg")}
            resizeMode="cover"
            className="h-48 "
          />
          <View className="flex-1 justify-center">
            <Text className="text-2xl font-semibold px-5 text-white">
              Zumba
            </Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default workout;
