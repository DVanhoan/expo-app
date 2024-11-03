import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
const AboutScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About me</Text>
      <Text style={styles.info}>
        My name is Dương Văn Hoan. I am a student at Viet Han University with
        majoring in Computer Science.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    marginTop: 20,
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  info: {
    textAlign: "center",
    fontSize: 18,
    marginBottom: 20,
    lineHeight: 24,
    fontWeight: "bold",
  },
});

export default AboutScreen;
