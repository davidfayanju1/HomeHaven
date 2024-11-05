import { Dimensions, PixelRatio, Platform } from "react-native";

export const screenHeight = Dimensions.get("window").height;
export const screenWidth = Dimensions.get("window").width;

const scale = screenWidth / 320;
const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;

export const scaleSize = (size) => (screenWidth / guidelineBaseWidth) * size;
export const verticalScale = (size) =>
  (screenHeight / guidelineBaseHeight) * size;
export const moderateScale = (size, factor = 0.5) =>
  size + (scaleSize(size) - size) * factor;

export function normalSize(size) {
  const newSize = size * scale;
  if (Platform.OS === "ios") {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
}

export const RPH = (percentage) => {
  return (screenHeight * percentage) / 100;
};

export const RPW = (percentage) => {
  return (screenWidth * percentage) / 100;
};
