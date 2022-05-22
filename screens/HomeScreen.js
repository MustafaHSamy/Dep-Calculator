import { View, Text, StyleSheet } from "react-native";
import React from "react";
import MadeButton from "../components/MadeButton";
import Header from "../components/Header";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <Header
        headerStyles={styles.header}
        headerTextStyles={styles.headerText}
        text="Depreciation Calculator"
      />
      <View style={styles.buttonsContaier}>
        <Text style={styles.methodsHeader}>Choose method</Text>
        <MadeButton
          onPress={() => navigation.navigate("SLM")}
          buttonStyles={styles.button}
          textStyles={styles.buttonText}
          title="Straight-line method"
        />
        <MadeButton
          buttonStyles={styles.button}
          textStyles={styles.buttonText}
          title="Double-declining balcance"
        />
        <MadeButton
          buttonStyles={styles.button}
          textStyles={styles.buttonText}
          title="Sum-of-Years digits"
        />
        <MadeButton
          buttonStyles={styles.button}
          textStyles={styles.buttonText}
          title="Active working hours"
        />
        <MadeButton
          buttonStyles={styles.button}
          textStyles={styles.buttonText}
          title="Units of production"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  header: {
    backgroundColor: "#033855",
  },
  headerText: {
    color: "white",
  },
  buttonsContaier: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "#E3EBF8",
  },
  button: {
    borderRadius: 10,
    width: 300,
    backgroundColor: "#F0BD70",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  buttonText: {
    fontWeight: "bold",
    fontSize: 20,
  },
  methodsHeader: {
    fontSize: 40,
  },
});

export default HomeScreen;
