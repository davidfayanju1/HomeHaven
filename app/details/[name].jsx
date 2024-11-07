import { View, Image, ScrollView, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import { useLocalSearchParams } from "expo-router";
import tw from "twrnc";
import RText from "../../components/common/RText";
import chair from "../../assets/images/chairXL.png";
import Tag from "../../components/common/Tag";
import { HeartIconOutline, Star } from "../../assets/icons/TabsIcons";
import smallie from "../../assets/images/smallerImages/smallie.png";
import smallie1 from "../../assets/images/smallerImages/smallie3.png";
import smallie3 from "../../assets/images/smallerImages/smallie2.png";
import Text from "../../lib/Text";
import Button from "../../components/common/Button";
import BtnOutline from "../../components/common/BtnOutline";
import background from "../../assets/images/smallerImages/background.png";

const Details = () => {
  const { name } = useLocalSearchParams();

  const [active, setActive] = useState(null);

  const colorsArray = [
    {
      name: "Harvest Gold",
      color: "#E3AD33",
    },
    {
      name: "Earnie Black",
      color: "#1A1919",
    },
  ];

  const item = {
    name: "EKERO",
    price: "$123.55",
    prevPrice: "$512.66",
    pictures: [
      {
        url: background,
      },
      {
        url: smallie1,
      },
      {
        url: smallie,
      },
    ],
    colors: [
      {
        name: "Harvest Gold",
        color: "#E3AD33",
      },
      {
        name: "Earnie Black",
        color: "#1A1919",
      },
    ],

    description:
      "A minimalist chair with a reversible back cushion provides soft support for your back and has two sides to wear.",
  };

  useEffect(() => {
    setActive(item.pictures[0].url);
  }, []);

  const changeBackground = (image) => {
    setActive(image);
  };

  return (
    <View style={tw`flex-1`}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={tw``}>
          <View style={tw`bg-[#F5F5F5] relative h-[26rem] pt-[3rem] w-full`}>
            <Image
              source={active}
              resizeMode="cover"
              style={tw`h-full w-[90%] mx-auto`}
            />
          </View>
          <View
            style={tw`flex-row w-full pb-4  items-center justify-center mx-auto gap-5`}
          >
            {item.pictures.map((item) => (
              <TouchableOpacity
                onPress={() => changeBackground(item.url)}
                style={tw`h-[4rem] w-[4rem] rounded-[10px] overflow-hidden ${
                  active === item.url
                    ? "border-solid border-[#156651] border-[2px]"
                    : ""
                }`}
              >
                <Image source={item.url} style={tw`w-full h-full`} />
              </TouchableOpacity>
            ))}
          </View>

          <View
            style={tw`w-full bg-white h-full py-5 pb-[2.7rem] rounded-tr-[15px] rounded-tl-[15px]`}
          >
            <View style={tw`px-5`}>
              <Text style={tw`text-[#404040]`} size={20} font={"light"}>
                {item.name}
              </Text>
              <View style={tw`flex-row items-center gap-2.5`}>
                <Text style={tw``} size={35} font={"bold"}>
                  {item?.price}
                </Text>
                <Text style={tw`line-through`} size={16} font={"light"}>
                  {item?.prevPrice}
                </Text>
                <Tag />
              </View>
              <View style={tw`flex-row items-center gap-2 mt-3`}>
                <Star />
                <Text size={16}>4.9 (256)</Text>
              </View>
              <View style={tw`mt-3 mb-5`}>
                <Text style={tw`text-[#404040]`} size={17}>
                  {item.description}
                </Text>
              </View>
            </View>

            <View style={tw`w-full bg-[#E0E0E0] h-[.1rem]`}></View>

            <View style={tw`px-5 pt-5`}>
              <Text size={20} font={"bold"} style={tw`mb-3`}>
                Colors
              </Text>

              <View style={tw`flex-row w-full gap-3`}>
                {item.colors.map((item) => (
                  <View
                    key={item.name}
                    style={tw`w-[10rem] flex-row items-center justify-start gap-2 p-2 min-h-[4.2rem] rounded-[16px] border-solid border-[1px] border-[#E0E0E0]`}
                  >
                    <View
                      style={tw`w-[31%] h-full rounded-[12px] bg-[${item.color}]`}
                    ></View>
                    <Text size={14}>{item.name}</Text>
                  </View>
                ))}
              </View>
            </View>
          </View>
        </View>
      </ScrollView>

      <View
        style={tw`w-full shadow-lg bg-white z-10 h-[7rem] rounded-tr-[15px] rounded-tl-[15px] pb-9 fixed bottom-0 left-0 right-0 flex-row items-center justify-between px-3`}
      >
        <TouchableOpacity
          style={tw`items-center w-[15%] justify-center border-solid border-[1px] rounded-[8px] border-[#156651] h-[3.2rem]`}
        >
          <HeartIconOutline />
        </TouchableOpacity>
        <Button
          // isLoading={true}
          title={"Add to Cart"}
          containerStyle={"w-[80%]"}
        />
      </View>
    </View>
  );
};

export default Details;
