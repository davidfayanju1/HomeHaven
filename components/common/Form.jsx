import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import tw from "twrnc";
import Feather from "@expo/vector-icons/Feather";
import AntDesign from "@expo/vector-icons/AntDesign";

const Form = ({
  title,
  value,
  placeholder,
  label,
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
      {label && (
        <Text
          style={tw.style(`text-[1rem] text-black font-semibold mb-2`, {
            fontFamily: "Uber-medium",
          })}
        >
          {label}
        </Text>
      )}
      <View
        style={tw`${
          title === "Password" ? "flex-row items-center justify-start" : ""
        } rounded-[8px] w-full ${
          title === "search"
            ? "h-[4rem] flex-row items-center px-4"
            : "h-[3.2rem]"
        } h-[3.2rem] ${
          title === "search"
            ? "border-solid border-[1px] border-[#777777]"
            : "bg-gray-100 border-[#777777]"
        }`}
      >
        {title === "search" && (
          <View>
            <AntDesign name="search1" size={24} color="#777777" />
          </View>
        )}
        <TextInput
          style={tw.style(
            `h-full ${title === "search" ? "text-white" : "text-black"}
           px-[1rem] ${
             title === "Password" ? "w-[80%]" : "w-full"
           } text-[1.1rem] ${inputStyle}`,
            {
              fontFamily: "Uber-medium",
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
        {title === "Password" && (
          <View style={tw`items-center h-full w-[20%] justify-center`}>
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
