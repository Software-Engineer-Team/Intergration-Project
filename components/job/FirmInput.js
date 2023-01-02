import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { useSelector } from "react-redux";
import { Colors } from "../../constants/colors";
import { selectUser } from "../../features/user";

export default function FirmInput({
  type,
  title,
  placeholder,
  textAreaStyle,
  textArea,
}) {
  const user = useSelector(selectUser);
  console.log(user);
  const textChangeHandler = (text) => {
    console.log(text);
    switch (type) {
      case "FIRM-NAME":
        break;
      case "FIRM-ADDRESS":
        break;
      case "FIRM-DESCRIPTION":
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
