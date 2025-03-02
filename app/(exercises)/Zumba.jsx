import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import mygif from '../../assets/images/workout/WA_PushUp.gif';
const Yoga = () => {
  return (
    <SafeAreaView className="h-screen bg-bgnd">
      <ScrollView>
        <Text className=" text-center text-4xl font-bold py-5">
          The Excesrces to Yoga you up
        </Text>
        <View className="items-center">
          <Image
            source={mygif}
            className="flex h-52 w-52"
            resizeMode="contain"
          />
          <Text className=" font-semibold py-5">Wide Arm Pushups</Text>

          <Image
            source={require("../../assets/images/workout/WA_PushUp.gif")}
            
            resizeMode="contain"
          />
          <Text className=" font-semibold py-5">Wide Arm Pushups</Text>

          <Image
            source={require("../../assets/images/workout/WA_PushUp.gif")}
            
            resizeMode="contain"
          />
          <Text className=" font-semibold py-5">Wide Arm Pushups</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};



export default Yoga;
