import { Tabs } from "expo-router";
import React from "react";
import { View } from "react-native";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import { UserProvider } from "../../context/UserContext";
export default function TabsLayout() {
  return (
    <UserProvider>
      <Tabs
        screenOptions={{
          headerStyle: {
            backgroundColor: "#d8b4fe",
          },
          tabBarShowLabel: false,
          tabBarActiveTintColor: "#d8b4fe",
          tabBarInactiveTintColor: "gray",
          tabBarStyle: { backgroundColor: "black" },
        }}
      >
        <Tabs.Screen
          name="Home"
          options={{
            tabBarIcon: ({ color }) => (
              <View>
                <FontAwesome5 name="home" color={color} size={20} />
              </View>
            ),
          }}
        />
        <Tabs.Screen
          name="Workout"
          options={{
            headerTitle: "Select Workout",
            headerTitleAlign: "center",
            tabBarIcon: ({ color }) => (
              <FontAwesome5 name="weight-hanging" color={color} size={20} />
            ),
          }}
        />
        <Tabs.Screen
          name="Profile"
          options={{
            tabBarIcon: ({ color }) => (
              <FontAwesome5 name="user-alt" color={color} size={20} />
            ),
          }}
        />
      </Tabs>
    </UserProvider>
  );
}
