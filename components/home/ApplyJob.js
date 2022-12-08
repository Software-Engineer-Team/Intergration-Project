import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import IconFontAwesome from "react-native-vector-icons/FontAwesome";
import { Colors } from "../../constants/colors";

const ApplyJob = () => {
  return (
    <View style={styles.container}>
      <View style={styles.desciptionContainer}>
        <View style={[styles.box1]} />
        <View style={[styles.box2]} />
        <View style={[styles.box3]} />
      </View>
      <View style={styles.textDescription}>
        <Text style={styles.textDescription1}>IT Department Manager</Text>
        <Text style={styles.textDescription2}>Infosys Ltd</Text>
        <Text style={styles.textDescription3}>Delhi</Text>
      </View>
      <View style={[styles.textContainer]}>
        <Button title="ApplyJob" />
      </View>
    </View>
  );
};

export default ApplyJob;

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
    flex: 0.25,
    left: 15,
    width: 140,
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
  },
});
