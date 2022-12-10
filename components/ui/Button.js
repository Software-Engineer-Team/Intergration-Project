import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { Colors } from "../../constants/colors";

export default function Button({
  title,
  onPress,
  buttonStyle = {},
  textStyle = {},
}) {
  return (
    <TouchableOpacity style={[styles.button, buttonStyle]} onPress={onPress}>
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 11,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3, // Box-shadow
    backgroundColor: Colors.buttonColor,
    opacity: 0.8,
    marginTop: 10,
  },
  text: {
    fontSize: 12,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: Colors.color,
  },
});
