import {
  View,
  Text,
  ScrollView,
  Image,
  Alert,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../../lib/firebaseConfig";
import { signOut } from "firebase/auth";
import Btn from "@/components/Btn";
import { router } from "expo-router";

export default function Profile() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      const user = auth.currentUser;

      if (!user) {
        Alert.alert("Error", "No user is logged in.");
        setLoading(false);
        return;
      }

      try {
        // Reference the user's document in Firestore
        const userDocRef = doc(db, "users", user.uid);
        const userDocSnap = await getDoc(userDocRef);

        if (userDocSnap.exists()) {
          setUserData(userDocSnap.data());
        } else {
          Alert.alert("Error", "No user data found.");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
        Alert.alert("Error", "Failed to fetch user data.");
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  if (loading) {
    return (
      <SafeAreaView className="bg-[#323232] h-full flex justify-center items-center">
        <ActivityIndicator size="large" color="#fff" />
      </SafeAreaView>
    );
  }

  if (!userData) {
    return (
      <SafeAreaView className="bg-[#323232] h-full flex justify-center items-center">
        <Text className="text-white text-xl">No data to display.</Text>
      </SafeAreaView>
    );
  }

  const handleLogout = async () => {
    try {
      await signOut(auth); // Logs the user out
      Alert.alert("Success", "You have been logged out.");
      router.replace("/SignIn"); // Redirect to the Sign In page
    } catch (error) {
      console.error("Logout error:", error);
      Alert.alert("Error", "Failed to log out. Please try again.");
    }
  };

  return (
    <SafeAreaView className="bg-[#323232] h-full">
      <ScrollView>
        <View className="w-full h-full justify-center min-h-[85vh] px-4 my-6 ">
          <Image
            source={require("../../assets/images/logo.png")}
            resizeMode="contain"
            className="w-[115px] h-[35px] mx-auto"
          />
          <Text className="text-semibold text-white text-2xl mt-10">
            Profile Information
          </Text>

          <View className="mt-5">
            <Text className="text-lg text-white">Name: {userData.name}</Text>
            <Text className="text-lg text-white">
              Phone: {userData.PhoneNo}
            </Text>
            <Text className="text-lg text-white">
              Date of Birth: {userData.DateOfBirth}
            </Text>
            <Text className="text-lg text-white">
              Height: {userData.Height}
            </Text>
            <Text className="text-lg text-white">
              Weight: {userData.Weight}
            </Text>
            <Text className="text-lg text-white">
              Gender: {userData.Gender}
            </Text>
          </View>
          <Btn title='Sign Out' handlePress={handleLogout}/>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
