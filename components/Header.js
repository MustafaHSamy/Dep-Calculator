import {
  StyleSheet,
  Text,
  View,
  TouchableNativeFeedback,
  StatusBar,
} from "react-native";
import React from "react";

const Header = ({ headerStyles, headerTextStyles, text }) => {
  return (
    <TouchableNativeFeedback>
      <View style={[styles.header, headerStyles]}>
        <Text style={[styles.headerText, headerTextStyles]}>{text}</Text>
      </View>
    </TouchableNativeFeedback>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: StatusBar.currentHeight - 20,
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 27,
  },
});
