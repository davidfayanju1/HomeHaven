import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import tw from "twrnc";
import RText from "./RText";

const Button = ({
  title,
  containerStyle,
  textStyle,
  handlePress,
  backgroundColor = "bg-[#156651]",
  radius = "rounded-[9px]",
  height = "h-[3.4rem]",
  textColor = "text-white",
}) => {
  return (
    <TouchableOpacity
      style={tw`${containerStyle} ${backgroundColor} ${radius} ${height} items-center justify-center text-center`}
      onPress={handlePress}
    >
      <RText textStyle={`font-bold ${textColor} text-[1.12rem] ${textStyle}`}>
        {title}
      </RText>
    </TouchableOpacity>
  );
};

export default Button;
