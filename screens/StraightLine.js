import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import Header from "../components/Header";

const StraightLine = () => {
  const tableHeadings = [
    "Year",
    "Opening BV",
    "Depreciation",
    "Accumalated Dep.",
    "Closing BV",
  ];

  return (
    <ScrollView style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Life periods" />
        <TextInput style={styles.input} placeholder="First cost" />
        <TextInput style={styles.input} placeholder="Salavge value" />
      </View>
      <View style={styles.tableContainer}>
        {
          //TODO make a map function with the number of years to scroll the view with the data istead of a table
          //TODO the the component should have the data written in the array above
        }
      </View>
    </ScrollView>
  );
};

export default StraightLine;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  inputContainer: {
    flex: 0.25,
    alignItems: "center",
    marginTop: 30,
  },
  input: {
    marginBottom: 25,
    paddingHorizontal: 5,
    height: 40,
    width: 250,
    borderColor: "black",
    borderWidth: 1,
    fontSize: 20,
  },
});
