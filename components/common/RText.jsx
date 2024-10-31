import { View, Text } from "react-native";
import React from "react";
import tw from "twrnc";

const RText = ({ children, textStyle, title = "text" }) => {
  return (
    <Text
      style={tw.style(`${textStyle}`, {
        fontFamily: title === "title" ? "Manrope-ExtraBold" : "Manrope",
      })}
    >
      {children}
    </Text>
  );
};

export default RText;
