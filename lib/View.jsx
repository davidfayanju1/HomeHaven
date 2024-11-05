import React from "react";
import { View as RNView } from "react-native";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";
import tw from "twrnc";

const View = ({ children, style, padding = 5, margin = 5, ...props }) => {
  return (
    <RNView
      style={[
        tw``,
        {
          padding: moderateScale(padding),
          margin: moderateScale(margin),
        },
        style,
      ]}
      {...props}
    >
      {children}
    </RNView>
  );
};

export default View;
