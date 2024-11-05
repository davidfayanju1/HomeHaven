import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { ApolloProvider } from "@apollo/client";
import client from "../lib/ApolloClient";

const RootLayout = () => {
  const [fontsLoaded, error] = useFonts({
    Manrope: require("../assets/fonts/manRope/Manrope-Medium.ttf"),
    "Manrope-bold": require("../assets/fonts/manRope/Manrope-Bold.ttf"),
    "Manrope-light": require("../assets/fonts/manRope/Manrope-Light.ttf"),
    "Manrope-ExtraBold": require("../assets/fonts/manRope/Manrope-ExtraBold.ttf"),
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
    <ApolloProvider client={client}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="(onboarding)" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="details" options={{ headerShown: false }} />
      </Stack>
    </ApolloProvider>
  );
};

export default RootLayout;
