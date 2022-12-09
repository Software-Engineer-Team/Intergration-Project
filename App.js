import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
/* import { store } from "./store"; */
import IconFontAwesome from "react-native-vector-icons/FontAwesome";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import HomeScreen from "./screens/HomeScreen";
import ForgotPasswordScreen from "./screens/ForgotPasswordScreen";
import Icon from "./components/ui/Icon";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";
import { Sizes } from "./constants/sizes";
import { Colors } from "./constants/colors";
import { TouchableOpacity } from "react-native-gesture-handler";

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
            headerShown: true,
            headerTitleAlign: "center",
            title: "Home",
            headerLeft: () => (
              <TouchableOpacity>
                <IconFontAwesome name="bars" size={18} />
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            presentation: "fullScreenModal",
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{
            presentation: "fullScreenModal",
            headerShown: false,
          }}
        />
        {/* <Stack.Screen */}
        {/*   name="Profile" */}
        {/*   component={ProfileScreen} */}
        {/*   options={{ */}
        {/*     presentation: "modal", */}
        {/*     headerShown: false, */}
        {/*   }} */}
        {/* /> */}
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPasswordScreen}
          options={{
            presentation: "fullScreenModal",
            headerShown: false,
          }}
        />
      </Stack.Navigator>
      {/* </Provider> */}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
