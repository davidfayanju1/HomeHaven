import React from "react";
import { Text as RNText } from "react-native";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";
import tw from "twrnc";

const Text = ({ font, children, style, size = 14, ...props }) => {
  return (
    <RNText
      style={[
        tw``,
        style,
        { fontSize: scale(size), fontFamily: renderFamily(font) },
      ]}
      {...props}
    >
      {children}
    </RNText>
  );
};

const renderFamily = (type) => {
  switch (type) {
    case "bold":
      return "Manrope-bold";
    case "extra-bold":
      return "Manrope-ExtraBold";
    case "light":
      return "Manrope-light";
    default:
      return "TitilliumWeb-Regular";
  }
};

export default Text;
