import { View, Text } from "react-native";
import React from "react";
import tw from "twrnc";

const Text = ({ text, textStyle }) => {
  return (
    <Text
      style={tw.style(`${textStyle}`, {
        fontFamily: "Sans",
      })}
    >
      {text}
    </Text>
  );
};

export default Text;
