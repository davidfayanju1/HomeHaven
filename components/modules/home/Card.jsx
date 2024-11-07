import { View, Image, TouchableOpacity } from "react-native";
import React from "react";
import tw from "twrnc";
import RText from "../../common/RText";
import { Star } from "../../../assets/icons/TabsIcons";
import Tag from "../../common/Tag";
import { router } from "expo-router";
import Text from "../../../lib/Text";

export const CardSmall = ({ item }) => {
  return (
    <TouchableOpacity
      style={tw`bg-white w-[12rem] shadow-md mr-3 rounded-[15px] p-4 pt-5 pb-7 min-h-[12rem]`}
      onPress={() => router.push(`/details/${item.name}`)}
    >
      <View style={tw`h-[10rem] w-full relative`}>
        <Image
          source={item.img}
          resizeMod="contain"
          style={tw`w-full h-full`}
        />
        <Tag tagStyle={"absolute bottom-[-6%]"} />
      </View>

      <View style={tw`pt-6`}>
        <Text size={17.9} font={"light"}>
          {item.name}
        </Text>
        <RText textStyle={"text-[1.75rem] text-[#404040]"} title="title">
          {item.price}
        </RText>
        <Text style={tw`line-through mb-2`} size={14} font={"light"}>
          {item.prevPrice}
        </Text>
        <View style={tw`flex-row items-center gap-1`}>
          <Star />
          <RText>{`${item.rating}(${item.number})`}</RText>
        </View>
      </View>
    </TouchableOpacity>
  );
};
