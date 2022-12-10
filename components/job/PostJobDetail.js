import React from "react";
import { StyleSheet, View } from "react-native";
import { Colors } from "../../constants/colors";
import PostJobInput from "./PostJobInput";

export default function PostJobDetail() {
  return (
    <View style={styles.container}>
      <PostJobInput
        type="JOB-TITLE"
        title="Job Title"
        placeholder="Project Manager"
      />
      <PostJobInput
        type="JOB-LOCATION"
        title="Job Location"
        placeholder="Location"
      />
      <PostJobInput type="JOB-TYPE" title="Job Type" placeholder="Full Time" />
      <PostJobInput
        type="JOB-CATEGORY"
        title="Job Category"
        placeholder="PHP,Web Designer"
      />
      <PostJobInput
        type="JOB-EDUCATION-LEVEL"
        title="Education Level"
        placeholder="B.E"
      />
      <PostJobInput
        type="JOB-EXPERIENCE"
        title="Experience"
        placeholder="2 years"
      />
      <PostJobInput
        type="JOB-SALARY"
        title="Salary"
        placeholder="$2000-$4000"
      />
      <PostJobInput
        type="JOB-CONTACT"
        title="Mail Contact"
        placeholder="example@gmail.com"
      />
      <PostJobInput
        type="JOB-DESCRIPTION"
        title="Description"
        placeholder="example@gmail.com"
        textArea={true}
        textAreaStyle={styles.textArea}
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
