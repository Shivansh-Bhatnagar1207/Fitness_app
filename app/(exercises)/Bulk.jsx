import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const Bulk = () => {
  return (
    <SafeAreaView className="h-screen bg-[#323232]">
      <Text className="text-white text-center text-4xl font-bold py-5">
        The Excesrces to Bulk you up
      </Text>
      <ScrollView>
        <View className="items-center">
          <Image
            source={require("../../assets/images/workout/WA_PushUp.gif")}
            style={styles.container}
            resizeMode="contain"
          />
          <Text className="text-white font-semibold py-5">
            Wide Arm Pushups
          </Text>

          <Image
            source={require("../../assets/images/workout/WA_PushUp.gif")}
            style={styles.container}
            resizeMode="contain"
          />
          <Text className="text-white font-semibold py-5">
            Wide Arm Pushups
          </Text>

          <Image
            source={require("../../assets/images/workout/WA_PushUp.gif")}
            style={styles.container}
            resizeMode="contain"
          />
          <Text className="text-white font-semibold py-5">
            Wide Arm Pushups
          </Text>
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

export default Bulk;
