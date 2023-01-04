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
import ApplyJob from "./components/home/ApplyJob";
import EmployerScreen from "./screens/EmployerScreen";
import CandidateDetail from "./components/employer/CandidateDetail";
import ResumesScreen from "./screens/ResumesScreen";
import JobsScreen from "./screens/JobsScreen";

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
                  type="Jobs"
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
                  type="PostJob"
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
            name="Apply Job"
            component={ApplyJob}
            options={{
              presentation: "fullScreenModal",
              headerShown: true,
              headerTitleAlign: "center",
              title: "Apply Job",
              headerLeft: () => (
                <IconProfile
                  customStyle={{ left: -20 }}
                  iconName="arrow-left"
                  type="ApplyJob"
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
                <IconProfile
                  type="Employer"
                  customStyle={{ left: -20 }}
                  iconName="bars"
                />
              ),
            }}
          />
          <Stack.Screen
            name="Candidate Resumes"
            component={ResumesScreen}
            options={{
              presentation: "fullScreenModal",
              headerShown: true,
              headerTitleAlign: "center",
              title: "Cadidate Resumes",
              headerLeft: () => (
                <IconProfile
                  customStyle={{ left: -20 }}
                  iconName="arrow-left"
                  type="Candidate Resumes"
                />
              ),
            }}
          />
          <Stack.Screen
            name="Candidate Detail"
            component={CandidateDetail}
            options={{
              presentation: "fullScreenModal",
              headerShown: true,
              headerTitleAlign: "center",
              title: "Cadidate Detail",
              headerLeft: () => (
                <IconProfile
                  customStyle={{ left: -20 }}
                  iconName="arrow-left"
                  type="Candidate Detail"
                />
              ),
            }}
          />
          <Stack.Screen
            name="Posted Jobs"
            component={JobsScreen}
            options={{
              presentation: "fullScreenModal",
              headerShown: true,
              headerTitleAlign: "center",
              title: "Posted Jobs",
              headerLeft: () => (
                <IconProfile
                  customStyle={{ left: -20 }}
                  iconName="arrow-left"
                  type="Posted Jobs"
                />
              ),
            }}
          />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}
