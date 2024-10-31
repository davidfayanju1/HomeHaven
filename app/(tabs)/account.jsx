import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import tw from "twrnc";

import logo from "../../assets/images/Profile BG.png";
import RText from "../../components/common/RText";
import {
  ArrowRightIcon,
  BellIcon,
  EditIcon,
  NotificationIcon,
  PaymentMethodIcon,
  SavedAddressIcon,
  SecurityIcon,
  TransactionIcon,
  WishListIcon,
} from "../../assets/icons/TabsIcons";
import profile from "../../assets/images/profile.png";
import { router } from "expo-router";

const Account = () => {
  const acctLink = [
    {
      name: "Transaction",
      icon: <TransactionIcon />,
      route: "/home",
    },
    {
      name: "Wish List",
      icon: <WishListIcon />,
      route: "/home",
    },

    {
      name: "Saved Address",
      icon: <SavedAddressIcon />,
      route: "/home",
    },
    {
      name: "Payment Methods",
      icon: <PaymentMethodIcon />,
      route: "/home",
    },

    {
      name: "Notification",
      icon: <NotificationIcon />,
      route: "/home",
    },
    {
      name: "Security",
      icon: <SecurityIcon />,
      route: "/home",
    },
  ];

  return (
    <View style={tw`flex-1`}>
      <View style={tw`w-full h-[13rem] relative bg-red-900`}>
        <Image source={logo} resizeMode="cover" style={tw`h-full`} />
        <View
          style={tw`absolute top-[30%] flex-row items-center justify-between gap-4 px-3.3 mx-auto w-full`}
        >
          <RText textStyle={"text-white text-[2.2rem]"}>My Account</RText>
          <BellIcon />
        </View>
      </View>

      <View
        style={tw`bg-white p-4 h-[6rem] flex-row justify-between items-center mx-auto w-[93%] rounded-[11px] mt-[-3.2rem]`}
      >
        <View style={tw`flex-row items-center gap-2`}>
          <View
            style={tw`bg-gray-200 h-[58px] overflow-hidden w-[58px] rounded-full`}
          >
            <Image source={profile} />
          </View>
          <View>
            <RText textStyle={"text-[1.5rem] font-bold"}>Claire Cooper</RText>
            <RText textStyle={"text-[1.1rem] font-semibold text-[#404040]"}>
              clairecooper@mail.com
            </RText>
          </View>
        </View>

        <View>
          <EditIcon />
        </View>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={tw`mt-9 px-3 mb-[8rem]`}
      >
        <RText title="title" textStyle={"mb-5 text-[#404040] text-[1.6rem]"}>
          General
        </RText>

        {acctLink.map(({ name, icon, route }, index) => (
          <TouchableOpacity
            onPress={() => router.push(route)}
            key={name}
            style={tw`bg-white min-h-[3.8rem] mb-4 py-2 rounded-[11px] flex-row items-center justify-between px-2`}
          >
            <View style={tw`flex-row items-center justify-center gap-2`}>
              <View>{icon}</View>
              <RText textStyle={"text-[1.1rem]"}>{name}</RText>
            </View>

            <ArrowRightIcon />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default Account;
