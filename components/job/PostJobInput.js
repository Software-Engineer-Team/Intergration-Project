import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Colors } from "../../constants/colors";
import {
  selectJobState,
  setAddress,
  setDescription,
  setEmail,
  setExperience,
  setMaxSalary,
  setMinSalary,
  setRequirements,
  setTitle,
  setType,
} from "../../features/job";

export default function PostJobInput({
  type,
  title,
  placeholder,
  textAreaStyle,
  textArea,
}) {
  const dispatch = useDispatch();

  const textChangeHandler = (text) => {
    switch (type) {
      case "JOB-TITLE":
        dispatch(setTitle({ title: text }));
        break;
      case "JOB-LOCATION":
        dispatch(setAddress({ address: text }));
        break;
      case "JOB-TYPE":
        dispatch(setType({ type: text }));
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
  };

  return (
    <View>
      <View style={styles.titleContainer}>
        <View style={styles.titleContent}>
          <Text style={styles.text}>{title}</Text>
        </View>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
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
