import { View, Text, StyleSheet, StatusBar } from "react-native";
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
      <MadeButton
        onPress={() => navigation.navigate("initial")}
        title={"◄ See our team"}
        buttonStyles={styles.teamButton}
        textStyles={styles.teamBtnText}
      />
      <View style={styles.buttonsContaier}>
        <View style={{ alignItems: "center" }}>
          <Text style={styles.methodsHeader}>Choose method</Text>
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
        <MadeButton
          onPress={() => navigation.navigate("UOP")}
          buttonStyles={styles.button}
          textStyles={styles.buttonText}
          title="Units of Production"
        />
        <MadeButton
          onPress={() => navigation.navigate("AWH")}
          buttonStyles={styles.button}
          textStyles={styles.buttonText}
          title="Active Working Hours"
        />
        <View style={styles.footer}>
          <Text style={styles.contactMe}>
            Do you have feedback? reach me mustafa.samy591@gmail.com
          </Text>
        </View>
      </View>
      <StatusBar barStyle="default" backgroundColor={"#033855"} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#E3EBF8",
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
    marginTop: 20,
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
    paddingBottom: 30,
  },
  teamButton: {
    position: "absolute",
    top: StatusBar.currentHeight + 30,
  },
  teamBtnText: {
    fontWeight: "bold",
    fontSize: 15,
  },
});

export default HomeScreen;
