import { Stack } from "expo-router";
import React from "react";
import "@/global.css";
export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="User" />
      <Stack.Screen
        name="Steps"
        options={{
          headerShown: true,
          headerTintColor: "white",
          headerStyle: { backgroundColor: "#FF9D3D" },
        }}
      />
      <Stack.Screen
        name="Hydration"
        options={{
          headerShown: true,
          headerTintColor: "white",
          headerStyle: { backgroundColor: "#FF9D3D" },
        }}
      />
      <Stack.Screen name="(tabs)" />
      <Stack.Screen name="(auth)" />
    </Stack>
  );
}
