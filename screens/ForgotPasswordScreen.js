import { useNavigation } from "@react-navigation/native";
import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import SocialLogin from "../components/Login/SocialLogin";
import Button from "../components/ui/Button";
import ImageBg from "../components/ui/ImageBg";
import Input from "../components/ui/Input";
import TextField from "../components/ui/TextField";
import Title from "../components/ui/Title";
import { Colors } from "../constants/colors";

const ForgotPasswordScreen = () => {
  const { navigate } = useNavigation();
  return (
    <ImageBg source={require("../assets/images/login-bg.jpg")}>
      <SafeAreaView style={styles.container}>
        <View style={styles.content}>
          <Title
            type="Forgot Password"
            title="We send you a password via Mobile"
          />
          <Input
            placeholder={"johndoe@gmail.com"}
            textContentType={"emailAddress"}
            label={"E-mail"}
          />

          <Button
            title={"Send"}
            color={Colors.buttonColor}
            onPress={() => {}}
          />
          <TextField
            title={"Already have an account? SignIn"}
            type="center"
            onPress={() => {
              navigate("Login");
            }}
          />
        </View>
      </SafeAreaView>
    </ImageBg>
  );
};

export default ForgotPasswordScreen;

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
