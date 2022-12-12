import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import { store } from "./store";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import HomeScreen from "./screens/HomeScreen";
import ForgotPasswordScreen from "./screens/ForgotPasswordScreen";
import IconProfile from "./components/home/IconProfile";
import Jobs from "./components/job/Jobs";
import PostJob from "./components/job/PostJob";
import JobDetail from "./components/job/JobDetail";
import EmployerScreen from "./screens/EmployerScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator>
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
          <Stack.Screen
            name="ForgotPassword"
            component={ForgotPasswordScreen}
            options={{
              presentation: "fullScreenModal",
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              presentation: "fullScreenModal",
              headerShown: true,
              headerTitleAlign: "center",
              title: "Home",
              headerLeft: () => (
                <IconProfile
                  customStyle={{ left: -20 }}
                  iconName="bars"
                  type="Profile"
                />
              ),
            }}
          />
          <Stack.Screen
            name="Jobs"
            component={Jobs}
            options={{
              presentation: "fullScreenModal",
              headerShown: true,
              headerTitleAlign: "center",
              title: "Jobs",
              headerLeft: () => (
                <IconProfile
                  customStyle={{ left: -20 }}
                  iconName="arrow-left"
                />
              ),
            }}
          />
          <Stack.Screen
            name="PostJob"
            component={PostJob}
            options={{
              presentation: "fullScreenModal",
              headerShown: true,
              headerTitleAlign: "center",
              title: "Post a Job",
              headerLeft: () => (
                <IconProfile
                  customStyle={{ left: -20 }}
                  iconName="arrow-left"
                />
              ),
            }}
          />
          <Stack.Screen
            name="JobDetail"
            component={JobDetail}
            options={{
              presentation: "fullScreenModal",
              headerShown: true,
              headerTitleAlign: "center",
              title: "Job Detail",
              headerLeft: () => (
                <IconProfile
                  customStyle={{ left: -20 }}
                  iconName="arrow-left"
                  type="JobDetail"
                />
              ),
            }}
          />
          <Stack.Screen
            name="Employer"
            component={EmployerScreen}
            options={{
              presentation: "fullScreenModal",
              headerShown: true,
              headerTitleAlign: "center",
              title: "Employer",
              headerLeft: () => (
                <IconProfile customStyle={{ left: -20 }} iconName="bars" />
              ),
            }}
          />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}
