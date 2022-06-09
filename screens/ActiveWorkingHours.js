import { StatusBar, StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import { TextInput, Alert, ScrollView } from "react-native";

const ActiveWorkingHours = () => {
  const [firstCost, setFirstCost] = useState(0);
  const [totalHours, setTotalHours] = useState(0);
  const [salvageValue, setSalvageValue] = useState(0);
  const [depPerHour, setDepPerHour] = useState(0);
  const [specificHours, setSpecificHours] = useState(0); //to get the reading of the input of specific year dep
  const [specificTotalHours, setSpecificTotalHours] = useState(0); //to get the reading of the input of specific year obv
  const [sepecificOBV, setSpecificOBV] = useState(0); //to store the data that will be show to the user
  const [accDep, setAccDep] = useState(0); //to store the data that will be show to the user
  const [specificDep, setSpecificDep] = useState(0); //to store the data that will be show to the user

  const handleCalculating = () => {
    const validInput =
      totalHours !== "" &&
      totalHours !== 0 &&
      totalHours !== undefined &&
      firstCost !== undefined;

    let depEach = 0;
    if (validInput) {
      depEach = (firstCost - salvageValue) / totalHours;
    }
    setDepPerHour(depEach);
  };
  const handleSpecificOBV = () => {
    setSpecificOBV(firstCost - depPerHour * specificTotalHours);
    setAccDep(depPerHour * specificTotalHours);
  };
  const handleSpecificDep = () => {
    setSpecificDep(specificHours * depPerHour);
  };

  useEffect(() => handleCalculating(), [firstCost, totalHours, salvageValue]);
  useEffect(() => handleSpecificOBV(), [specificTotalHours]);
  useEffect(() => handleSpecificDep(), [specificHours]);

  return (
    <ScrollView style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput
          keyboardType="numeric"
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
          keyboardType="numeric"
          style={styles.input}
          placeholder="Total active hours"
          onChangeText={(e) => {
            if (!isNaN(Number(e))) {
              setTotalHours(Number(e));
            } else {
              Alert.alert("Invalid input", "Please enter a number in English");
            }
          }}
        />
        <TextInput
          keyboardType="numeric"
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
      {firstCost !== 0 && totalHours !== 0 && (
        <View style={styles.numbersContainer}>
          <Text style={styles.dataText}>
            Depreciation by hour = {depPerHour.toFixed(2)}
          </Text>
          <View style={styles.data}>
            <Text style={styles.dataTitle}>
              Enter number of active hours for a specific period to get its
              depreciation
            </Text>
            <TextInput
              keyboardType="numeric"
              style={styles.input}
              placeholder="Enter"
              onChangeText={(e) => {
                if (!isNaN(Number(e))) {
                  setSpecificHours(Number(e));
                } else {
                  Alert.alert(
                    "Invalid input",
                    "Please enter a number in English"
                  );
                }
              }}
            />
            {specificHours !== 0 && (
              <Text style={[styles.dataText, styles.dataResult]}>
                Depreciation = {specificDep.toFixed(2)}
              </Text>
            )}
          </View>
          <View style={styles.data}>
            <Text style={styles.dataTitle}>
              Enter the total number of active hours by a specific period to get
              its opening book value
            </Text>
            <TextInput
              keyboardType="numeric"
              style={styles.input}
              placeholder="Enter"
              onChangeText={(e) => {
                if (!isNaN(Number(e))) {
                  setSpecificTotalHours(Number(e));
                } else {
                  Alert.alert(
                    "Invalid input",
                    "Please enter a number in English"
                  );
                }
              }}
            />
            {specificTotalHours !== 0 && (
              <View>
                <Text style={[styles.dataText, styles.dataResult]}>
                  OpeningBV = {sepecificOBV.toFixed(2)}
                </Text>
                <Text style={[styles.dataText, styles.dataResult]}>
                  Accumulated depreciation = {accDep.toFixed(2)}
                </Text>
              </View>
            )}
          </View>
        </View>
      )}
      <StatusBar barStyle="default" backgroundColor={"#43938A"} />
    </ScrollView>
  );
};

export default ActiveWorkingHours;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#E3EBF8",
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
    paddingHorizontal: 10,
    backgroundColor: "#43938A",
    marginVertical: 15,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
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
  dataTitle: {
    color: "white",
    marginBottom: 15,
    fontSize: 15,
  },
  dataResult: {
    color: "white",
    marginVertical: 5,
  },
});
