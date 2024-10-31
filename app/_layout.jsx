import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

const RootLayout = () => {
  const [fontsLoaded, error] = useFonts({
    Monrope: require("../assets/fonts/manRope/Manrope-Medium.ttf"),
    "Monrope-bold": require("../assets/fonts/manRope/Manrope-Bold.ttf"),
    "Monrope-light": require("../assets/fonts/manRope/Manrope-Light.ttf"),
    "Monrope-ExtraBold": require("../assets/fonts/manRope/Manrope-ExtraBold.ttf"),
  });

  useEffect(() => {
    SplashScreen.preventAutoHideAsync();
  }, []);

  useEffect(() => {
    if (error) {
      console.log("Error loading fonts:", error);
      return;
    }
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, error]);

  if (!fontsLoaded) return null;

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="(onboarding)" options={{ headerShown: false }} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
};

export default RootLayout;
