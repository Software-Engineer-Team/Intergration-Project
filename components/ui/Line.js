import React from "react";
import { StyleSheet, View } from "react-native";
import { Colors } from "../../constants/colors";
export default function Line({ lineStyle }) {
  return <View style={[styles.line, lineStyle]} />;
}
const styles = StyleSheet.create({
  line: {
    backgroundColor: Colors.lineColor,
    width: "100%",
    height: 1,
    marginVertical: 20,
  },
});
