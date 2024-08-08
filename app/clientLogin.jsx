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

const ClientSignIn = () => {
  const [emailPhone, setEmailPhone] = useState("");
  const [password, setPassword] = useState("");

  let [fontsLoaded] = useFonts({
    CustomFont: require("../assets/fonts/LeagueSpartan.ttf"),
  });

  const router = useRouter();

  if (!fontsLoaded) {
    return <AppLoading />; // Add AppLoading or any other loading indicator
  }

  const handleSignIn = () => {
    if (!emailPhone || !password) {
      Alert.alert("Validation Error", "All fields are required");
      return;
    }

    // Proceed with sign-in logic
    Alert.alert("Success", "Signed in successfully!");
    router.push("/verifyOTP");
  };

  const handleNavigateToForgotPassword = () => {
    router.push("/forgotPassword"); // Adjust the path as per your routing setup
  };

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <LinearGradient
          colors={[theme.colors.purple, theme.colors.pink]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.formContainer}
        >
          <Text style={styles.title}>Login</Text>

          <TextInput
            style={styles.input}
            placeholder="Email/ Phone no."
            placeholderTextColor={theme.colors.textLight}
            value={emailPhone}
            onChangeText={setEmailPhone}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor={theme.colors.textLight}
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
          />

          <Text style={styles.loginLink}>
            Forgot password?{" "}
            <Text
              style={styles.loginLinkHighlight}
              onPress={handleNavigateToForgotPassword}
            >
              Click here
            </Text>{" "}
            to change password
          </Text>

          <TouchableOpacity style={styles.button} onPress={handleSignIn}>
            <Text style={styles.buttonText}>Sign in</Text>
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
  formContainer: {
    flexDirection: "column",
    width: wp(80),
    height: hp(50),
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1E1E1E",
    borderRadius: 20,
    fontFamily: "CustomFont",
  },
  title: {
    fontSize: 22,
    color: "#FFF",
    fontFamily: "CustomFont",
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 20,
    paddingVertical: 15,
  },
  input: {
    backgroundColor: "#FFF",
    borderRadius: 100,
    padding: 10,
    paddingHorizontal: 22,
    width: wp(70),
    marginBottom: 15,
    color: "#000",
    fontFamily: "CustomFont",
    fontWeight: "600",
    fontSize: 18,
  },
  loginLink: {
    color: "#000",
    textAlign: "center",
    marginBottom: 20,
    fontFamily: "CustomFont",
    fontWeight: "600",
  },
  loginLinkHighlight: {
    color: "#fff",
  },
  button: {
    backgroundColor: "#000",
    paddingVertical: 10,
    borderRadius: 20,
    alignItems: "center",
    width: wp(40),
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontFamily: "CustomFont",
    fontWeight: "700",
  },
});

export default ClientSignIn;
