import { Stack } from "expo-router";
import React from "react";
import {StatusBar} from 'expo-status-bar'
export default function AuthLayout() {
  return (
    <>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SignIn" />
        <Stack.Screen name="SignUp" />
      </Stack>
      <StatusBar backgroundColor="#323232" style="light"  />
    </>
  );
}
