import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import tw from "twrnc";
import Feather from "@expo/vector-icons/Feather";
import AntDesign from "@expo/vector-icons/AntDesign";
import RText from "./RText";
import {
  MessageIcon,
  PasswordIcon,
  UserIcon,
} from "../../assets/icons/FormIcons";

const Form = ({
  label,
  title,
  value,
  placeholder,
  handleChangeText,
  placeholdercolor,
  containerStyle,
  inputStyle,
  focus,
  blur,
  editable = true,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [togglePassword, setTogglePassword] = useState(false);

  return (
    <View style={tw`${containerStyle}`}>
      <View
        style={tw`border-solid h-[4rem] border-[1px] border-[#E0E0E0] w-full ${
          title === "search" ? "rounded-full" : "rounded-[13px]"
        } bg-white flex-row items-center px-3 py-1.3`}
      >
        <View style={tw`w-[10%]`}>
          {title === "email" ? (
            <MessageIcon />
          ) : title === "login" ? (
            <UserIcon />
          ) : title === "search" ? (
            <AntDesign name="search1" size={24} color="#777777" />
          ) : (
            <PasswordIcon />
          )}
        </View>

        <View style={tw`flex-col w-[80%] h-full gap-1`}>
          <RText textStyle={"text-[#404040] ml-4 text-[15px]"}>{label}</RText>
          <TextInput
            style={tw.style(
              `text-[#404040] outline-none px-[1rem] ${
                title === "Password" ? "w-full" : "w-full"
              } text-[1.1rem] ${inputStyle}`,
              {
                fontFamily: "Manrope",
              }
            )}
            value={value}
            placeholder={placeholder}
            onChangeText={handleChangeText}
            placeholderTextColor={placeholdercolor}
            secureTextEntry={title === "Password" && !togglePassword}
            onFocus={focus}
            onBlur={blur}
            editable={editable}
          />
        </View>

        {title === "Password" && (
          <View style={tw`items-center h-full justify-center`}>
            <TouchableOpacity
              style={tw`items-center justify-center h-full w-full`}
              onPress={() => setTogglePassword(!togglePassword)}
            >
              {togglePassword ? (
                <Feather name="eye" size={19} color="gray" />
              ) : (
                <Feather name="eye-off" size={19} color="gray" />
              )}
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
};

export default Form;
