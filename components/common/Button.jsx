import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import tw from "twrnc";

const Button = ({ title, containerStyle, textStyle, handlePress }) => {
  return (
    <TouchableOpacity
      style={tw`${containerStyle} theme bg-[#156651] h-[3.4rem] rounded-[6px] items-center justify-center text-center`}
      onPress={handlePress}
    >
      <Text
        style={tw.style(
          `${textStyle} font-semibold text-white text-[1.12rem]`
          //   {
          //     fontFamily: "Uber-medium",
          //   }
        )}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
