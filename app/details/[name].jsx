import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import tw from "twrnc";
import RText from "../../components/common/RText";
import chair from "../../assets/images/chairXL.png";
import Tag from "../../components/common/Tag";
import { Star } from "../../assets/icons/TabsIcons";
import smallie from "../../assets/images/smallerImages/smallie.png";
import smallie1 from "../../assets/images/smallerImages/smallie3.png";
import smallie2 from "../../assets/images/smallerImages/smallie4.png";
import smallie3 from "../../assets/images/smallerImages/smallie2.png";

const Details = () => {
  const { name } = useLocalSearchParams();

  return (
    <ScrollView showsHorizontalScrollIndicator={false}>
      <View style={tw`flex-1`}>
        <View style={tw`bg-[#F5F5F5] relative h-[30rem] pt-[3rem] w-full`}>
          <Image
            source={chair}
            resizeMode="contain"
            style={tw`h-[90%] w-[50%] mx-auto`}
          />

          <View
            style={tw`flex-row absolute w-full bottom-[5%]  items-center justify-center mx-auto gap-9`}
          >
            {/* small cards for each image */}

            <TouchableOpacity style={tw`rounded-[15px] overflow-hidden`}>
              <Image source={smallie3} />
            </TouchableOpacity>
            <TouchableOpacity style={tw`rounded-[15px] overflow-hidden`}>
              <Image source={smallie1} />
            </TouchableOpacity>
            <TouchableOpacity style={tw`rounded-[15px] overflow-hidden`}>
              <Image source={smallie} />
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={tw`w-full bg-white h-full p-5 rounded-tr-[11px] rounded-tl-[11px]`}
        >
          <RText textStyle={"text-black font-light text-7"}>EKERO</RText>
          <View style={tw`flex-row items-center gap-2`}>
            <RText textStyle={"font-bold text-[2.5rem]"}>$123.55</RText>
            <RText textStyle={"line-through text-[1.1rem]"}>$512.66</RText>
            <Tag />
          </View>
          <View style={tw`flex-row items-center gap-2 mt-3`}>
            <Star />
            <RText>4.9 (256)</RText>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Details;
