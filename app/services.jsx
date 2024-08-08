import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Modal,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import Navbar from "./navbar"; // Adjust the path according to your folder structure
import { useFonts } from "expo-font";
import { wp } from "../helpers/common";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useRouter } from "expo-router";

const Services = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  let [fontsLoaded] = useFonts({
    CustomFont: require("../assets/fonts/LeagueSpartan-Bold.ttf"),
  });

  // const router = useRouter();

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const services = [
    "GRAPHIC DESIGN",
    "VIDEO EDITING",
    "3D ANIMATION",
    "WEB DEV UI/UX DESIGN",
    "PHOTOGRAPHY",
    "DESIGN",
  ];

  const graphicDesignOptions = [
    "LOGO DESIGN",
    "FLYER DESIGN",
    "VISUAL IDENTITY DESIGN",
    "3D DESIGN",
    "ILLUSTRATIONS",
    "PACKAGING DESIGN",
  ];

  const openModal = (service) => {
    setSelectedService(service);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedService(null);
  };

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Services</Text>
        <LinearGradient
          colors={["#E270FF", "#F13562"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.headerUnderline}
        />
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <TextInput
          placeholder='Try "Logo design" here'
          placeholderTextColor="#CCC"
          style={styles.searchInput}
        />
        <TouchableOpacity style={styles.searchIconContainer}>
          <LinearGradient
            colors={["#E270FF", "#F13562"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.searchIconGradient}
          >
            <Ionicons name="search" size={20} color="white" />
          </LinearGradient>
        </TouchableOpacity>
      </View>

      {/* Services Grid */}
      <ScrollView contentContainerStyle={styles.servicesContainer}>
        {services.map((service, index) => (
          <TouchableOpacity
            style={styles.serviceBox}
            key={index}
            onPress={() => openModal(service)}
          >
            <Image
              source={{ uri: "https://via.placeholder.com/150x200" }} // Replace with actual image URLs
              style={styles.serviceImage}
            />
            <View style={styles.serviceOverlay}>
              <Text style={styles.serviceText}>{service}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Modal for Service Details */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>{selectedService}</Text>
            <LinearGradient
              colors={["#E270FF", "#F13562"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.modalUnderline}
            />

            <ScrollView contentContainerStyle={styles.modalOptionsContainer}>
              {graphicDesignOptions.map((option, index) => (
                <View style={styles.modalOptionBox} key={index}>
                  <Image
                    source={{ uri: "https://via.placeholder.com/150x200" }} // Replace with actual image URLs
                    style={styles.modalOptionImage}
                  />
                  <View style={styles.modalOptionOverlay}>
                    <Text style={styles.modalOptionText}>{option}</Text>
                  </View>
                </View>
              ))}
            </ScrollView>

            <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
              <Ionicons name="close" size={24} color="#FFF" />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Bottom Navigation Bar */}
      <Navbar navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    paddingVertical: 40,
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  headerText: {
    fontSize: 28,
    color: "#FFF",
    fontWeight: "bold",
    fontFamily: "CustomFont",
  },
  headerUnderline: {
    width: wp(60),
    height: 2,
    marginTop: 5,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    marginBottom: 20,
    fontFamily: "CustomFont",
  },
  searchInput: {
    flex: 1,
    backgroundColor: "#333",
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    color: "#FFF",
  },
  searchIconContainer: {
    marginLeft: 10,
  },
  searchIconGradient: {
    padding: 10,
    borderRadius: 15,
  },
  servicesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingBottom: 80, // Space for bottom navbar
  },
  serviceBox: {
    width: "48%",
    height: 250,
    borderRadius: 10,
    marginBottom: 20,
    overflow: "hidden",
  },
  serviceImage: {
    width: "100%",
    height: "100%",
  },
  serviceOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  serviceText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    fontFamily: "CustomFont",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end", // Align modal content to the bottom
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
  },
  modalContent: {
    width: "100%", // Full width to make it look like a bottom sheet
    backgroundColor: "#000",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderColor: "#F13562",
    borderWidth: 2,
    borderBottomWidth: 0,
    padding: 20,
    alignItems: "center",
    maxHeight: "90%", // Limit the height of the modal
  },
  modalTitle: {
    fontSize: 24,
    color: "#FFF",
    fontWeight: "bold",
    marginBottom: 10,
    fontFamily: "CustomFont",
  },
  modalUnderline: {
    width: wp(60),
    height: 2,
    backgroundColor: "#FF0077",
    marginTop: 5,
    marginBottom: 20,
    display: "none",
  },
  modalOptionsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  modalOptionBox: {
    width: "48%",
    height: 250,
    borderRadius: 10,
    marginBottom: 20,
    overflow: "hidden",
  },
  modalOptionImage: {
    width: "100%",
    height: "100%",
  },
  modalOptionOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalOptionText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  closeButton: {
    position: "absolute",
    top: 10,
    right: 10,
  },
});

export default Services;
