import React from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import Navbar from "./navbar"; // Adjust the path according to your folder structure
import { useFonts } from "expo-font";
import { wp } from "../helpers/common";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useRouter } from "expo-router";

const Home = ({ navigation }) => {
  let [fontsLoaded] = useFonts({
    CustomFont: require("../assets/fonts/LeagueSpartan-SemiBold.ttf"),
  });

  const router = useRouter();

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <Ionicons name="menu" size={24} color="white" />
      </View>

      <ScrollView
        style={styles.content}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Hero Section */}
        <View style={styles.heroSection}>
          <LinearGradient
            colors={["#E270FF", "#F13562"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.heroBackground}
          >
            <View style={styles.searchContainer}>
              <TextInput style={styles.searchInput} />
              <View style={styles.searchIconContainer}>
                <Ionicons name="search" size={20} color="white" />
              </View>
            </View>
          </LinearGradient>
        </View>
        {/* Most Used Services Section */}
        <View style={{ position: "relative" }}>
          <Text style={styles.sectionTitle}>Most used services</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.servicesContainer}
          >
            <View style={styles.serviceBox}>
              <Image
                source={{ uri: "https://via.placeholder.com/150x200" }}
                style={styles.serviceImage}
              />
            </View>
            <View style={styles.serviceBox}>
              <Image
                source={{ uri: "https://via.placeholder.com/150x200" }}
                style={styles.serviceImage}
              />
            </View>
            <View style={styles.serviceBox}>
              <Image
                source={{ uri: "https://via.placeholder.com/150x200" }}
                style={styles.serviceImage}
              />
            </View>
            <View style={styles.serviceBox}>
              <Image
                source={{ uri: "https://via.placeholder.com/150x200" }}
                style={styles.serviceImage}
              />
            </View>
            <View style={styles.serviceBox}>
              <Image
                source={{ uri: "https://via.placeholder.com/150x200" }}
                style={styles.serviceImage}
              />
            </View>
          </ScrollView>

          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              router.push("services");
            }}
          >
            <Text style={styles.viewAll}>View All</Text>
            <AntDesign
              name="right"
              size={12}
              color="#fff"
              style={{ marginTop: 3 }}
            />
          </TouchableOpacity>
        </View>

        {/* Latest Asset Pack Section */}
        <View style={styles.assetContainer}>
          <Text style={styles.sectionTitle}>Latest asset pack</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.servicesContainer}
          >
            <View style={styles.serviceBox}>
              <Image
                source={{ uri: "https://via.placeholder.com/150x200" }}
                style={styles.serviceImage}
              />
            </View>
            <View style={styles.serviceBox}>
              <Image
                source={{ uri: "https://via.placeholder.com/150x200" }}
                style={styles.serviceImage}
              />
            </View>
            <View style={styles.serviceBox}>
              <Image
                source={{ uri: "https://via.placeholder.com/150x200" }}
                style={styles.serviceImage}
              />
            </View>
            <View style={styles.serviceBox}>
              <Image
                source={{ uri: "https://via.placeholder.com/150x200" }}
                style={styles.serviceImage}
              />
            </View>
            <View style={styles.serviceBox}>
              <Image
                source={{ uri: "https://via.placeholder.com/150x200" }}
                style={styles.serviceImage}
              />
            </View>
          </ScrollView>
          <TouchableOpacity style={styles.button} onPress={() => {}}>
            <Text style={styles.viewAll}>View All</Text>
            <AntDesign
              name="right"
              size={12}
              color="#fff"
              style={{ marginTop: 3 }}
            />
          </TouchableOpacity>
        </View>
        {/* Summer Sale Promo Section */}
        <View style={styles.promoContainer}>
          <LinearGradient
            colors={["#E270FF", "#F13562"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.promoBox}
          >
            <Text style={styles.promoText}>20% off</Text>
            <Text style={styles.promoSubText}>SUMMER SALE</Text>
          </LinearGradient>
        </View>
      </ScrollView>

      <Navbar navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    paddingVertical: 40,
    fontFamily: "CustomFont",
  },
  topBar: {
    padding: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  content: {
    flex: 1,
    fontFamily: "CustomFont",
  },
  scrollContent: {
    paddingBottom: 150, // Ensure there is space for the scroll
  },
  heroSection: {
    paddingHorizontal: 20,
    height: 200,
    marginBottom: 20,
    fontFamily: "CustomFont",
  },
  heroBackground: {
    borderRadius: 20,
    padding: 20,
    height: 200,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#D9D9D9",
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  searchInput: {
    flex: 1,
    color: "#000",
  },
  searchIconContainer: {
    backgroundColor: "#FF0077",
    borderRadius: 15,
    padding: 8,
    marginLeft: 10,
  },
  sectionTitle: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    paddingHorizontal: 20,
    fontFamily: "CustomFont",
  },
  servicesContainer: {
    paddingHorizontal: 20, // Adjust the padding as needed
  },
  serviceBox: {
    width: 146.9,
    height: 206.7,
    borderRadius: 10,
    backgroundColor: "#333",
    marginRight: 15, // Spacing between the items
    alignItems: "center",
    justifyContent: "center",
  },
  serviceImage: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
  serviceText: {
    color: "#FFF",
    textAlign: "center",
    marginTop: 5,
    fontFamily: "CustomFont",
  },
  assetContainer: {
    marginBottom: 50,
    marginTop: 30,
    position: "relative",
  },
  assetBox: {
    width: "30%",
    height: 200, // Made taller to match design specifications
    borderRadius: 10,
    backgroundColor: "#333",
  },
  promoContainer: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  promoBox: {
    padding: 20,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    height: 200, // Increased height to ensure scrolling is needed
    position: "relative",
  },
  promoText: {
    color: "#FFF",
    fontSize: 75,
    width: wp(50),
    fontWeight: "bold",
    position: "absolute",
    top: 5,
    left: 30,
    fontFamily: "CustomFont",
    letterSpacing: -1,
  },
  promoSubText: {
    color: "#FFF",
    fontSize: 20,
    position: "absolute",
    bottom: 10,
    right: 20,
    fontFamily: "CustomFont",
    fontWeight: "bold",
  },
  button: {
    flexDirection: "row",
    width: 100,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    color: "#FFF",
    position: "absolute",
    bottom: -40,
    right: 10,
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "CustomFont",
  },
  viewAll: {
    color: "#fff",
    fontSize: 16,
    fontFamily: "CustomFont",
    fontWeight: "600",
    marginRight: 5,
    letterSpacing: 0.3,
  },
});

export default Home;
