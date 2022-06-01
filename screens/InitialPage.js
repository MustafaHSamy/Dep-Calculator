import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect } from "react";
import { ImageBackground } from "react-native-web";
import MadeButton from "../components/MadeButton";

const InitialPage = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <View style={styles.logos}>
        <Image
          source={require("../assets/fbeng_logo2.png")}
          style={styles.collegeLogo}
        />
      </View>
      <Text style={styles.head}>Team</Text>
      <View style={styles.namesContainer}>
        <View style={styles.teamNames}>
          <Text style={styles.name}>مصطفى هشام محمد</Text>
          <Text style={styles.name}>محمد شاكر فوزي</Text>
          <Text style={styles.name}>ابراهيم احمد ابراهيم</Text>
          <Text style={styles.name}>حسين محمد حسين</Text>
          <Text style={styles.name}>محمد اشرف عبدالفتاح</Text>
          <Text style={styles.name}>زكريا سعيد احمد</Text>
        </View>
        <View style={styles.teamNames}>
          <Text style={styles.name}>محمد اسماعيل سمير</Text>
          <Text style={styles.name}>احمد اشرف السيد</Text>
          <Text style={styles.name}>عمرو اشرف يونس</Text>
          <Text style={styles.name}>اسلام احمد محمود</Text>
          <Text style={styles.name}>محمد حسن محمد</Text>
          <Text style={styles.name}>عمر احمد التهامي</Text>
        </View>
      </View>
      <Text style={styles.name}>Submitted to:</Text>
      <Text style={styles.name}> Prof. Dr. Ibrahim Sabry</Text>
      <MadeButton
        onPress={() => navigation.navigate("Home")}
        title={"Go to application ➜"}
        buttonStyles={styles.button}
        textStyles={styles.btnText}
      />
      <StatusBar barStyle="default" backgroundColor={"#033855"} />
    </View>
  );
};

export default InitialPage;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#033855",
    padding: 10,
  },
  head: {
    width: "100%",
    marginTop: 20,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  namesContainer: {
    alignItems: "center",
  },
  namesContainer: {
    flexDirection: "row",
  },
  teamNames: {
    borderBottomColor: "black",
    borderBottomWidth: 2,
  },
  name: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    fontWeight: "bold",
    fontSize: 18,
    color: "white",
  },
  logos: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  logo: {
    width: 80,
    height: 80,
  },
  button: {
    position: "absolute",
    bottom: 10,
    right: 20,
  },
  btnText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
});
