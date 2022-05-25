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
        <View style={{ alignItems: "center" }}>
          <Text style={styles.methodsHeader}>Choose method</Text>
          <Text style={styles.comingSoon}>More methods coming soon!</Text>
        </View>
        <MadeButton
          onPress={() => navigation.navigate("SLM")}
          buttonStyles={styles.button}
          textStyles={styles.buttonText}
          title="Straight-line"
        />
        <MadeButton
          onPress={() => navigation.navigate("DDB")}
          buttonStyles={styles.button}
          textStyles={styles.buttonText}
          title="Double-declining balcance"
        />
        <MadeButton
          onPress={() => navigation.navigate("SYD")}
          buttonStyles={styles.button}
          textStyles={styles.buttonText}
          title="Sum-of-Years digits"
        />
        <View style={styles.footer}>
          <Text style={styles.contactMe}>
            Do you have feedback? contact me, mustafa.samy591@gmail.com
          </Text>
        </View>
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
  comingSoon: {
    color: "gray",
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
  footer: {
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    bottom: -50,
  },
  contactMe: {
    color: "gray",
    textAlign: "center",
  },
});

export default HomeScreen;
