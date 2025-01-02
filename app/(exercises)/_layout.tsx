import { Stack } from "expo-router";
import React from "react";
export default function ExerciseLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#d8b4fe",
        },
        headerBackVisible: false,
      }}
    >
      <Stack.Screen name="Bulk" />
      <Stack.Screen name="Lean" />
      <Stack.Screen name="Fit" />
      <Stack.Screen name="Yoga" />
    </Stack>
  );
}
