import { Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { ImageBackground } from "react-native-web";

const InitialPage = ({ navigation }) => {
  setTimeout(() => navigation.navigate("Home"), 1000);

  return (
    <View style={styles.screen}>
      <Image source={require("../assets/logo.jpg")} style={styles.logo} />
    </View>
  );
};

export default InitialPage;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {},
});
