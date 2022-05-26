import { StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";
import { TextInput } from "react-native";

const UnitsOfProduction = () => {
  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Number of periods" />
        <TextInput style={styles.input} placeholder="First cost" />
        <TextInput style={styles.input} placeholder="Salvage value" />
        <View>
          {
            //TODO here goes the iputs for the production units of each period
          }
        </View>
      </View>
    </View>
  );
};

export default UnitsOfProduction;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  inputContainer: {
    flex: 0.25,
    alignItems: "center",
    marginTop: StatusBar.currentHeight,
  },
  input: {
    marginBottom: 25,
    paddingHorizontal: 5,
    height: 40,
    width: 250,
    borderColor: "black",
    borderWidth: 1,
    fontSize: 20,
    borderRadius: 10,
  },
});
