/* eslint-disable import/order */
/* eslint-disable prettier/prettier */
import { useScrollToTop } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React, { useRef, useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  View,
  useWindowDimensions,
} from "react-native";
import { useSafeAreaInsetsStyle } from "../utils/useSafeAreaInsetsStyle";
import { useThemeColor } from "@/hooks/useThemeColor";
import tw from "twrnc";

const isIos = Platform.OS === "ios";

function isNonScrolling(preset) {
  return !preset || preset === "fixed";
}

function useAutoPreset(props) {
  const { preset, scrollEnabledToggleThreshold } = props;
  const { percent = 0.92, point = 0 } = scrollEnabledToggleThreshold || {};

  const scrollViewHeight = useRef(null);
  const scrollViewContentHeight = useRef(null);
  const [scrollEnabled, setScrollEnabled] = useState(true);

  function updateScrollState() {
    if (
      scrollViewHeight.current === null ||
      scrollViewContentHeight.current === null
    )
      return;

    const contentFitsScreen = point
      ? scrollViewContentHeight.current < scrollViewHeight.current - point
      : scrollViewContentHeight.current < scrollViewHeight.current * percent;

    if (scrollEnabled && contentFitsScreen) setScrollEnabled(false);
    if (!scrollEnabled && !contentFitsScreen) setScrollEnabled(true);
  }

  function onContentSizeChange(w, h) {
    scrollViewContentHeight.current = h;
    updateScrollState();
  }

  function onLayout(e) {
    const { height } = e.nativeEvent.layout;
    scrollViewHeight.current = height;
    updateScrollState();
  }

  if (preset === "auto") updateScrollState();

  return {
    scrollEnabled: preset === "auto" ? scrollEnabled : true,
    onContentSizeChange,
    onLayout,
  };
}

function ScreenWithoutScrolling(props) {
  const { style, contentContainerStyle, children } = props;
  return (
    <View style={[tw`flex-1 h-full w-full`, style]}>
      <View style={[tw`justify-start items-stretch`, contentContainerStyle]}>
        {children}
      </View>
    </View>
  );
}

function ScreenWithScrolling(props) {
  const {
    children,
    keyboardShouldPersistTaps = "handled",
    contentContainerStyle,
    ScrollViewProps,
    style,
  } = props;

  const ref = useRef(null);
  const { scrollEnabled, onContentSizeChange, onLayout } = useAutoPreset(props);

  useScrollToTop(ref);

  return (
    <ScrollView
      {...{ keyboardShouldPersistTaps, scrollEnabled, ref }}
      {...ScrollViewProps}
      onLayout={(e) => {
        onLayout(e);
        ScrollViewProps?.onLayout?.(e);
      }}
      onContentSizeChange={(w, h) => {
        onContentSizeChange(w, h);
        ScrollViewProps?.onContentSizeChange?.(w, h);
      }}
      style={[tw`flex-1 h-full w-full`, ScrollViewProps?.style, style]}
      contentContainerStyle={[
        tw`justify-start items-stretch`,
        ScrollViewProps?.contentContainerStyle,
        contentContainerStyle,
      ]}
    >
      {children}
    </ScrollView>
  );
}

export function Screen(props) {
  const {
    backgroundColor = useThemeColor(
      { light: "#fff", dark: "#151718" },
      "background"
    ),
    KeyboardAvoidingViewProps,
    keyboardOffset = 0,
    safeAreaEdges,
    StatusBarProps,
    statusBarStyle = "dark",
  } = props;

  const containerInsets = useSafeAreaInsetsStyle(safeAreaEdges);

  return (
    <View
      style={[tw`flex-1 h-full w-full`, { backgroundColor }, containerInsets]}
    >
      <StatusBar style={statusBarStyle} {...StatusBarProps} />
      <KeyboardAvoidingView
        behavior={isIos ? "padding" : "height"}
        keyboardVerticalOffset={keyboardOffset}
        {...KeyboardAvoidingViewProps}
        style={[tw`flex-1`, KeyboardAvoidingViewProps?.style]}
      >
        {isNonScrolling(props.preset) ? (
          <ScreenWithoutScrolling {...props} />
        ) : (
          <ScreenWithScrolling {...props} />
        )}
      </KeyboardAvoidingView>
    </View>
  );
}
