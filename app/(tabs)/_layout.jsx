import { Tabs } from "expo-router";
import React from "react";
import { View } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { UserProvider } from "../../context/UserContext";
export default function TabsLayout() {
  return (
    <UserProvider>
      <Tabs
        screenOptions={{
          headerStyle: {
            backgroundColor: "#FFA500",
          },
          headerTintColor: "white",
          tabBarShowLabel: false,
          tabBarActiveTintColor: "#FFA500",
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
