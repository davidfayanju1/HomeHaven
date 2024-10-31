import { View } from "react-native";
import React, { useState } from "react";
import tw from "twrnc";
import RText from "../../components/common/RText";
import Form from "../../components/common/Form";
import Button from "../../components/common/Button";
import BtnOutline from "../../components/common/BtnOutline";
import { Link } from "expo-router";

const Login = () => {
  return (
    <View style={tw`flex-1 bg-[#F5F5F5] pt-[5rem] bg-gray-50 px-4`}>
      <View style={tw`mb-8`}>
        <RText title="title" textStyle={"text-[2.4rem]"}>
          Welcome Back!
        </RText>
        <RText textStyle={"text-[#757575] text-[1.2rem]"}>
          Enter your email to start shopping and get awesome deals today!
        </RText>
      </View>

      <View>
        <Form
          label={"Email"}
          title={"email"}
          placeholder={"Enter Email"}
          containerStyle={"mb-8"}
        />
        <Form
          label={"Password"}
          title={"Password"}
          placeholder={"******"}
          containerStyle={"mb-4"}
        />

        <RText textStyle={"text-[#156651] mb-4 text-[1.15rem]"}>
          Forgot Password ?
        </RText>
        <Button title={"Log In"} />
      </View>

      <View style={tw`flex-row w-full items-center justify-between gap-1 my-6`}>
        <View style={tw`w-[40%] h-[.04rem] bg-[#C2C2C2]`}></View>
        <RText>OR</RText>
        <View style={tw`w-[40%] h-[.04rem] bg-[#C2C2C2]`}></View>
      </View>

      <View style={tw`mb-4`}>
        <BtnOutline title={"Log In with Google"} containerStyle={"mb-3"} />
        <BtnOutline title={"Log In with Facebook"} label="facebook" />
      </View>
      <View>
        <RText textStyle={"text-center text-[1rem]"}>
          Don’t have an account?{" "}
          <Link href="/signup" style={tw`text-[#156651]`}>
            Register
          </Link>
        </RText>
      </View>
    </View>
  );
};

export default Login;
