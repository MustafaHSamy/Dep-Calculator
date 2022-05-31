import { StatusBar, StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import { TextInput, Alert } from "react-native";

const UnitsOfProduction = () => {
  const [firstCost, setFirstCost] = useState(0);
  const [totalUnits, setTotalUnits] = useState(0);
  const [salvageValue, setSalvageValue] = useState(0);
  const [depPerUnit, setDepPerUnit] = useState(0);
  const [specificUnits, setSpecificUnits] = useState(0); //to get the reading of the input of specific year dep
  const [specificTotalUnits, setSpecificTotalUnits] = useState(0); //to get the reading of the input of specific year obv
  const [sepecificOBV, setSpecificOBV] = useState(0); //to store the data that will be show to the user
  const [accDep, setAccDep] = useState(0); //to store the data that will be show to the user
  const [specificDep, setSpecificDep] = useState(0); //to store the data that will be show to the user

  const handleCalculating = () => {
    const validInput =
      totalUnits !== "" &&
      totalUnits !== 0 &&
      totalUnits !== undefined &&
      firstCost !== undefined;

    let depEach = 0;
    if (validInput) {
      depEach = (firstCost - salvageValue) / totalUnits;
    }
    setDepPerUnit(depEach);
  };
  const handleSpecificOBV = () => {
    setSpecificOBV(firstCost - depPerUnit * specificTotalUnits);
    setAccDep(depPerUnit * specificTotalUnits);
  };
  const handleSpecificDep = () => {
    setSpecificDep(specificUnits * depPerUnit);
  };

  useEffect(() => handleCalculating(), [firstCost, totalUnits, salvageValue]);
  useEffect(() => handleSpecificOBV(), [specificTotalUnits]);
  useEffect(() => handleSpecificDep(), [specificUnits]);

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="First cost"
          onChangeText={(e) => {
            if (!isNaN(Number(e))) {
              setFirstCost(Number(e));
            } else {
              Alert.alert("Invalid input", "Please enter a number in English");
            }
          }}
        />
        <TextInput
          style={styles.input}
          placeholder="Total units"
          onChangeText={(e) => {
            if (!isNaN(Number(e))) {
              setTotalUnits(Number(e));
            } else {
              Alert.alert("Invalid input", "Please enter a number in English");
            }
          }}
        />
        <TextInput
          style={styles.input}
          placeholder="Salvage value"
          onChangeText={(e) => {
            if (!isNaN(Number(e))) {
              setSalvageValue(Number(e));
            } else {
              Alert.alert("Invalid input", "Please enter a number in English");
            }
          }}
        />
      </View>
      {firstCost !== 0 && totalUnits !== 0 && (
        <View style={styles.numbersContainer}>
          <Text style={styles.dataText}>
            Depreciation per unit produced = {depPerUnit}
          </Text>
          <View style={styles.data}>
            <Text>
              Enter number of units produced during a specific period to get its
              depreciation
            </Text>
            <TextInput
              style={styles.input}
              placeholder="Enter"
              onChangeText={(e) => {
                if (!isNaN(Number(e))) {
                  setSpecificUnits(Number(e));
                } else {
                  Alert.alert(
                    "Invalid input",
                    "Please enter a number in English"
                  );
                }
              }}
            />
            {specificUnits !== 0 && (
              <Text style={styles.dataText}>Depreciation = {specificDep}</Text>
            )}
          </View>
          <View style={styles.data}>
            <Text>
              Enter the total number of units produced by a specific period to
              get its opening book value
            </Text>
            <TextInput
              style={styles.input}
              placeholder="Enter"
              onChangeText={(e) => {
                if (!isNaN(Number(e))) {
                  setSpecificTotalUnits(Number(e));
                } else {
                  Alert.alert(
                    "Invalid input",
                    "Please enter a number in English"
                  );
                }
              }}
            />
            {specificTotalUnits !== 0 && (
              <View>
                <Text style={styles.dataText}>OpeningBV = {sepecificOBV}</Text>
                <Text style={styles.dataText}>
                  Accumulated depreciation = {accDep}
                </Text>
              </View>
            )}
          </View>
        </View>
      )}
      <StatusBar barStyle="dark-content" />
    </View>
  );
};

export default UnitsOfProduction;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  inputContainer: {
    alignItems: "center",
    marginTop: StatusBar.currentHeight,
  },
  numbersContainer: {
    padding: 10,
    justifyContent: "space-between",
  },
  data: {
    paddingVertical: 20,
  },
  dataText: {
    fontWeight: "bold",
    fontSize: 17,
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
