import react from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import StraightLine from "./screens/StraightLine";
import DoubleDecliningBalance from "./screens/DoubleDecliningBalance";
import SumOfYearsDigits from "./screens/SumOfYearsDigits";

const Stack = createNativeStackNavigator();

export default function App() {
  const myColors = ["#033855", "#0E65A3", "#F86400", "#F79500", "#EBB652"];
  const myColors2 = ["#F79500", "#F2A766", "#F0BD70", "#43938A", "#2F6569"];

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
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
            title: "Double-declining balance method",
            headerStyle: { backgroundColor: "#43938A" },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
