import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import ScreenWrapper from "../components/ScreenWrapper";
import { StatusBar } from "expo-status-bar";
import { hp, wp } from "../helpers/common";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import { theme } from "../constants/theme";
import Button from "../components/Button";
import { useRouter } from "expo-router";

const Welcome = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  let [fontsLoaded] = useFonts({
    CustomFont: require("../assets/fonts/LeagueSpartan.ttf"),
  });
  const router = useRouter();

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const handleOptionPress = (option) => {
    setSelectedOption(option);
  };

  const handleContinuePress = () => {
    if (selectedOption === "CLIENT") {
      router.push("clientSignUp");
    } else if (selectedOption === "FREELANCER") {
      router.push("freelancerSignUp");
    }
  };

  return (
    <ScreenWrapper bg="#101113">
      <StatusBar style="light" />
      <View style={styles.container}>
        <View style={styles.inner}>
          <LinearGradient
            colors={[theme.colors.purple, theme.colors.pink]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.inner}
          >
            <Text style={styles.top}>I am a</Text>
            <View
              style={{
                gap: 10,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Button
                title="CLIENT"
                buttonStyle={{
                  marginHorizontal: wp(3),
                  borderWidth: 2,
                  borderColor: selectedOption == "CLIENT" ? "#fff" : "#C6C5C7",
                  paddingHorizontal: 20,
                  width: wp(60),
                  height: hp(6),
                  borderCurve: "continuous",
                  borderRadius: 35,
                  backgroundColor:
                    selectedOption === "CLIENT" ? "#fff" : "transparent",
                }}
                textStyle={{
                  fontWeight: "700",
                  color: selectedOption === "CLIENT" ? "#000" : "#C6C5C7",
                  fontSize: hp(2),
                }}
                onPress={() => handleOptionPress("CLIENT")}
              />
              <Button
                title="FREELANCER"
                buttonStyle={{
                  marginHorizontal: wp(3),
                  borderWidth: 2,
                  borderColor:
                    selectedOption == "FREELANCER" ? "#fff" : "#C6C5C7",
                  paddingHorizontal: 20,
                  width: wp(60),
                  height: hp(6),
                  borderCurve: "continuous",
                  borderRadius: 35,
                  backgroundColor:
                    selectedOption == "FREELANCER" ? "#fff" : "transparent",
                }}
                textStyle={{
                  fontWeight: "700",
                  color: selectedOption == "FREELANCER" ? "#000" : "#C6C5C7",
                  fontSize: hp(2),
                }}
                onPress={() => handleOptionPress("FREELANCER")}
              />
            </View>
            <View style={{ marginTop: 100 }}>
              <Button
                title="Continue"
                buttonStyle={{
                  marginHorizontal: wp(3),
                  borderWidth: 2,
                  backgroundColor: "#000",
                  paddingHorizontal: 20,
                  width: wp(40),
                  borderCurve: "continuous",
                  borderRadius: 35,
                  height: hp(5),
                }}
                textStyle={{
                  fontWeight: "600",
                  color: "#fff",
                  fontSize: hp(2),
                }}
                onPress={handleContinuePress}
                disabled={!selectedOption} // Disable the button if no option is selected
              />
            </View>
          </LinearGradient>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#101113",
    paddingHorizontal: wp(10),
  },
  inner: {
    flexDirection: "column",
    width: wp(80),
    height: hp(50),
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1E1E1E",
    borderRadius: 20,
  },
  top: {
    fontFamily: "CustomFont",
    color: theme.colors.text,
    fontSize: 20,
    marginBottom: 20,
    marginTop: hp(5),
  },
});
