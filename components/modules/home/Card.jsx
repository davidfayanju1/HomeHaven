import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import tw from "twrnc";
import RText from "../../common/RText";
import { Star } from "../../../assets/icons/TabsIcons";
import Tag from "../../common/Tag";
import { router } from "expo-router";

export const CardSmall = ({ item }) => {
  return (
    <TouchableOpacity
      style={tw`bg-white w-[11rem] mr-5 rounded-[15px] p-3 pt-5 pb-9 min-h-[12rem]`}
      onPress={() => router.push(`/details/${item.name}`)}
    >
      <View style={tw`h-[9rem] w-full relative`}>
        <Image
          source={item.img}
          resizeMod="contain"
          style={tw`w-full h-full`}
        />
        <Tag tagStyle={"absolute bottom-0"} />
      </View>

      <View style={tw`pt-3`}>
        <RText textStyle={"text-[1.3rem]"}>{item.name}</RText>
        <RText textStyle={"text-[1.75rem] text-[#404040]"} title="title">
          {item.price}
        </RText>
        <RText textStyle={"line-through text-[1.1rem] mb-2"}>
          {item.prevPrice}
        </RText>
        <View style={tw`flex-row items-center gap-1`}>
          <Star />
          <RText>{`${item.rating}(${item.number})`}</RText>
        </View>
      </View>
    </TouchableOpacity>
  );
};
