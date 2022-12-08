import React from "react";
import { View, StyleSheet } from "react-native";
import { Colors } from "../../constants/colors";

function Card({ children }) {
  return <View style={styles.card}>{children}</View>;
}

export default Card;

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.rootBodyImg,
  },
});
