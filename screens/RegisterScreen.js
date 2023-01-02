import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import Button from "../components/ui/Button";
import CheckBoxField from "../components/ui/CheckBoxField";
import ImageBg from "../components/ui/ImageBg";
import Input from "../components/ui/Input";
import TextField from "../components/ui/TextField";
import Title from "../components/ui/Title";
import { Colors } from "../constants/colors";
import { REACT_APP_ENDPOINT_SERVER } from "@env";
import { validateHandler } from "../utils/validate-utils";
import { postData } from "../utils/fetch-utils";
import { showAlert } from "../utils/alert-utils";
import Loader from "../components/ui/Loader";
import { useDispatch } from "react-redux";
import { setUser } from "../features/user";

const RegisterScreen = () => {
  const { navigate } = useNavigation();
  const dispatch = useDispatch();
  const [name, onChangeName] = useState("");
  const [email, onChangeEmail] = useState("");
  const [password, onChangePassword] = useState("");
  const [retypePassword, onChangeRetypePassword] = useState("");
  const [isMember, setIsMember] = useState(true);
  const [isEmployer, setIsEmployer] = useState(false);
  const [terms, setTerms] = useState(false);
  const [isFetching, setisFetching] = useState(false);

  const removeTypeUser = () => {
    setIsMember(false);
    setIsEmployer(false);
  };

  const registerHandler = async () => {
    if (validateHandler({ name, email, password, retypePassword, terms })) {
      let url = REACT_APP_ENDPOINT_SERVER + "/auth/js/register";
      if (isEmployer) {
        url = REACT_APP_ENDPOINT_SERVER + "/auth/companies/register";
      }
      console.log({ name, email, password });
      console.log(url);

      try {
        setisFetching(true);
        const res = await postData(
          {
            name,
            email,
            password,
          },
          url
        );
        setisFetching(false);
        if (res.errors) {
          return showAlert(res.errors.email[0]);
        }

        if (!isEmployer) {
          const { job_seeker, token } = res;
          dispatch(
            setUser({
              name: job_seeker.name,
              email: job_seeker.email,
              id: job_seeker.id,
              role: "Member",
              token,
            })
          );
        } else {
          const { data, token } = res;
          dispatch(
            setUser({
              name: data.name,
              email: data.email,
              role: "Employer",
              id: data.id,
              token,
            })
          );
        }
        navigate("Home");
      } catch (err) {
        console.error(err);
        showAlert(err);
        setisFetching(false);
      }
    }
  };

  return (
    <ImageBg source={require("../assets/images/register-bg.jpg")}>
      <SafeAreaView style={styles.container}>
        <View style={styles.content}>
          <Title type="Register Now" title="Millions of Job. Find yours" />

          <View style={styles.whoAmI}>
            <CheckBoxField
              title="Member"
              role={isMember}
              removeTypeUser={removeTypeUser}
              toggleTypeUser={setIsMember}
            />
            <CheckBoxField
              title="Employer"
              role={isEmployer}
              removeTypeUser={removeTypeUser}
              toggleTypeUser={setIsEmployer}
            />
          </View>

          <Input
            placeholder={"johnDoe"}
            textContentType={"name"}
            onChangeText={onChangeName}
            value={name}
            label={"User Name"}
          />

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

          <Input
            placeholder={"*********"}
            textContentType={"password"}
            onChangeText={onChangeRetypePassword}
            autoCapitalize="none"
            value={retypePassword}
            label={"Re-type Password"}
          />

          <CheckBoxField
            title="I accept the terms & conditions"
            toggleTypeUser={setTerms}
            role={terms}
          />

          <Button
            title={"Register"}
            color={Colors.buttonColor}
            onPress={registerHandler}
          />

          <TextField
            title={"Already have an account? SignIn"}
            type="center"
            onPress={() => {
              navigate("Login");
            }}
          />

          {isFetching && <Loader />}
        </View>
      </SafeAreaView>
    </ImageBg>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
