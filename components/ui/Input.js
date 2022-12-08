import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { Colors } from "../../constants/colors";

export default function Input({
  label,
  textContentType,
  placeholder,
  onChangeText,
  value,
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        textContentType={textContentType}
        style={styles.textInput}
        placeholder={placeholder}
        onChangeText={onChangeText}
        placeholderTextColor={Colors.placeholderColor}
        secureTextEntry={textContentType === "password" ? true : false}
        value={value}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  textInput: {
    borderBottomWidth: 1,
    borderColor: Colors.borderBottom,
    color: Colors.color,
    width: "100%",
    fontSize: 13,
    paddingBottom: 2,
    lineHeight: 21,
    letterSpacing: 0.25,
  },
  container: {
    width: "100%",
    marginVertical: 10,
  },
  label: {
    color: Colors.labelColor,
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 21,
    letterSpacing: 0.25,
  },
});
