import { View, Text, ScrollView, Image } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import FormField from "../../components/FormField";
import Btn from "@/components/Btn";
import { Link } from "expo-router";

const SignIn = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = () => {};

  return (
    <SafeAreaView className="bg-[#323232] h-full">
      <ScrollView>
        <View className="w-full h-full justify-center min-h-[85vh] px-4 my-6 ">
          <Image
            source={require("../../assets/images/logo.png")}
            resizeMode="contain"
            className="w-[115px] h-[35px]"
          />
          <Text className="text-semibold text-white text-2xl mt-10">
            Log into Fitness App
          </Text>

          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e: any) => setForm({ ...form, email: e })}
            keyboardType="email-address"
            placeholder={"JohnDoe@gmail.com"}
            otherStyle={"mt-5"}
          />
          <FormField
            title="password"
            value={form.password}
            handleChangeText={(e: any) => setForm({ ...form, password: e })}
            keyboardType="email-address"
            placeholder={"************"}
            otherStyle={"mt-5"}
          />
          <Btn
            title={"Sign In"}
            handlePress={submit}
            isLoading={isSubmitting}
          />
          <View className="justify-center pt-5 flex-row gap-2"><Text className="text-lg text-gray-500 font-bold">do not have an account?</Text><Link href={'/SignUp'} className="text-lg text-orange-400">Sign Up</Link></View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
