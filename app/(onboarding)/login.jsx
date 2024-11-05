import { View } from "react-native";
import React, { useState } from "react";
import tw from "twrnc";
import RText from "../../components/common/RText";
import Form from "../../components/common/Form";
import Button from "../../components/common/Button";
import BtnOutline from "../../components/common/BtnOutline";
import { Link } from "expo-router";
import Text from "../../lib/Text";

const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleLogin = () => {
    const { email, password } = form;

    if (email === "" && password === "") {
      console.error("All fields are required");
    }

    console.log(form, "form");
  };

  return (
    <View style={tw`flex-1 bg-[#F5F5F5] pt-[5rem] px-4`}>
      <View style={tw`mb-10`}>
        <Text style={tw`font-bold text-[#404040]`} size={34}>
          Welcome Back!
        </Text>
        <Text style={tw`text-[#757575]`} size={16}>
          Enter your email to start shopping and get awesome deals today!
        </Text>
      </View>

      <View>
        <Form
          label={"Email"}
          title={"email"}
          placeholder={"Enter Email"}
          containerStyle={"mb-5"}
          value={form.email}
          handleChangeText={(e) => setForm({ ...form, email: e })}
        />
        <Form
          label={"Password"}
          title={"Password"}
          placeholder={"******"}
          containerStyle={"mb-4"}
          value={form.password}
          handleChangeText={(e) => setForm({ ...form, password: e })}
        />

        <RText textStyle={"text-[#156651] mb-4 text-[1rem]"}>
          Forgot Password?
        </RText>
        <Button title={"Log In"} />
      </View>

      <View style={tw`flex-row w-full items-center justify-between gap-1 my-8`}>
        <View style={tw`w-[45%] h-[.04rem] bg-[#C2C2C2]`}></View>
        <RText textStyle={"text-[#404040] text-[12px]"}>OR</RText>
        <View style={tw`w-[45%] h-[.04rem] bg-[#C2C2C2]`}></View>
      </View>

      <View style={tw`mb-6`}>
        <BtnOutline title={"Log In with Google"} containerStyle={"mb-3"} />
        <BtnOutline title={"Log In with Facebook"} label="facebook" />
      </View>
      <View>
        <RText textStyle={"text-center text-[1.1rem] text-[#404040]"}>
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
