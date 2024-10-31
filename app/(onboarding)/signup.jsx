import { View, Text } from "react-native";
import React, { useState } from "react";
import tw from "twrnc";
import RText from "../../components/common/RText";
import Form from "../../components/common/Form";
import { Link } from "expo-router";
import Button from "../../components/common/Button";
import BtnOutline from "../../components/common/BtnOutline";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const Signup = () => {
  return (
    <KeyboardAwareScrollView
      style={tw`flex-1`}
      resetScrollToCoords={{ x: 0, y: 0 }}
      contentContainerStyle={{ flexGrow: 1 }}
      scrollEnabled={true}
      showsVerticalScrollIndicator={false}
    >
      <View style={tw`bg-[#F5F5F5] pt-[5rem] bg-gray-50 px-4 pb-[4rem]`}>
        <View style={tw`mb-8`}>
          <RText title="title" textStyle={"text-[2.4rem]"}>
            Create Account
          </RText>
          <RText textStyle={"text-[#757575] text-[1.2rem]"}>
            Fill in your details below to get started on a seamless shopping
            experience.
          </RText>
        </View>

        <View>
          <Form
            label={"First Name"}
            placeholder={"Enter First Name"}
            containerStyle={"mb-5"}
            title={"login"}
          />
          <Form
            label={"Last Name"}
            placeholder={"Enter last Name"}
            containerStyle={"mb-5"}
            title={"login"}
          />
          <Form
            label={"Email"}
            placeholder={"Enter Email"}
            containerStyle={"mb-5"}
            title={"email"}
          />
          <Form
            label={"Password"}
            placeholder={"Enter password"}
            containerStyle={"mb-5"}
            title={"Password"}
          />
        </View>

        <View style={tw`mb-3`}>
          <RText textStyle={"text-left text-[1.1rem]"}>
            By clicking Create Account, you acknowledge you have read and agreed
            to our{" "}
            <Link href="/signup" style={tw`text-[#156651]`}>
              Terms of Use and Privacy Policy
            </Link>
          </RText>
        </View>

        <View style={tw``}>
          <Button title={"Create Account"} />
        </View>

        <View
          style={tw`flex-row w-full items-center justify-between gap-1 my-6`}
        >
          <View style={tw`w-[40%] h-[.04rem] bg-[#C2C2C2]`}></View>
          <RText>OR</RText>
          <View style={tw`w-[40%] h-[.04rem] bg-[#C2C2C2]`}></View>
        </View>

        <View style={tw`mb-4`}>
          <BtnOutline title={"Continue with Google"} containerStyle={"mb-3"} />
          <BtnOutline title={"Continue with Facebook"} label="facebook" />
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default Signup;
