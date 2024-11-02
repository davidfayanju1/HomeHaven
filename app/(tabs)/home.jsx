import {
  View,
  Text,
  ScrollView,
  Image,
  Dimensions,
  FlatList,
} from "react-native";
import React from "react";
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

const { width } = Dimensions.get("window");

const Home = () => {
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

  return (
    <View style={tw`flex-1 bg-[#F5F5F5] pt-[5rem]`}>
      <View style={tw`flex-row items-center px-3 mb-3 gap-3`}>
        <Form
          containerStyle={"w-[87%]"}
          title={"search"}
          placeholder={"Search Candles"}
          search
        />
        <HomeBellIcon />
      </View>

      <View style={tw`flex-row items-center mb-8 justify-between w-full px-3`}>
        <MarkerIcon />

        <View style={tw`w-[72%]`}>
          <Text
            style={tw.style(`w-full text-[1rem]`, {
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
            colors={["#156651F0", "transparent"]}
            start={[0.35, 0.9]}
            end={[0.9, 0.9]}
            locations={[0.2, 0.8]}
            style={tw`absolute h-full w-full justify-center px-3 top-0 left-0 bg-transparent`}
          >
            <View style={tw`w-[60%]`}>
              <RText textStyle={"text-white text-left text-[2rem]"}>
                Celebrate The Season With Us!
              </RText>
              <RText
                textStyle={"font-light my-4 text-left text-white text-[1rem]"}
              >
                Get discounts up to 75% for furniture & decoration
              </RText>
              <Button
                containerStyle={"bg-white w-[70%]"}
                backgroundColor="bg-white"
                radius="rounded-full"
                height="h-[2.7rem]"
                title={"Shop Now"}
                textColor="text-[#156651]"
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
        <View style={tw`mt-6 flex-1 pl-4`}>
          <FlatList
            data={cartItems}
            renderItem={({ item }) => <CardSmall item={item} />}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            // keyExtractor={(item) => item.name}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
