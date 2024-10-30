import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Image,
  Dimensions,
  ScrollView,
  Text,
  TouchableOpacity,
  Animated,
} from "react-native";
import tw from "twrnc";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, router } from "expo-router";
import slide1 from "../assets/images/slide1.png";
import slide2 from "../assets/images/slide2.png";
import slide3 from "../assets/images/slide3.png";

import Button from "../components/common/Button";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

const Index = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const scrollViewRef = useRef(null);
  const navigation = useNavigation();

  const carouselItems = [
    {
      image: slide1,
      header: `Online Home store and Furniture`,
      description:
        "Discover all style and budgets of furniture, appliances, kitchen, and more from 500+ brands in your hand.",
    },
    {
      image: slide2,
      header: `Delivery Right to Your Doorstep`,
      description:
        "Sit back, and enjoy the convenience of our drivers delivering your order to your doorstep.",
    },
    {
      image: slide3,
      header: `Get Support From our Skilled Team`,
      description:
        "If our products don't meet your expectations, we're available 24/7 to assist you.",
    },
  ];

  const handleScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
    {
      useNativeDriver: false,
      listener: (event) => {
        const contentOffsetX = event.nativeEvent.contentOffset.x;
        const newIndex = Math.round(contentOffsetX / SCREEN_WIDTH);
        setActiveIndex(newIndex);
      },
    }
  );

  const handleComplete = () => {
    router.push("login");
  };

  const handleNext = () => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({
        x: (activeIndex + 1) * SCREEN_WIDTH,
        animated: true,
      });
    }
  };

  const handlePrev = () => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({
        x: (activeIndex - 1) * SCREEN_WIDTH,
        animated: true,
      });
    }
  };

  return (
    <>
      <Animated.ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        contentContainerStyle={tw``}
      >
        {carouselItems.map((item, index) => (
          <View
            key={index}
            style={[
              tw`w-full items-center justify-start rounded-t-10`,
              { width: SCREEN_WIDTH },
            ]}
          >
            <Image
              source={item.image}
              style={tw`w-full h-[70%]`}
              resizeMode="cover"
            />

            <View
              style={[
                tw`w-full items-center justify-start px-3`,
                {
                  width: SCREEN_WIDTH,
                  borderTopRightRadius: 20,
                  borderTopLeftRadius: 20,
                  overflow: "hidden",
                },
              ]}
            >
              <Text
                style={tw.style(
                  `text-[2.3rem] font-bold text-center text-black mt-8`,
                  {
                    fontFamily: "Uber-bold",
                  }
                )}
              >
                {item.header}
              </Text>
              <Text
                style={tw.style(
                  `text-5 mt-3 text-[#757575] text-center text-gray-500`,
                  {
                    fontFamily: "Uber-medium",
                  }
                )}
              >
                {item.description}
              </Text>
            </View>
          </View>
        ))}
      </Animated.ScrollView>

      <View style={tw`flex-row justify-center items-center`}>
        {carouselItems.map((_, index) => {
          const width = scrollX.interpolate({
            inputRange: [
              (index - 1) * SCREEN_WIDTH,
              index * SCREEN_WIDTH,
              (index + 1) * SCREEN_WIDTH,
            ],
            outputRange: [10, 10, 10],
            extrapolate: "clamp",
          });

          const backgroundColor = scrollX.interpolate({
            inputRange: [
              (index - 1) * SCREEN_WIDTH,
              index * SCREEN_WIDTH,
              (index + 1) * SCREEN_WIDTH,
            ],
            outputRange: ["#E5E7EB", "#005667", "#E5E7EB"],
            extrapolate: "clamp",
          });

          return (
            <Animated.View
              key={index}
              style={[tw`h-2.5 rounded-full mx-2`, { width, backgroundColor }]}
            />
          );
        })}
      </View>
      <View
        style={tw`w-full mt-10 mb-15 items-center justify-between flex-row px-5 gap-2`}
      >
        {activeIndex !== 0 && (
          <TouchableOpacity onPress={handlePrev} style={tw`w-[20%]`}>
            <Text
              style={tw.style(`text-center text-black font-semibold text-4.7`, {
                fontFamily: "Uber-medium",
              })}
            >
              Back
            </Text>
          </TouchableOpacity>
        )}

        <Button
          handlePress={activeIndex === 2 ? handleComplete : handleNext}
          containerStyle={`${activeIndex !== 0 ? "w-[80%]" : "w-full"}`}
          title={activeIndex === 2 ? "Login" : "Next"}
        />
      </View>
    </>
  );
};

export default Index;
