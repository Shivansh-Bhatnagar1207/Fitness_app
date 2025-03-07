import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { auth } from "@/lib/firebaseConfig";
import Btn from "@/components/Btn";
import { useUser } from "@/context/UserContext";
import { router } from "expo-router";

export default function Profile() {
  const { user, userData, loading } = useUser();

  const handleLogout = async () => {
    try {
      await auth.signOut();
      console.log("User logged out!");
      router.navigate("/SignIn");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  if (!user) {
    return <Text className="text-black">No user logged in.</Text>;
  }

  return (
    <SafeAreaView className="bg-bgnd h-full">
      <ScrollView>
        <View className="py-10">
          <Image
            source={require("@/assets/images/fitness.png")}
            className="w-full h-[84px] "
            resizeMode="cover"
          />
          <Text className="font-bold text-2xl text-center mt-10">
            Profile Information
          </Text>

          <View className=" gap-4 items-center mt-10">
            <View className="h-16 w-[80%] bg-white border justify-center rounded-3xl">
              <Text className="text-center font-bold text-lg">
                Name : <Text className="font-normal">{userData.name}</Text>
              </Text>
            </View>
            <View className="h-16 w-[80%] bg-white border justify-center rounded-3xl">
              <Text className="text-center font-bold text-lg">
                Phone : <Text className="font-normal">{userData.PhoneNo}</Text>
              </Text>
            </View>
            <View className="h-16 w-[80%] bg-white border justify-center rounded-3xl">
              <Text className="text-center font-bold text-lg">
                Date Of Birth :{" "}
                <Text className="font-normal">{userData.DateOfBirth}</Text>
              </Text>
            </View>
            <View className="h-16 w-[80%] bg-white border justify-center rounded-3xl">
              <Text className="text-center font-bold text-lg">
                Height :{" "}
                <Text className="font-normal">{userData.Height} M</Text>
              </Text>
            </View>
            <View className="h-16 w-[80%] bg-white border justify-center rounded-3xl">
              <Text className="font-bold text-center">
                Weight :{" "}
                <Text className="font-normal">{userData.Weight} KG</Text>
              </Text>
            </View>
            <View className="h-16 w-[80%] bg-white border justify-center rounded-3xl">
              <Text className="text-center font-bold text-lg">
                Gender : <Text className="font-normal">{userData.Gender}</Text>
              </Text>
            </View>
          </View>
          <View className="w-[90%] mx-auto">
            <Btn title="Sign Out" handlePress={handleLogout} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
