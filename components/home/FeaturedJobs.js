import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Button from "../ui/Button";

const FeaturedJobs = ({
  backgroundBox,
  backgroundContainer,
  textDescription1,
  textDescription2,
  textDescription3,
}) => {
  return (
    <View style={[styles.container, backgroundContainer]}>
      <View style={styles.desciptionContainer}>
        <View style={[styles.box1, backgroundBox]} />
        <View style={[styles.box2, backgroundBox]} />
        <View style={[styles.box3, backgroundBox]} />
      </View>
      <View style={styles.textDescription}>
        <Text style={styles.textDescription1}>{textDescription1}</Text>
        <Text style={styles.textDescription2}>{textDescription2}</Text>
        <Text style={styles.textDescription3}>{textDescription3}</Text>
      </View>
      <View style={[styles.textContainer]}>
        <Button title="APPLY" buttonStyle={backgroundBox} />
      </View>
    </View>
  );
};

export default FeaturedJobs;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 270,
    height: 200,
    marginHorizontal: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
    left: 10,
    borderRadius: 5,
    backgroundColor: "#3a59e8",
  },
  desciptionContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 0.7,
  },
  box1: {
    height: 80,
    width: 75,
    position: "absolute",
    left: 20,
    top: 50,
    borderRadius: 4,
    zIndex: 1,
    backgroundColor: "#627aee",
  },
  box2: {
    height: 50,
    width: 50,
    position: "absolute",
    left: 100,
    top: 50,
    borderRadius: 4,
    zIndex: 1,
    backgroundColor: "#627aee",
  },
  box3: {
    height: 30,
    width: 30,
    position: "absolute",
    left: 100,
    top: 110,
    borderRadius: 4,
    zIndex: 1,
    backgroundColor: "#627aee",
  },
  textDescription: {
    zIndex: 10,
    padding: 20,
    bottom: 24,
  },
  textDescription1: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
    maxWidth: 150,
  },
  textDescription2: { color: "white", fontWeight: "500", marginTop: 7 },
  textDescription3: { color: "white", fontWeight: "500", marginTop: 17 },
  textContainer: {
    bottom: 10,
    right: 10,
    position: "absolute",
  },
});
