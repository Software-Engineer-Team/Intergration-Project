import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { Text } from "react-native-svg";

export default function ProfileScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Some Text</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "90%",
    backgroundColor: "blue",
  },
});
