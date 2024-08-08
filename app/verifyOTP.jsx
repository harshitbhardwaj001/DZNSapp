import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import { theme } from "../constants/theme";
import { LinearGradient } from "expo-linear-gradient";
import { hp, wp } from "../helpers/common";
import { useFonts } from "expo-font";
import { useRouter } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";

const OtpInputScreen = () => {
  const [otp, setOtp] = useState(["", "", "", ""]);
  let [fontsLoaded] = useFonts({
    CustomFont: require("../assets/fonts/LeagueSpartan.ttf"),
  });

  const router = useRouter();

  if (!fontsLoaded) {
    return <AppLoading />; // Add AppLoading or any other loading indicator
  }

  const handleChangeText = (text, index) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    // Automatically move to the next input if the user types a digit
    if (text && index < otp.length - 1) {
      nextInput[index].focus();
    }
  };

  const handleVerifyOtp = () => {
    if (otp.some((digit) => digit === "")) {
      Alert.alert("Validation Error", "Please enter all 4 digits of the OTP");
      return;
    }

    // Proceed with OTP verification logic
    Alert.alert("Success", "OTP Verified successfully!");
    router.push("/home"); // Navigate to Home page after successful OTP verification
  };

  // Create refs for each input to manage focus
  const nextInput = [];

  return (
    <View style={styles.container}>
      <View style={styles.otpContainer}>
        <LinearGradient
          colors={[theme.colors.purple, theme.colors.pink]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.otpContainer}
        >
          <Text style={styles.title}>Enter OTP</Text>

          <View style={styles.otpInputWrapper}>
            {otp.map((digit, index) => (
              <TextInput
                key={index}
                style={styles.otpInput}
                value={digit}
                onChangeText={(text) => handleChangeText(text, index)}
                maxLength={1}
                keyboardType="numeric"
                placeholder="•"
                placeholderTextColor="#FFF"
                ref={(input) => (nextInput[index] = input)} // Set ref to manage focus
              />
            ))}
          </View>

          <TouchableOpacity style={styles.button} onPress={handleVerifyOtp}>
            <AntDesign name="right" size={24} color="#fff" />
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
  },
  otpContainer: {
    width: wp(80),
    height: hp(30),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    padding: 20,
  },
  title: {
    fontSize: 20,
    color: "#FFF",
    fontFamily: "CustomFont",
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 20,
  },
  otpInputWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  otpInput: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#FFF",
    textAlign: "center",
    fontSize: 24,
    fontFamily: "CustomFont",
    fontWeight: "600",
    color: "#000",
    marginHorizontal: 5,
  },
  button: {
    backgroundColor: "#000",
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default OtpInputScreen;
