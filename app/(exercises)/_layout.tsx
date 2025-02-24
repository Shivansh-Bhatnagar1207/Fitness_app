import { Stack } from "expo-router";
import React from "react";
export default function ExerciseLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#FF9D3D",
        },
        headerTintColor: "white",
      }}
    >
      <Stack.Screen name="Weight" />
      <Stack.Screen name="Zumba" />
      <Stack.Screen name="Cardio" />
      <Stack.Screen name="Streching" />
      <Stack.Screen name="Meditation" />
      <Stack.Screen name="Yoga" />
    </Stack>
  );
}
