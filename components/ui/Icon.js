import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

export default function Icon({ children, customStyle, onPress }) {
  return (
    <TouchableOpacity style={[styles.container, customStyle]} onPress={onPress}>
      {children}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    padding: 11,
    width: 45,
    height: 45,
    marginHorizontal: 10,
    borderRadius: 4,
  },
});
