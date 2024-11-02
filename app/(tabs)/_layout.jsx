import { View, Text } from "react-native";
import React from "react";
import tw from "twrnc";
import { Tabs } from "expo-router";
import RText from "../../components/common/RText";
import {
  AccountIcon,
  AccountIconActive,
  CartIcon,
  CartIconActive,
  HomeIcon,
  HomeIconActive,
} from "../../assets/icons/TabsIcons";

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "#fff",
          borderTopLeftRadius: 18,
          borderTopRightRadius: 18,
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View>{focused ? <HomeIconActive /> : <HomeIcon />}</View>
          ),
          tabBarLabel: ({ focused }) => (
            <RText
              textStyle={`${focused ? "text-[#156651]" : "text-[#C2C2C2]"}`}
            >
              Home
            </RText>
          ),
        }}
      />
      <Tabs.Screen
        name="myCart"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View>{focused ? <CartIconActive /> : <CartIcon />}</View>
          ),
          tabBarLabel: ({ focused }) => (
            <RText
              textStyle={`${focused ? "text-[#156651]" : "text-[#C2C2C2]"}`}
            >
              My Cart
            </RText>
          ),
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View>{focused ? <AccountIconActive /> : <AccountIcon />}</View>
          ),
          tabBarLabel: ({ focused }) => (
            <RText
              textStyle={`${focused ? "text-[#156651]" : "text-[#C2C2C2]"}`}
            >
              My Account
            </RText>
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
