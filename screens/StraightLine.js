import {
  Alert,
  ScrollView,
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
        accDep[i] = (i + 1) * depYearly;
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
          style={styles.input}
          placeholder="Life periods"
          onChangeText={(e) => {
            if (!isNaN(Number(e))) {
              if (Number(e) > 500) {
                Alert.alert(
                  "buying for you great great children?",
                  "I'm sorry but entering too long periods could make the app crash. If you have a problem with this, please contact me."
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
              <View key={`period${index + 1}`}>
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
    borderRadius: 10,
  },
  outputHeading: {
    marginTop: 20,
    fontWeight: "bold",
    fontSize: 20,
    borderBottomWidth: 1,
    borderBottomColor: "black",
  },
  numbersContainer: {
    flex: 1,
    padding: 10,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignContent: "space-around",
  },
  data: {
    height: 20,
    paddingHorizontal: 2,
    marginHorizontal: 2,
    marginVertical: 10,
    fontWeight: "bold",
    fontSize: 15,
  },
});
