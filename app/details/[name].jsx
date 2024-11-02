import { View, Text, Image } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import tw from "twrnc";
import RText from "../../components/common/RText";
import chair from "../../assets/images/chairXL.png";

const Details = () => {
  const { name } = useLocalSearchParams();

  return (
    <View style={tw`flex-1`}>
      <View style={tw`bg-[#F5F5F5] h-[30rem] pt-[3rem] w-full`}>
        <Image
          source={chair}
          resizeMode="contain"
          style={tw`h-[90%] w-[50%] mx-auto`}
        />
      </View>
    </View>
  );
};

export default Details;
