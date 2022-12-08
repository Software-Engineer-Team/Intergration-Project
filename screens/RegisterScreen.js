import { useNavigation } from "@react-navigation/native";
import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Button from "../components/ui/Button";
import CheckBoxField from "../components/ui/CheckBoxField";
import ImageBg from "../components/ui/ImageBg";
import Input from "../components/ui/Input";
import TextField from "../components/ui/TextField";
import Title from "../components/ui/Title";
import { Colors } from "../constants/colors";

const RegisterScreen = () => {
  const { navigate } = useNavigation();
  return (
    <ImageBg source={require("../assets/images/register-bg.jpg")}>
      <SafeAreaView style={styles.container}>
        <View style={styles.content}>
          <Title type="Register Now" title="Millions of Job. Find yours" />

          <View style={styles.whoAmI}>
            <CheckBoxField title="Member" />
            <CheckBoxField title="Employer" />
          </View>

          <Input
            placeholder={"johnDoe"}
            textContentType={"name"}
            label={"User Name"}
          />

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

          <Input
            placeholder={"*********"}
            textContentType={"password"}
            label={"Re-type Password"}
          />
          <CheckBoxField title="I accept the terms & conditions" />

          <Button
            title={"Register"}
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

export default RegisterScreen;

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

  whoAmI: {
    flexDirection: "row",
  },
});
