import React from "react";
import { TouchableOpacity, Text } from "react-native";
import tw from "twrnc";

const ButtonComp = ({
  onPress,
  title,
  size = "medium",
  disabled = false,
  style,
  textStyle,
}) => {
  const buttonStyles = [
    tw`bg-blue-500 rounded-full justify-center items-center my-2`,
    size === "small" && tw`py-2 px-4`,
    size === "medium" && tw`py-3 px-6`,
    size === "large" && tw`py-4 px-8`,
    disabled && tw`bg-gray-500`,
    style,
  ];

  const textStyles = [tw`text-white font-bold`, textStyle];

  return (
    <TouchableOpacity
      style={buttonStyles}
      onPress={onPress}
      activeOpacity={0.7}
      disabled={disabled}
    >
      <Text style={textStyles}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ButtonComp;
