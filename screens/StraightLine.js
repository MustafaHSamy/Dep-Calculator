import {
  Alert,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";

const StraightLine = () => {
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
        accDep[i] = firstCost - closingBV[i];
      }
      setAccumulatedDep(accDep);
      setCBV(closingBV);
      setOBV(openingBV);
      setYearlyDep(depYearly);
    }
  };

  useEffect(
    () => handleCalculating(),
    [firstCost, numberOfPeriods, salvageValue]
  );

  return (
    <ScrollView style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput
          keyboardType="numeric"
          style={styles.input}
          placeholder="Life periods"
          onChangeText={(e) => {
            if (!isNaN(Number(e))) {
              if (Number(e) > 500) {
                Alert.alert(
                  "too many periods",
                  "I'm sorry but entering too long periods could make the app crash. I will fix this soon, if you have a problem with this, please contact me."
                );
                setNumberOfPeriods(500);
              } else {
                setNumberOfPeriods(Number(e));
              }
            } else {
              Alert.alert("Invalid input", "Please enter a number");
            }
          }}
        />
        <TextInput
          keyboardType="numeric"
          style={styles.input}
          placeholder="First cost"
          onChangeText={(e) => {
            if (!isNaN(Number(e))) {
              setFirstCost(Number(e));
            } else {
              Alert.alert("Invalid input", "Please enter a number");
            }
          }}
        />
        <TextInput
          keyboardType="numeric"
          style={styles.input}
          placeholder="Salavge value"
          onChangeText={(e) => {
            if (!isNaN(Number(e))) {
              setSalvageValue(Number(e));
            } else {
              Alert.alert("Invalid input", "Please enter a number");
            }
          }}
        />
      </View>
      {firstCost !== "" && firstCost !== 0 && numberOfPeriods !== 0 && (
        <View style={styles.tableContainer}>
          {CBV.map((BV, index) => {
            return (
              <View key={`period${index + 1}`} style={styles.period}>
                <Text style={styles.outputHeading}>{`Period ${
                  index + 1
                }`}</Text>

                <View style={styles.numbersContainer}>
                  <Text style={styles.data}>{`Opening BV = ${Number(
                    OBV[index]
                  ).toFixed(2)}`}</Text>

                  <Text
                    style={styles.data}
                  >{`Depreciation = ${yearlyDep.toFixed(2)}`}</Text>

                  <Text
                    style={styles.data}
                  >{`Accumulated Dep = ${accumulatedDep[index].toFixed(
                    2
                  )}`}</Text>

                  <Text style={styles.data}>{`Closing BV = ${BV.toFixed(
                    2
                  )}`}</Text>
                </View>
              </View>
            );
          })}
        </View>
      )}
      <StatusBar barStyle="default" backgroundColor={"#43938A"} />
    </ScrollView>
  );
};

export default StraightLine;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#E3EBF8",
  },
  inputContainer: {
    flex: 0.25,
    alignItems: "center",
    marginVertical: StatusBar.currentHeight,
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
  outputHeading: {
    textAlign: "center",
    paddingVertical: 10,
    fontWeight: "bold",
    fontSize: 20,
    borderBottomWidth: 1,
    borderBottomColor: "black",
    color: "white",
  },
  numbersContainer: {
    flex: 1,
    padding: 10,
    justifyContent: "space-between",
  },
  data: {
    marginHorizontal: 2,
    marginVertical: 10,
    fontWeight: "bold",
    fontSize: 18,
    color: "white",
  },
  period: {
    backgroundColor: "#43938A",
    marginVertical: 15,
    marginHorizontal: 10,
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
});
