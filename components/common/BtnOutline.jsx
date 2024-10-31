import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import RText from "./RText";
import tw from "twrnc";
import { FacebookIcon, GoogleIcon } from "../../assets/icons/FormIcons";

const BtnOutline = ({
  title,
  label = "google",
  containerStyle,
  textStyle,
  handlePress,
}) => {
  return (
    <TouchableOpacity
      style={tw`${containerStyle} flex-row items-center gap-3 border-solid border-[1px] bg-transparent border-[#156651] h-[3.4rem] rounded-[6px] items-center justify-center text-center`}
      onPress={handlePress}
    >
      {label === "google" ? <GoogleIcon /> : <FacebookIcon />}

      <RText textStyle={`font-bold text-[#156651] text-[1.12rem] ${textStyle}`}>
        {title}
      </RText>
    </TouchableOpacity>
  );
};

export default BtnOutline;
