import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const Btn = ({ title, handlePress }) => {
  return (
    <TouchableOpacity onPress={handlePress} activeOpacity={0.7}>
      <Text className="text-center font-bold">{title}</Text>
    </TouchableOpacity>
  ); 
};

export default Btn;
