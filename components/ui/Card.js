import React from "react";
import { View, StyleSheet } from "react-native";
import { Colors } from "../../constants/colors";

function Card({ children, cardStyle = {} }) {
  return <View style={[styles.card, cardStyle]}>{children}</View>;
}

export default Card;

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.rootBodyImg,
  },
});
