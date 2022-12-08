import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { Colors } from "../../constants/colors";

export default function TextField({ title, onPress, type }) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text
        style={[
          styles.text,
          type === "right"
            ? styles.textRight
            : type === "left"
            ? styles.textLeft
            : null,
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,
    borderRadius: 4,
    /* elevation: 3, */
    opacity: 1,
  },
  text: {
    alignSelf: "center",
    paddingVertical: 8,
    fontSize: 12,
    lineHeight: 21,
    fontWeight: "500",
    letterSpacing: 0.25,
    color: Colors.textFieldColor,
  },
  textRight: {
    alignSelf: "flex-end",
  },
  textLeft: {
    alignSelf: "flex-start",
  },
});
