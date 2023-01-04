import React from "react";
import { StyleSheet, View } from "react-native";
import { Colors } from "../../constants/colors";
import Button from "../ui/Button";
import ApplyJobInput from "./ApplyJobInput";

export default function ApplyJobForm({ applyJobHandler }) {
  return (
    <View style={styles.container}>
      <ApplyJobInput
        type="POSITION"
        title="Position"
        placeholder="Project Manager"
      />
      <ApplyJobInput
        type="QUALIFICATION"
        title="Qualification"
        placeholder="Graduation or PostGraduation"
      />

      <ApplyJobInput
        type="UNIVERSITY"
        title="University"
        placeholder="Back Khoa..."
      />

      <ApplyJobInput
        type="EXPERIENCE"
        title="Current Experience"
        placeholder="2 years"
      />
      <ApplyJobInput
        type="SKILLS"
        title="Skills"
        placeholder="Php Developer, Web Designer..."
      />
      <ApplyJobInput
        type="DESCRIPTION"
        title="Description"
        placeholder="example@gmail.com"
        textArea={true}
        textAreaStyle={styles.textArea}
      />
      <Button
        title={"Submit a Job"}
        color={Colors.buttonColor}
        buttonStyle={{ borderRadius: 0 }}
        textStyle={{ fontSize: 15 }}
        onPress={applyJobHandler}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "90%",
    marginHorizontal: 10,
    marginVertical: 5,
    marginBottom: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
    left: 10,
    borderRadius: 5,
    backgroundColor: "white",
    padding: 10,
  },
  textArea: {
    /* height: 150, */
    justifyContent: "flex-start",
    borderColor: Colors.textMuted,
    borderWidth: 1,
    padding: 5,
    paddingTop: 10,
  },
});
