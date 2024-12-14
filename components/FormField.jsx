import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { FontAwesome5 } from "@expo/vector-icons";

const FormField = ({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyle,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View className={`${otherStyle}`}>
      <Text className="text-white text-xl mx-3">{title}:</Text>
      <View
        className={`border-2 w-full h-14 rounded-2xl items-center flex-row `}
        style={{
          borderColor: "white",
          backgroundColor: "#1c1c1e",
          flexDirection: "row",
          justifyContent: "space-between",
          paddingInline: 10,
        }} // Adjust contrast
      >
        <TextInput
          className=" text-white font-bold text-base"
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#7b7b8b"
          onChangeText={handleChangeText}
          secureTextEntry={title === "password" && !showPassword}
        />
        {title === "password" && (
          <TouchableOpacity
            onPress={() => {
              setShowPassword(!showPassword);
            }}
          >
            <FontAwesome5 name="eye" size={20} color="#7b7b8b" />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;
