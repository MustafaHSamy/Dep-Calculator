import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TouchableHighlight,
  TouchableNativeFeedback,
} from "react-native";
import React from "react";

const MadeButton = ({ title, onPress, buttonStyles, textStyles }) => {
  return (
    <TouchableNativeFeedback onPress={onPress}>
      <View style={[styles.button, buttonStyles]}>
        <Text style={textStyles}>{title}</Text>
      </View>
    </TouchableNativeFeedback>
  );
};

export default MadeButton;

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});
