import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import tw from "twrnc";
import RText from "../../components/common/RText";
import {
  HomeBellIcon,
  PlusIcon,
  MinusIcon,
  HeartIcon,
} from "../../assets/icons/TabsIcons";
import chairBig from "../../assets/images/chairbig.png";
import lamp from "../../assets/images/lamp.png";
import chairGray from "../../assets/images/chairGray.png";
import AntDesign from "@expo/vector-icons/AntDesign";
import Tag from "../../components/common/Tag";

const MyCart = () => {
  const myCartItems = [
    {
      img: chairBig,
      name: "EKERO",
      price: "$230.00",
      prevPrice: "$512.58",
      color: "Yellow",
      rating: 4.9,
      number: 256,
      Qty: 1,
    },
    {
      img: chairGray,
      name: "STANDMON",
      price: "$274.13",
      prevPrice: "$856.58",
      color: "Yellow",
      Qty: 2,
    },
    {
      img: lamp,
      name: "PLATLANS",
      price: "$24.99",
      prevPrice: "$69.99",
      color: "Yellow",
      Qty: 1,
    },
  ];

  const [cartItems, setCartItems] = useState(myCartItems);

  const handleQuantitChange = (index, operation) => {
    const updatedCartItems = [...cartItems];
    if (operation === "increment") {
      updatedCartItems[index].Qty += 1;
    } else if (operation === "decrement" && updatedCartItems[index].Qty > 1) {
      updatedCartItems[index].Qty -= 1;
    }
    setCartItems(updatedCartItems);
  };

  return (
    <View style={tw`flex-1 bg-[#F5F5F5]`}>
      <View
        style={tw`flex-row min-h-[7.8rem] px-3 items-end pb-4 justify-between w-full`}
      >
        <RText textStyle={"text-black text-[2.2rem] font-bold"}>My Cart</RText>
        <View>
          <HomeBellIcon />
        </View>
      </View>

      <ScrollView
        contentContainerStyle={tw`mt-9 pb-[3rem] w-full px-4`}
        showVerticalScrollIndicator={false}
      >
        {/* product card */}
        {cartItems.map((item, index) => (
          <View
            key={index}
            style={tw`w-full mb-5 p-4 min-h-[12rem] rounded-[10px] bg-white shadow-lg flex-row items-center`}
          >
            <View style={tw`w-[40%]`}>
              <Image source={item.img} style={tw``} />
            </View>
            <View>
              <RText textStyle={"text-[1.25rem] font-light"}>{item.name}</RText>
              <RText textStyle={"text-[1.6rem] font-bold"}>{item.price}</RText>

              {item.prevPrice && (
                <View style={tw`flex-row items-center gap-4`}>
                  <RText textStyle={"line-through text-[1.2rem]"}>
                    {item.prevPrice}
                  </RText>

                  <Tag />
                </View>
              )}
              <RText textStyle={"text-[#5C5C5C5C] text-[1.1rem]"}>
                {item.color}
              </RText>
              <View style={tw`flex-row w-[78%] items-center justify-between`}>
                <TouchableOpacity>
                  <HeartIcon />
                </TouchableOpacity>

                {/*plus-minus button  */}
                <View
                  style={tw`h-[2.4rem] flex-row items-center justify-between px-3 w-[8rem] border-solid rounded-[11px] border-[1px] border-[#E0E0E0]`}
                >
                  <TouchableOpacity
                    onPress={() => handleQuantitChange(index, "decrement")}
                  >
                    <MinusIcon />
                  </TouchableOpacity>
                  <RText textStyle={"text-[1rem]"}>{item.Qty}</RText>
                  <TouchableOpacity
                    onPress={() => handleQuantitChange(index, "increment")}
                  >
                    <AntDesign name="plus" size={22} color="#156651" />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default MyCart;
