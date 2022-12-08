import React, { useState } from "react";
import Checkbox from "expo-checkbox";
import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../../constants/colors";
export default function CheckBoxField({ title }) {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <View style={styles.container}>
      <Checkbox
        disabled={false}
        value={isChecked}
        onValueChange={(newValue) => setIsChecked(newValue)}
        color={isChecked ? Colors.checkBoxColor : undefined}
        style={styles.checkbox}
      />
      <Text style={styles.text}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginVertical: 15,
    marginLeft: 10,
    /* backgroundColor: "blue", */
    alignItems: "center",
    justifyContent: "flex-start",
  },
  text: {
    color: Colors.color,
    fontSize: 13,
    marginLeft: 10,
  },
  checkbox: {
    borderRadius: 3,
    borderColor: "#fffffffe",
  },
});
