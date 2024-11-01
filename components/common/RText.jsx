import { View, Text } from "react-native";
import React from "react";
import tw from "twrnc";

const RText = ({
  numberOfLines,
  children,
  textStyle,
  ellipsizeMode,
  title = "text",
}) => {
  return (
    <Text
      style={tw.style(`${textStyle}`, {
        fontFamily: title === "title" ? "Manrope-ExtraBold" : "Manrope",
      })}
      numberOfLines={numberOfLines}
      ellipsizeMode={ellipsizeMode}
    >
      {children}
    </Text>
  );
};

export default RText;
