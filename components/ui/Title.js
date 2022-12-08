import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../../constants/colors";
export default function Title({ type, title }) {
  return (
    <View style={styles.container}>
      <Text style={styles.type}>{type}</Text>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: 20,
  },
  type: {
    color: Colors.color,
    fontSize: 24,
    fontWeight: "bold",
  },
  title: {
    color: Colors.labelColor,
    fontSize: 15,
    fontWeight: "500",
    letterSpacing: 0.1,
  },
});
