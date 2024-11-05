import { View, Text } from "react-native";
import React from "react";
import RText from "./RText";
import tw from "twrnc";

const Tag = ({ tagStyle }) => {
  return (
    <View
      style={tw`w-[3.8rem] ${tagStyle} h-[1.7rem] bg-[#E44A4A] rounded-br-[9px] rounded-tl-[9px] item-center justify-center p-1`}
    >
      <RText textStyle={"text-center text-white text-[13px]"}>45% OFF</RText>
    </View>
  );
};

export default Tag;
