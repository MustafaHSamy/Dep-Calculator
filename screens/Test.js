import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const Test = () => {
  return (
    <View style={styles.screen}>
      <Image source={require("../assets/splash.jpeg")} style={styles.photo} />
    </View>
  );
};

export default Test;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  photo: {
    width: 270,
    height: 200,
  },
});
