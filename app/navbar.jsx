import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { BlurView } from "expo-blur";

const Navbar = ({ navigation }) => {
  return (
    <BlurView intensity={100} tint="dark" style={styles.navbar}>
      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
        <Ionicons name="home" size={24} color="white" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Services")}>
        <Ionicons name="grid" size={24} color="white" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Assets")}>
        <Ionicons name="albums" size={24} color="white" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
        <Ionicons name="person" size={24} color="white" />
      </TouchableOpacity>
    </BlurView>
  );
};

const styles = StyleSheet.create({
  navbar: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 20,
    paddingHorizontal: 20,
    // borderTopLeftRadius: 20,
    // borderTopRightRadius: 20,
    position: "absolute",
    bottom: 10,
    width: "100%",
    backgroundColor: "rgba(16, 17, 19, 0.3)", // Glassy effect
  },
});

export default Navbar;
