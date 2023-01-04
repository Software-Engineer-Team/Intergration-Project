import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { useDispatch } from "react-redux";
import { Colors } from "../../constants/colors";
import {
  setResumeDescription,
  setResumeExperience,
  setResumePosition,
  setResumeQualification,
  setResumeSkills,
  setResumeUniversity,
} from "../../features/resume";

export default function ApplyJobInput({
  type,
  title,
  placeholder,
  textAreaStyle,
  textArea,
  isClear,
}) {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");

  useEffect(() => {
    if (isClear) {
      setValue("");
    }
  }, [isClear]);

  const textChangeHandler = (text) => {
    switch (type) {
      case "POSITION":
        dispatch(setResumePosition({ position: text }));
        break;
      case "EXPERIENCE":
        dispatch(setResumeExperience({ experience: text }));
        break;
      case "SKILLS":
        dispatch(setResumeSkills({ skills: text }));
        break;
      case "DESCRIPTION":
        dispatch(setResumeDescription({ description: text }));
        break;
      case "QUALIFICATION":
        dispatch(setResumeQualification({ qualification: text }));
        break;
      case "UNIVERSITY":
        dispatch(setResumeUniversity({ university: text }));
        break;
      default:
        break;
    }
    setValue(text);
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
