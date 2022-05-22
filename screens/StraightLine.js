import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";

const StraightLine = () => {
  const tableHeadings = [
    "Year",
    "Opening BV",
    "Depreciation",
    "Accumulated Dep.",
    "Closing BV",
  ];

  const [numberOfPeriods, setNumberOfPeriods] = useState(0);
  const [firstCost, setFirstCost] = useState("");
  const [salvageValue, setSalvageValue] = useState("");
  const [OBV, setOBV] = useState([]);
  const [CBV, setCBV] = useState([]);
  const [accumulatedDep, setAccumulatedDep] = useState([]);
  const [yearlyDep, setYearlyDep] = useState(0);

  const handleCalculating = () => {
    let inputsAreValid =
      numberOfPeriods !== 0 &&
      numberOfPeriods !== undefined &&
      firstCost !== undefined &&
      salvageValue !== undefined;
    if (inputsAreValid) {
      let depYearly = (firstCost - salvageValue) / numberOfPeriods;
      let openingBV = [firstCost];
      let closingBV = [];
      let accDep = [];
      for (let i = 0; i < numberOfPeriods; i++) {
        closingBV[i] = openingBV[i] - depYearly;
        openingBV[i + 1] = closingBV[i];
        accDep[i] = (i + 1) * depYearly;
      }
      console.log("Yearly Dep = ", depYearly);
      console.log("openingBV = ", openingBV);
      console.log("Accumulated Dep = ", accDep);
      console.log("closingBV = ", closingBV);
      setAccumulatedDep(accDep);
      setCBV(closingBV);
      setOBV(openingBV);
      setYearlyDep(depYearly);
    }
  };
  return (
    <ScrollView style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Life periods"
          onChangeText={(e) => {
            if (!isNaN(Number(e))) {
              setNumberOfPeriods(Number(e));
              handleCalculating();
            } else {
              Alert.alert("Invalid input", "Please enter a number");
            }
          }}
        />
        <TextInput
          style={styles.input}
          placeholder="First cost"
          onChangeText={(e) => {
            if (!isNaN(Number(e))) {
              setFirstCost(Number(e));
              handleCalculating();
            } else {
              Alert.alert("Invalid input", "Please enter a number");
            }
          }}
        />
        <TextInput
          style={styles.input}
          placeholder="Salavge value"
          onChangeText={(e) => {
            if (!isNaN(Number(e))) {
              setSalvageValue(Number(e));
              handleCalculating();
            } else {
              Alert.alert("Invalid input", "Please enter a number");
            }
          }}
        />
      </View>
      <View style={styles.tableContainer}>
        {CBV.map((BV, index) => {
          return (
            <View key={`Year${index + 1}`}>
              <Text style={styles.outputHeading}>{`Year${index + 1}`}</Text>

              <View style={styles.numbersContainer}>
                <Text style={styles.data}>{`Opening BV = ${OBV[index]}`}</Text>

                <Text style={styles.data}>{`Depreciation = ${yearlyDep}`}</Text>

                <Text
                  style={styles.data}
                >{`Accumulated Dep = ${accumulatedDep[index]}`}</Text>

                <Text style={styles.data}>{`Closing BV = ${BV}`}</Text>
              </View>
            </View>
          );
        })}
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
  outputHeading: {
    fontWeight: "bold",
    fontSize: 20,
    borderBottomWidth: 1,
    borderBottomColor: "black",
  },
  numbersContainer: {
    flex: 1,
    height: 100,
    padding: 10,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignContent: "space-around",
  },
  data: {
    height: 20,
    paddingHorizontal: 2,
    fontWeight: "bold",
    fontSize: 12,
    borderWidth: 1,
    borderColor: "black",
  },
});
