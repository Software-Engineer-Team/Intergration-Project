import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Colors } from "../../constants/colors";

export default function Icon({ children, type }) {
  const bg =
    type === "FACEBOOK"
      ? styles.faceBookBg
      : type === "GOOGLE"
      ? styles.googleBg
      : styles.twitterBg;
  return (
    <TouchableOpacity style={[styles.container, bg]}>
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
  faceBookBg: {
    backgroundColor: Colors.faceBookBg,
  },
  googleBg: {
    backgroundColor: Colors.googleBg,
  },
  twitterBg: {
    backgroundColor: Colors.twitterBg,
  },
});
