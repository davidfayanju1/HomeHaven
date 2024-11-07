import { View, ScrollView, Image, Dimensions, FlatList } from "react-native";
import React, { useState, useEffect } from "react";
import tw from "twrnc";
import Form from "../../components/common/Form";
import {
  BellIcon,
  DropdownIcon,
  HomeBellIcon,
  MarkerIcon,
} from "../../assets/icons/TabsIcons";
import RText from "../../components/common/RText";
import { CardSmall } from "../../components/modules/home/Card";
import hero from "../../assets/images/hero.png";
import { LinearGradient } from "expo-linear-gradient";
import Button from "../../components/common/Button";
import chairDef from "../../assets/images/chairDef.png";
import chairGraySmall from "../../assets/images/chairGraySmall.png";
import { useQuery, gql } from "@apollo/client";
import Text from "../../lib/Text";

const { width } = Dimensions.get("window");

const QUERY = gql`
  query GetProducts {
    products {
      id
      name
      price
    }
  }
`;

const Home = () => {
  const { loading, error, data } = useQuery(QUERY);

  const cartItems = [
    {
      img: chairDef,
      name: "EKERO",
      price: "$230.00",
      prevPrice: "$512.58",
      rating: 4.9,
      number: 256,
    },

    {
      img: chairGraySmall,
      name: "EKERO",
      price: "$230.00",
      prevPrice: "$512.58",
      rating: 4.9,
      number: 256,
    },

    {
      img: chairDef,
      name: "EKERO",
      price: "$230.00",
      prevPrice: "$512.58",
      rating: 4.9,
      number: 256,
    },

    {
      img: chairGraySmall,
      name: "EKORU",
      price: "$350.00",
      prevPrice: "$212.58",
      rating: 4.9,
      number: 150,
    },
  ];

  console.log(data, "data");
  console.error(error, "error");

  return (
    <View style={tw`flex-1 bg-[#F5F5F5] pt-[5rem]`}>
      <View style={tw`flex-row items-center px-3 mb-3 gap-3`}>
        <Form
          containerStyle={"w-[90.4%]"}
          title={"search"}
          placeholder={"Search Candles"}
          search
        />
        <HomeBellIcon />
      </View>

      <View style={tw`flex-row items-center mb-6 justify-between w-full px-3`}>
        <MarkerIcon />

        <View style={tw`w-[81%]`}>
          <Text
            style={tw.style(`w-full font-light text-[14px]`, {
              fontFamily: "Manrope",
            })}
            numberOfLines={1}
            ellipsizeMode={"tail"}
          >
            Deliver to{" "}
            <Text style={tw`font-bold`}>
              3517 W. Gray St. Utica, Pennsilvenia
            </Text>
          </Text>
        </View>
        <DropdownIcon />
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={tw`pb-[4rem]`}
      >
        <View style={tw`w-full relative h-[15rem]`}>
          <Image source={hero} style={tw`w-full h-full`} />
          <LinearGradient
            colors={["#156651F0", "#156651B3", "transparent"]}
            start={[0.05, 0.9]}
            end={[0.9, 0.9]}
            locations={[0.1, 0.5]}
            style={tw`absolute h-full w-full justify-center px-3 top-0 left-0 bg-transparent`}
          >
            <View style={tw`w-[50%]`}>
              <Text size={27} style={tw`text-white text-left`}>
                Celebrate The Season With Us!
              </Text>
              <RText
                textStyle={"font-light my-4 text-left text-white text-[1rem]"}
              >
                Get discounts up to 75% for furniture & decoration
              </RText>
              <Button
                containerStyle={"bg-white w-[60%]"}
                backgroundColor="bg-white"
                radius="rounded-full"
                height="h-[2.4rem]"
                title={"Shop Now"}
                textColor="text-[#156651]"
                textSize="text-[14px]"
              />
            </View>
          </LinearGradient>
        </View>
        <View style={tw`mt-11`}>
          <View style={tw`flex-row items-center justify-between px-3`}>
            <RText title="title" textStyle={"text-[2rem] text-[#404040]"}>
              Special Offers
            </RText>
            <RText
              textStyle={"underline text-[#156651] font-bold text-[1.1rem]"}
            >
              See More
            </RText>
          </View>
        </View>

        {/* card component goes here */}
        <View style={tw`mt-6`}>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={tw``}
          >
            {cartItems.map((item) => (
              <View key={item.name} style={tw`pt-2 pl-3 pb-2`}>
                <CardSmall item={item} />
              </View>
            ))}
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
