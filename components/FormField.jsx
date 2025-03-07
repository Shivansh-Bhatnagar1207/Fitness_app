import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Switch } from "react-native";

type props = {
  title: string,
  value: string,
  placeholder: string,
  handleChangeText: any,
};
const FormField = ({
  title,
  value,
  placeholder,
  handleChangeText,
  ...props
}: props) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View>
      <Text
        className="text-xl mx-3 font-extrabold "
        style={{ fontWeight: "bold", paddingInline: 8, marginBlock: 2 }}
      >
        {title}:
      </Text>
      <View
        className={`border-2 w-full h-14 items-center flex-row rounded-xl`}
        style={{
          borderColor: "black",
          borderStyle: "solid",
          borderWidth: 1,
          flexDirection: "row",
          justifyContent: "space-between",
          paddingInline: 10,
          height: 50,
        }}
      >
        <TextInput
          className="text-base w-full "
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#7b7b8b"
          onChangeText={handleChangeText}
          secureTextEntry={title === "Password" && !showPassword}
        />
      </View>
      {title === "Password" && (
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
