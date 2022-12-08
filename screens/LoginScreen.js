import { useNavigation } from "@react-navigation/native";
import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import SocialLogin from "../components/login/SocialLogin";
import Button from "../components/ui/Button";
import ImageBg from "../components/ui/ImageBg";
import Input from "../components/ui/Input";
import TextField from "../components/ui/TextField";
import Title from "../components/ui/Title";
import { Colors } from "../constants/colors";

const LoginScreen = () => {
  const { navigate } = useNavigation();
  return (
    <ImageBg source={require("../assets/images/login-bg.jpg")}>
      <SafeAreaView style={styles.container}>
        <View style={styles.content}>
          <Title type="Sign In" title="Millions of Job. Find yours" />
          <Input
            placeholder={"johndoe@gmail.com"}
            textContentType={"emailAddress"}
            label={"E-mail"}
          />
          <Input
            placeholder={"*********"}
            textContentType={"password"}
            label={"Password"}
          />

          <TextField
            title={"Forgot your password?"}
            type="right"
            onPress={() => {
              navigate("ForgotPassword");
            }}
          />

          <Button
            title={"Sign In"}
            color={Colors.buttonColor}
            onPress={() => {}}
          />
          <TextField
            title={"Don't have an account? SignUp"}
            type="center"
            onPress={() => {
              navigate("Register");
            }}
          />

          <SocialLogin />
        </View>
      </SafeAreaView>
    </ImageBg>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    /* paddingTop: 100, */
    /* backgroundColor: "blue", */
    alignItems: "center",
    justifyContent: "center",
  },

  content: {
    width: 300,
  },
});
