import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const Btn = ({ title, handlePress ,isLoading}) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      className="mt-20 bg-purple-300 rounded-xl min-h-[52px] items-center justify-center "
      disabled={isLoading}
    >
      <Text className="text-center font-bold">{title}</Text>
    </TouchableOpacity>
  );
};

export default Btn;
