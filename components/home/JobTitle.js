import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../../constants/colors";

const JobTitle = ({ textMuted, text }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textMuted}>{textMuted}</Text>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default JobTitle;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: Colors.rootBodyImg,
  },
  textMuted: {
    color: Colors.textMuted,
    fontSize: 16,
    fontWeight: "bold",
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
