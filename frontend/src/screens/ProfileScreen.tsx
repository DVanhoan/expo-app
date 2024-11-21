import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Alert,
  FlatList,
  StyleSheet,
} from "react-native";

import { Ionicons, MaterialIcons, AntDesign } from "@expo/vector-icons";

const ProfileScreem: React.FC = () => {
  const [coverImg, setCoverImg] = useState(null);
  const [profileImg, setProfileImg] = useState(null);
  const [feedType, setFeedType] = useState("posts");

  const [isMyProfile, setIsMyProfile] = useState(true);
  const user = {
    fullName: "John Doe",
    username: "johndoe",
    profileImg:
      "https://res.cloudinary.com/dfac3tvue/image/upload/v1730109285/cm3klna8ari58c6ou5mu.jpg",
    coverImg:
      "https://res.cloudinary.com/dfac3tvue/image/upload/v1729791771/rsfkcnu2pjbn2e0rcqfr.jpg",
    followers: 100,
    following: 100,
    posts: 100,
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  };

  const posts = [
    {
      id: 1,
      username: "johndoe",
      profileImg:
        "https://res.cloudinary.com/dfac3tvue/image/upload/v1730109285/cm3klna8ari58c6ou5mu.jpg",
      image:
        "https://res.cloudinary.com/dfac3tvue/image/upload/v1729791771/rsfkcnu2pjbn2e0rcqfr.jpg",
      likes: 100,
      caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 2,
      username: "johndoe",
      profileImg:
        "https://res.cloudinary.com/dfac3tvue/image/upload/v1730109285/cm3klna8ari58c6ou5mu.jpg",
      image:
        "https://res.cloudinary.com/dfac3tvue/image/upload/v1729791771/rsfkcnu2pjbn2e0rcqfr.jpg",
      likes: 100,
      caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 3,
      username: "johndoe",
      profileImg:
        "https://res.cloudinary.com/dfac3tvue/image/upload/v1730109285/cm3klna8ari58c6ou5mu.jpg",
      image:
        "https://res.cloudinary.com/dfac3tvue/image/upload/v1729791771/rsfkcnu2pjbn2e0rcqfr.jpg",
      likes: 100,
      caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];

  return (
    <View style={{ flex: 1, borderColor: "gray", borderRightWidth: 1 }}>
      <ScrollView>
        <View style={{ padding: 16 }}>
          <View style={{ position: "relative", marginTop: 10 }}>
            <Image
              source={{ uri: coverImg || user.coverImg || "/cover.png" }}
              style={{ height: 200, width: "100%", resizeMode: "cover" }}
            />
            {isMyProfile && (
              <TouchableOpacity
                style={{ position: "absolute", top: 10, right: 10 }}
              >
                <MaterialIcons name="edit" size={24} color="white" />
              </TouchableOpacity>
            )}
          </View>

          <View style={{ position: "absolute", top: 150, left: 16 }}>
            <Image
              source={{
                uri: profileImg || user.profileImg || "/avatar-placeholder.png",
              }}
              style={{ width: 80, height: 80, borderRadius: 40 }}
            />
            {isMyProfile && (
              <TouchableOpacity
                style={{ position: "absolute", bottom: 5, right: 5 }}
              >
                <MaterialIcons name="edit" size={20} color="white" />
              </TouchableOpacity>
            )}
          </View>

          {/* User Info */}
          <View style={{ marginTop: 70, paddingHorizontal: 16 }}>
            <Text style={{ fontWeight: "bold", fontSize: 20 }}>
              {user.fullName}
            </Text>
            <Text style={{ color: "gray" }}>@{user.username}</Text>
            <Text style={{ marginVertical: 5 }}>{user.bio}</Text>

            <Text style={{ color: "gray" }}>{user.posts} Posts</Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              marginTop: 10,
            }}
          >
            <Text>1 Following</Text>
            <Text>3 Followers</Text>
          </View>

          {/* Feed Type Selection */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              marginVertical: 20,
            }}
          >
            <TouchableOpacity onPress={() => setFeedType("posts")}>
              <Text
                style={{
                  fontWeight: feedType === "posts" ? "bold" : "normal",
                }}
              >
                Posts
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setFeedType("likes")}>
              <Text
                style={{
                  fontWeight: feedType === "likes" ? "bold" : "normal",
                }}
              >
                Likes
              </Text>
            </TouchableOpacity>
          </View>

          {/* Feed */}
          {feedType === "posts" && (
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <FlatList
                data={posts}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                  <View style={styles.todoItem}>
                    <Text>{item.id}</Text>
                    <Text>{item.username}</Text>
                    <Image
                      source={{ uri: item.image }}
                      style={{ width: 100, height: 100 }}
                    />
                    <Text>{item.caption}</Text>
                  </View>
                )}
              />
            </View>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  todoItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "gray",
  },
  removeText: {
    color: "red",
  },
});

export default ProfileScreem;
