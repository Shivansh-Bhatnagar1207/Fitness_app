import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { Switch } from "react-native";

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
      <Text className="text-xl mx-3 font-extrabold">{title}:</Text>
      <View
        className={`border-2 w-full h-14 items-center flex-row rounded-xl`}
        style={{
          borderColor: "black",
          borderStyle: "solid",
          borderWidth: 1,
          flexDirection: "row",
          justifyContent: "space-between",
          paddingInline: 10,
        }} // Adjust contrast
      >
        <TextInput
          className="text-base w-full "
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#7b7b8b"
          onChangeText={handleChangeText}
          secureTextEntry={title === "password" && !showPassword}
        />
      </View>
      {title === "password" && (
        <>
          <View className="flex-row items-center justify-between">
            <Text className="text-sm text-gray-700">Show Password</Text>
            <Switch
              value={showPassword}
              onValueChange={(value) => setShowPassword(value)}
              thumbColor={showPassword ? "#FFB74D" : "#D1D5DB"}
              trackColor={{ false: "#D1D5DB", true: "#FFB74D" }}
            />
          </View>
        </>
      )}
    </View>
  );
};

export default FormField;
