import { Alert, View } from "react-native";
import React, { useState } from "react";
import tw from "twrnc";
import RText from "../../components/common/RText";
import Form from "../../components/common/Form";
import { Link, router } from "expo-router";
import Button from "../../components/common/Button";
import BtnOutline from "../../components/common/BtnOutline";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Text from "../../lib/Text";

const Signup = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleSignup = () => {
    const { firstName, lastName, email, password } = form;

    if (!firstName || !lastName || !email || !password) {
      Alert.alert("All Fields Are Required");
    }

    console.log(form, "form");
  };

  return (
    <KeyboardAwareScrollView
      style={tw`flex-1`}
      resetScrollToCoords={{ x: 0, y: 0 }}
      contentContainerStyle={{ flexGrow: 1 }}
      scrollEnabled={true}
      showsVerticalScrollIndicator={false}
    >
      <View style={tw`bg-[#F5F5F5] pt-[5rem] bg-gray-50 px-4 pb-[4rem]`}>
        <View style={tw`mb-10`}>
          <Text style={tw`font-bold text-[#404040]`} size={34}>
            Create Account
          </Text>
          <Text style={tw`text-[#757575]`} size={16}>
            Fill in your details below to get started on a seamless shopping
            experience.
          </Text>
        </View>

        <View>
          <Form
            label={"First Name"}
            placeholder={"Enter First Name"}
            containerStyle={"mb-5"}
            title={"login"}
            value={form.firstName}
            handleChangeText={(e) => setForm({ ...form, firstName: e })}
          />
          <Form
            label={"Last Name"}
            placeholder={"Enter last Name"}
            containerStyle={"mb-5"}
            title={"login"}
            value={form.lastName}
            handleChangeText={(e) => setForm({ ...form, lastName: e })}
          />
          <Form
            label={"Email"}
            placeholder={"Enter Email"}
            containerStyle={"mb-5"}
            title={"email"}
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
          />
          <Form
            label={"Password"}
            placeholder={"*********"}
            containerStyle={"mb-8"}
            title={"Password"}
          />
        </View>

        <View style={tw`mb-9`}>
          <RText textStyle={"text-left text-[14px] text-[#757575]"}>
            By clicking Create Account, you acknowledge you have read and agreed
            to our{" "}
            <Link href="/signup" style={tw`text-[#156651]`}>
              Terms of Use and Privacy Policy
            </Link>
          </RText>
        </View>

        <View style={tw``}>
          <Button
            title={"Create Account"}
            handlePress={() => router.push("/home")}
          />
        </View>

        <View
          style={tw`flex-row w-full items-center justify-between gap-1 my-6`}
        >
          <View style={tw`w-[45%] h-[.04rem] bg-[#C2C2C2]`}></View>
          <RText textStyle={"text-[#404040] text-[12px]"}>OR</RText>
          <View style={tw`w-[45%] h-[.04rem] bg-[#C2C2C2]`}></View>
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
