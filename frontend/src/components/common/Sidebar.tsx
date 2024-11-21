import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons, FontAwesome, Ionicons } from "@expo/vector-icons";
import Fontisto from "@expo/vector-icons/Fontisto";

const Sidebar = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() =>
          (navigation.navigate as (routeName: string) => void)("Home")
        }
        style={styles.iconContainer}
      >
        <MaterialIcons name="home-filled" style={styles.icon} />
        <Text style={styles.label}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.iconContainer}>
        <FontAwesome name="search" style={styles.icon} />
        <Text style={styles.label}>Search</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.iconContainer}>
        <Fontisto name="comment" style={styles.icon} />
        <Text style={styles.label}>Messages</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.iconContainer}>
        <Ionicons name="notifications" style={styles.icon} />
        <Text style={styles.label}>Notifications</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() =>
          (navigation.navigate as (routeName: string) => void)("Profile")
        }
        style={styles.iconContainer}
      >
        <FontAwesome name="user" style={styles.icon} />
        <Text style={styles.label}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "black",
    borderTopWidth: 1,
    borderTopColor: "gray",
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 9,
    zIndex: 50,
  },
  iconContainer: {
    alignItems: "center",
  },
  icon: {
    color: "white",
    fontSize: 28,
  },
  label: {
    color: "gray",
    fontSize: 12,
    marginTop: 2,
  },
});

export default Sidebar;
