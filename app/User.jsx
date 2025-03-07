import { View, Text, ScrollView, Image, Alert } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import FormField from "@/components/FormField";
import Btn from "@/components/Btn";
import { router } from "expo-router";
import { auth, db } from "@/lib/firebaseConfig";
import { doc, setDoc } from "firebase/firestore";
export default function User() {
  const [form, setForm] = useState({
    name: "",
    PhoneNo: "",
    DateOfBirth: "",
    Height: "",
    Weight: "",
    Gender: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const submit = async () => {
    const user = auth.currentUser;

    if (!user) {
      Alert.alert("ERROR", "No User Logged In");
      return;
    }

    const { name, PhoneNo, DateOfBirth, Height, Weight, Gender } = form;

    // Validation
    if (!name) {
      Alert.alert("Error", "Please fill in your name.");
      return;
    }
    if (!PhoneNo) {
      Alert.alert("Error", "Please fill in your phone number.");
      return;
    }
    if (!DateOfBirth) {
      Alert.alert("Error", "Please fill in your date of birth.");
      return;
    }
    if (!Height) {
      Alert.alert("Error", "Please fill in your height.");
      return;
    }
    if (!Weight) {
      Alert.alert("Error", "Please fill in your weight.");
      return;
    }
    if (!Gender) {
      Alert.alert("Error", "Please select your gender.");
      return;
    }

    setIsSubmitting(true);

    try {
      // Save data to Firestore
      const userDocRef = doc(db, "users", user.uid); // Reference to the user document
      await setDoc(userDocRef, {
        name,
        PhoneNo,
        DateOfBirth,
        Height,
        Weight,
        Gender,
      });

      Alert.alert("Success", "Your details have been saved!");
      router.replace("/Home"); // Navigate to the next screen
    } catch (error) {
      console.error("Error saving user data:", error);
      Alert.alert("Error", "Failed to save your details. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SafeAreaView className=" bg-bgnd">
      <ScrollView>
        <View className="w-full h-full justify-center  min-h-[85vh] px-4 my-6 ">
          <Image
            source={require("@/assets/images/fitness.png")}
            resizeMode="cover"
            className="w-full h-32 "
          />
          <Text className="font-bold text-center text-2xl">User Details</Text>

          <FormField
            title="Name"
            value={form.name}
            handleChangeText={(e) => setForm({ ...form, name: e })}
            placeholder={"John Doe"}
            otherStyle={"mt-5"}
          />
          <FormField
            title="Phone"
            value={form.PhoneNo}
            handleChangeText={(e) => setForm({ ...form, PhoneNo: e })}
            placeholder={"987654321"}
            otherStyle={"mt-5"}
          />
          <FormField
            title="Date of Birth"
            value={form.DateOfBirth}
            handleChangeText={(e) => setForm({ ...form, DateOfBirth: e })}
            keyboardType="Date"
            placeholder={"01-01-2000"}
            otherStyle={"mt-5"}
          />
          <FormField
            title="Height"
            value={form.Height}
            handleChangeText={(e) => setForm({ ...form, Height: e })}
            placeholder={"in Meter"}
            otherStyle={"mt-5"}
          />
          <FormField
            title="Weight"
            value={form.Weight}
            handleChangeText={(e) => setForm({ ...form, Weight: e })}
            placeholder={"60 kg"}
            otherStyle={"mt-5"}
          />
          <FormField
            title="Gender"
            value={form.Gender}
            handleChangeText={(e) => setForm({ ...form, Gender: e })}
            placeholder={"Male"}
            otherStyle={"mt-5"}
          />
          <Btn
            title={"Next Step"}
            handlePress={submit}
            isLoading={isSubmitting}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
