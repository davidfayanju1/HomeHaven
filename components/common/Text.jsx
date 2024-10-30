import { View, Text } from "react-native";
import React from "react";
import tw from "twrnc";

const Text = ({ children, textStyle, title = "text" }) => {
  return (
    <Text
      style={tw.style(`${textStyle}`, {
        fontFamily: title === "title" ? "Manrope-bold" : "Manrope",
      })}
    >
      {children}
    </Text>
  );
};

export default Text;
