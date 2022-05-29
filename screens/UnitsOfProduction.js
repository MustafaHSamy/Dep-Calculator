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
            //TODO make an iterator array whose length is equal to number of peroids
            //TODO iterate over the iterator array to show text input for each period
            //TODO each text input gets the key of the index it was created at
            //TODO create an array the gets the output of each text input and stores it in arr[{index of text input}]
            //TODO create handleChangingUnits method with useEffect to update the array that contains the units of production of each year on change
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
