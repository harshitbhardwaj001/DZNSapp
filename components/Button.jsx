import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import { hp, wp } from "../helpers/common";
import { theme } from "../constants/theme";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

const Button = ({
  buttonStyle,
  textStyle,
  title = "",
  onPress = () => {},
  loading = false,
  hasShadow = true,
}) => {
  let [fontsLoaded] = useFonts({
    CustomFont: require("../assets/fonts/LeagueSpartan.ttf"),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  const shadowStyle = {};
  return (
    <Pressable
      onPress={onPress}
      style={[styles.button, buttonStyle, hasShadow && shadowStyle]}
    >
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    
    justifyContent: "center",
    alignItems: "center",
    
  },
  text: {
    
    fontFamily: "CustomFont",
    
  },
});
