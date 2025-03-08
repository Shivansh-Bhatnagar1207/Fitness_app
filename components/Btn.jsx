import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const Btn = ({ title, handlePress, isLoading }) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      className="bg-orange-500 mt-10 rounded-xl min-h-[52px] items-center justify-center"
      style ={{padding : 20,borderRadius : 12}}
      disabled={isLoading}
    >
      <Text className="text-center font-bold text-white">{title}</Text>
    </TouchableOpacity>
  );
};

export default Btn;
