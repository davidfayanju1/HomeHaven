import { View, Text, Image } from "react-native";
import React from "react";
import tw from "twrnc";
import chair from "../../../assets/images/chair.png";
import RText from "../../common/RText";
import { Star } from "../../../assets/icons/TabsIcons";

export const CardSmall = ({ item }) => {
  return (
    <View
      style={tw`bg-white w-[11rem] mr-5 rounded-[15px] p-3 pt-5 pb-9 min-h-[15rem]`}
    >
      <View style={tw`h-[10rem] w-full`}>
        <Image source={chair} style={tw`w-full h-full`} />
      </View>

      <View style={tw`pt-3`}>
        <RText textStyle={"text-[1.3rem]"}>{item.name}</RText>
        <RText textStyle={"text-[1.6rem]"} title="title">
          {item.price}
        </RText>
        <RText textStyle={"line-through text-[1.1rem]"}>{item.prevPrice}</RText>
        <View style={tw`flex-row items-center gap-1`}>
          <Star />
          <RText>{`${item.rating}(${item.number})`}</RText>
        </View>
      </View>
    </View>
  );
};
