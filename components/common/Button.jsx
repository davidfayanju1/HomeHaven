import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import tw from "twrnc";
import RText from "./RText";

const Button = ({ title, containerStyle, textStyle, handlePress }) => {
  return (
    <TouchableOpacity
      style={tw`${containerStyle} bg-[#156651] h-[3.4rem] rounded-[6px] items-center justify-center text-center`}
      onPress={handlePress}
    >
      <RText textStyle={`font-semibold text-white text-[1.12rem] ${textStyle}`}>
        {title}
      </RText>
    </TouchableOpacity>
  );
};

export default Button;
