import { View, Text } from "react-native";
import React from "react";
import RText from "./RText";

const BtnOutline = ({ title, containerStyle, textStyle, handlePress }) => {
  return (
    <TouchableOpacity
      style={tw`${containerStyle} border-solid border-[1px] bg-transparent border-[#156651] h-[3.4rem] rounded-[6px] items-center justify-center text-center`}
      onPress={handlePress}
    >
      <RText textStyle={`font-semibold text-white text-[1.12rem] ${textStyle}`}>
        {title}
      </RText>
    </TouchableOpacity>
  );
};

export default BtnOutline;
