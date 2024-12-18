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

export default function Home() {
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

  const { name, Height, Weight } = userData || {};

  let BMI = Weight / (Height * Height);
  BMI = BMI.toFixed(2);

  let category;
  if (BMI < 18.5) {
    category = "Underweight";
  } else if (BMI >= 18.5 && BMI < 24.9) {
    category = "Normal weight";
  } else if (BMI >= 25 && BMI < 29.9) {
    category = "Overweight";
  } else {
    category = "Obesity";
  }

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

  return (
    <SafeAreaView className="bg-[#323232] h-full">
      <ScrollView>
        <View className="w-full h-full p-10 min-h-[85vh]  ">
          <Image
            source={require("../../assets/images/logo.png")}
            resizeMode="contain"
            className="w-[115px] h-[35px] mx-auto"
          />
          <Text className="text-semibold text-white text-2xl mt-10 text-center">
            Welcome {name}
          </Text>

          <View className="h-64 w-[85vw] bg-white my-10 px-5 rounded-md">
            <Text className="text-4xl text-center font-bold py-2">BMI</Text>
            <Text className="text-l font-semibold">Height : {Height} ft</Text>
            <Text className="text-l font-semibold">Weight : {Weight} Kg</Text>
            <Text className="text-center">
              On Calculating your BMI is as follows:
            </Text>
            <Text className="text-center">{BMI}</Text>
            <Text>According to this you are {category}</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
