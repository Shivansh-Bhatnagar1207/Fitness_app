import { Tabs } from "expo-router";
import React from "react";
export default function ExerciseLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false}}>
      <Tabs.Screen name="Bulk" />
      <Tabs.Screen name="Lean" />
      <Tabs.Screen name="Fit" />
      <Tabs.Screen name="Yoga" />
    </Tabs>
  );
}
