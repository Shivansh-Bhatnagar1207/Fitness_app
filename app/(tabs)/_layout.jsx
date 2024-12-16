import { Tabs } from "expo-router";
import React from "react";
import { View } from "react-native";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false, // Disable headers for all tabs
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#d8b4fe",
        tabBarInactiveTintColor: "gray",
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          tabBarIcon: ({ color }) => (
            <View>
              <FontAwesome5 name="home" color={color} size={20} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="workout"
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="weight-hanging" color={color} size={20} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="user-alt" color={color} size={20} />
          ),
        }}
      />
    </Tabs>
  );
}
