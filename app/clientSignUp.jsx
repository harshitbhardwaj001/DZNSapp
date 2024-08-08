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

const ClientSignUp = () => {
  const [username, setUsername] = useState("");
  const [emailPhone, setEmailPhone] = useState("");
  const [password, setPassword] = useState("");
  const [verifyPassword, setVerifyPassword] = useState("");
  let [fontsLoaded] = useFonts({
    CustomFont: require("../assets/fonts/LeagueSpartan.ttf"),
  });

  const router = useRouter();

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const handleSignUp = () => {
    if (!username || !emailPhone || !password || !verifyPassword) {
      Alert.alert("Validation Error", "All fields are required");
      return;
    }

    if (password !== verifyPassword) {
      Alert.alert("Validation Error", "Passwords do not match");
      return;
    }

    // Proceed with sign-up logic
    Alert.alert("Success", "Account created successfully!");
  };

  const handleNavigateToLogin = () => {
    router.push("/clientLogin"); // Adjust the path as per your routing setup
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
          <Text style={styles.title}>Sign Up or Login</Text>

          <TextInput
            style={styles.input}
            placeholder="Create Username"
            placeholderTextColor={theme.colors.textLight}
            value={username}
            onChangeText={setUsername}
          />
          <TextInput
            style={styles.input}
            placeholder="Email/ Phone no."
            placeholderTextColor={theme.colors.textLight}
            value={emailPhone}
            onChangeText={setEmailPhone}
          />
          <TextInput
            style={styles.input}
            placeholder="Create Password"
            placeholderTextColor={theme.colors.textLight}
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
          />
          <TextInput
            style={styles.input}
            placeholder="Verify Password"
            placeholderTextColor={theme.colors.textLight}
            secureTextEntry={true}
            value={verifyPassword}
            onChangeText={setVerifyPassword}
          />

          <Text style={styles.loginLink}>
            Already have an account?{" "}
            <Text
              style={styles.loginLinkHighlight}
              onPress={handleNavigateToLogin}
            >
              Click here
            </Text>{" "}
            to Login
          </Text>

          <TouchableOpacity style={styles.button} onPress={handleSignUp}>
            <Text style={styles.buttonText}>Create Account</Text>
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
    height: hp(55),
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

export default ClientSignUp;
