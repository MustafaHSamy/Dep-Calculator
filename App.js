import react from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import StraightLine from "./screens/StraightLine";
import DoubleDecliningBalance from "./screens/DoubleDecliningBalance";
import SumOfYearsDigits from "./screens/SumOfYearsDigits";
import InitialPage from "./screens/InitialPage";
import UnitsOfProduction from "./screens/UnitsOfProduction";
import Test from "./screens/Test";
import { StatusBar } from "react-native";

const Stack = createNativeStackNavigator();

export default function App() {
  // myColors "#033855", "#0E65A3", "#F86400", "#F79500", "#EBB652"
  // myColors2 "#F79500", "#F2A766", "#F0BD70", "#43938A", "#2F6569"
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="initial"
          component={InitialPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SLM"
          component={StraightLine}
          options={{
            title: "Straight-line method",
            headerStyle: { backgroundColor: "#43938A" },
          }}
        />
        <Stack.Screen
          name="DDB"
          component={DoubleDecliningBalance}
          options={{
            title: "Double-declining balance method",
            headerStyle: { backgroundColor: "#43938A" },
          }}
        />
        <Stack.Screen
          name="SYD"
          component={SumOfYearsDigits}
          options={{
            title: "Sum of Years digits method",
            headerStyle: { backgroundColor: "#43938A" },
          }}
        />
        <Stack.Screen
          name="UOP"
          component={UnitsOfProduction}
          options={{
            title: "Units of Production method",
            headerStyle: { backgroundColor: "#43938A" },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
