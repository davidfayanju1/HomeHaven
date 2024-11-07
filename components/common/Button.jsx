import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import tw from "twrnc";
import RText from "./RText";
import { ActivityIndicator } from "react-native-paper";

const Button = ({
  title,
  containerStyle,
  textStyle,
  handlePress,
  backgroundColor = "bg-[#156651]",
  radius = "rounded-[9px]",
  height = "h-[3.2rem]",
  textColor = "text-white",
  textSize = "text-[1.18rem]",
  isLoading,
}) => {
  return (
    <TouchableOpacity
      style={tw`${containerStyle} flex-row items-center justify-center gap-4 ${backgroundColor} ${radius} ${height} items-center justify-center text-center`}
      onPress={handlePress}
    >
      {isLoading && (
        <View>
          <ActivityIndicator color="#FFFFFF" />
        </View>
      )}

      <RText textStyle={`font-bold ${textColor} ${textSize} ${textStyle}`}>
        {title}
      </RText>
    </TouchableOpacity>
  );
};

export default Button;
