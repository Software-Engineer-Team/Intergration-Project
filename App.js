import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
/* import { store } from "./store"; */
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import HomeScreen from "./screens/HomeScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      {/* <Provider store={store}> */}
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            presentation: "fullScreenModal",
            headerShown: false,
          }}
        />
        {/* <Stack.Screen */}
        {/*   name="Login" */}
        {/*   component={LoginScreen} */}
        {/*   options={{ */}
        {/*     presentation: "fullScreenModal", */}
        {/*     headerShown: true, */}
        {/*   }} */}
        {/* /> */}
        {/* <Stack.Screen */}
        {/*   name="Register" */}
        {/*   component={RegisterScreen} */}
        {/*   options={{ */}
        {/*     presentation: "fullScreenModal", */}
        {/*     headerShown: false, */}
        {/*   }} */}
        {/* /> */}
      </Stack.Navigator>
      {/* </Provider> */}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
