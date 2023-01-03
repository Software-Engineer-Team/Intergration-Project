import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import SocialLogin from "../components/login/SocialLogin";
import Button from "../components/ui/Button";
import ImageBg from "../components/ui/ImageBg";
import Input from "../components/ui/Input";
import TextField from "../components/ui/TextField";
import Title from "../components/ui/Title";
import { Colors } from "../constants/colors";
import { postData } from "../utils/fetch-utils";
import { REACT_APP_ENDPOINT_SERVER } from "@env";
import { showAlert } from "../utils/alert-utils";
import { useDispatch } from "react-redux";
import { setUser } from "../features/user";
import Loader from "../components/ui/Loader";
import { validateHandler } from "../utils/validate-utils";

const LoginScreen = () => {
  const [email, onChangeEmail] = useState("");
  const [password, onChangePassword] = useState("");
  const { navigate } = useNavigation();
  const dispatch = useDispatch();
  const [isFetching, setisFetching] = useState(false);
  const logInHandler = async () => {
    if (validateHandler({ email, password, type: "Login" })) {
      setisFetching(true);
      try {
        const resMember = await postData(
          { email, password },
          REACT_APP_ENDPOINT_SERVER + "/auth/js/login"
        );
        if (resMember.message) {
          const resEmployer = await postData(
            { email, password },
            REACT_APP_ENDPOINT_SERVER + "/auth/companies/login"
          );
          if (resEmployer.message) {
            setisFetching(false);
            return showAlert(resEmployer.message);
          }
          const { data, token } = resEmployer;
          dispatch(
            setUser({
              name: data.name,
              email: data.email,
              role: "Employer",
              id: data.id,
              token,
            })
          );
          setisFetching(false);
          return navigate("Employer");
          /* return navigate("Candidate Detail", { */
          /*   name: "Name  Test", */
          /*   email: "Email Test", */
          /*   address: "Address Test", */
          /*   description: "Something", */
          /*   skills: "React Native", */
          /*   experience: "3 years", */
          /*   education: "BK", */
          /* }); */
        } else {
          const { job_seeker, token } = resMember;
          dispatch(
            setUser({
              name: job_seeker.name,
              email: job_seeker.email,
              id: job_seeker.id,
              role: "Member",
              token,
            })
          );
          setisFetching(false);
          return navigate("Home");
        }
      } catch (err) {
        console.error(err);
        showAlert(err);
        setisFetching(false);
      }
    }
  };

  return (
    <ImageBg source={require("../assets/images/login-bg.jpg")}>
      <SafeAreaView style={styles.container}>
        <View style={styles.content}>
          <Title type="Sign In" title="Millions of Job. Find yours" />
          <Input
            placeholder={"johndoe@gmail.com"}
            textContentType={"emailAddress"}
            onChangeText={onChangeEmail}
            autoCapitalize="none"
            value={email}
            label={"E-mail"}
          />
          <Input
            placeholder={"*********"}
            textContentType={"password"}
            onChangeText={onChangePassword}
            autoCapitalize="none"
            value={password}
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
            onPress={logInHandler}
          />
          <TextField
            title={"Don't have an account? SignUp"}
            type="center"
            onPress={() => {
              navigate("Register");
            }}
          />

          {isFetching && <Loader />}

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
