import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  unstable_enableLogBox,
  View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Colors } from "../../constants/colors";
import {
  selectJob,
  setAddress,
  setDescription,
  setEmail,
  setExperience,
  setMaxSalary,
  setMinSalary,
  setPosition,
  setRequirements,
  setTitle,
} from "../../features/job";

export default function PostJobInput({
  type,
  title,
  placeholder,
  textAreaStyle,
  textArea,
  isClear,
}) {
  const dispatch = useDispatch();
  const job = useSelector(selectJob);
  useEffect(() => {
    if (isClear) {
      setValue("");
    }
  }, [isClear]);
  const [value, setValue] = useState("");

  const textChangeHandler = (text) => {
    switch (type) {
      case "JOB-TITLE":
        dispatch(setTitle({ title: text }));
        break;
      case "JOB-LOCATION":
        dispatch(setAddress({ address: text }));
        break;
      case "JOB-POSITION":
        dispatch(setPosition({ position: text }));
        break;
      case "JOB-CATEGORY":
        dispatch(setRequirements({ category: text }));
        break;
      case "JOB-EXPERIENCE":
        dispatch(setExperience({ experience: text }));
        break;
      case "JOB-MIN_SALARY":
        dispatch(setMinSalary({ min_salary: parseInt(text) }));
        break;
      case "JOB-MAX_SALARY":
        dispatch(setMaxSalary({ max_salary: parseInt(text) }));
        break;
      case "JOB-CONTACT":
        dispatch(setEmail({ email: text }));
        break;
      case "JOB-DESCRIPTION":
        dispatch(setDescription({ description: text }));
        break;
      default:
        break;
    }
    setValue(text);
  };

  /* const chooseTextHandler = () => { */
  /*   switch (type) { */
  /*     case "JOB-TITLE": */
  /*       return job.title; */
  /*     case "JOB-LOCATION": */
  /*       return job.address; */
  /*     case "JOB-POSITION": */
  /*       return job.position; */
  /*     case "JOB-CATEGORY": */
  /*       return job.requirements; */
  /*     case "JOB-EXPERIENCE": */
  /*       return toString(job.experience); */
  /*     case "JOB-MIN_SALARY": */
  /*       return toString(job.min_salary); */
  /*     case "JOB-MAX_SALARY": */
  /*       return toString(job.max_salary); */
  /*     case "JOB-CONTACT": */
  /*       return job.email; */
  /*     case "JOB-DESCRIPTION": */
  /*       return job.description; */
  /*     default: */
  /*       break; */
  /*   } */
  /* }; */

  return (
    <View>
      <View style={styles.titleContainer}>
        <View style={styles.titleContent}>
          <Text style={styles.text}>{title}</Text>
        </View>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          value={value}
          placeholder={placeholder}
          onChangeText={textChangeHandler}
          style={[styles.textInput, textAreaStyle]}
          placeholderTextColor={Colors.textMuted}
          multiline={textArea}
          underlineColorAndroid="#ffffff"
          numberOfLines={textArea && 4}
          textAlignVertical={textArea ? "top" : "center"}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    marginTop: 7,
  },
  titleContent: {
    marginLeft: 10,
  },
  text: {
    lineHeight: 18,
    fontSize: 16,
  },
  inputContainer: {
    padding: 10,
    flex: 1,
    flexDirection: "row",
  },
  textInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: Colors.textMuted,
    padding: 5,
    paddingLeft: 10,
  },
});
