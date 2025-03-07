import { View, Text, ScrollView, Image, Alert } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import FormField from "@/components/FormField";
import Btn from "@/components/Btn";
import { Link, router } from "expo-router";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "@/lib/firebaseConfig";
const SignUp = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = async () => {
    const { email, password, username } = form;

    if (!username || !email || !password) {
      Alert.alert("Error", "All fields are required.");
      return;
    }

    setIsSubmitting(true);

    try {
      // Firebase authentication
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      // Optional: Update the user's display name

      // Update user's display name
      await updateProfile(user, {
        displayName: username,
      });

      Alert.alert("Success", "Account created successfully!");
      setForm({ username: "", email: "", password: "" });
      router.replace("/User"); // Navigate to Sign-In page
    } catch (error: any) {
      setForm({ username: "", email: "", password: "" });
      console.error(error.message);
      Alert.alert("Error", error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SafeAreaView className="bg-bgnd h-full">
      <ScrollView>
        <View className="w-full h-full justify-center min-h-[85vh] px-4 my-6 ">
          <Image
            source={require("@/assets/images/fitness.png")}
            className="w-full h-[85px] "
            resizeMode="cover"
          />
          <Text className="text-semibold text-center text-2xl mt-10">
            Sign Up in Fitness App
          </Text>
          <View className="w-[85%] mx-auto">
            <FormField
              title="Name"
              value={form.username}
              handleChangeText={(e: any) => setForm({ ...form, username: e })}
              placeholder={"John Doe"}
              otherStyle={"mt-5"}
            />
          

            <FormField
              title="Password"
              value={form.password}
              handleChangeText={(e: any) => setForm({ ...form, password: e })}
              keyboardType="email-address"
              placeholder={"************"}
              otherStyle={"mt-5"}
            />
            <Btn
              title={"Sign Up"}
              handlePress={submit}
              isLoading={isSubmitting}
            />
          </View>
          {/* </View> */}
          <View className="justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-gray-500 font-bold">
              have an account already?
            </Text>
            <Link href={"/SignIn"} className="text-lg text-orange-400">
              Sign In
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
