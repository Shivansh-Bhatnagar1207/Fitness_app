import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const Yoga = () => {
  return (
    <SafeAreaView className="h-screen bg-bgnd">
      <Text className=" text-center text-4xl font-bold py-5">
        The Excesrces to Yoga you up
      </Text>
      <ScrollView>
        <View className="items-center">
          <Image
            source={require("@/assets/images/workout/WA_PushUp.gif")}
            style={styles.container}
            resizeMode="contain"
          />
          <Text className=" font-semibold py-5">Wide Arm Pushups</Text>

          <Image
            source={require("@/assets/images/workout/WA_PushUp.gif")}
            style={styles.container}
            resizeMode="contain"
          />
          <Text className=" font-semibold py-5">Wide Arm Pushups</Text>

          <Image
            source={require("@/assets/images/workout/WA_PushUp.gif")}
            style={styles.container}
            resizeMode="contain"
          />
          <Text className=" font-semibold py-5">Wide Arm Pushups</Text>
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
