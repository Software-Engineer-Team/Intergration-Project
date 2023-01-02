import React from "react";
import { StyleSheet, View } from "react-native";
import { Colors } from "../../constants/colors";
import FirmInput from "./FirmInput";

export default function FirmDetail({ style }) {
  return (
    <View style={[styles.container, style]}>
      <FirmInput
        type="FIRM-NAME"
        title="Company Name"
        placeholder="Enter firm name"
      />
      <FirmInput
        type="FIRM-ADDRESS"
        title="Company Address"
        placeholder="Enter firm address"
      />
      <FirmInput
        type="FIRM-DESCRIPTION"
        title="About Company"
        placeholder="Description About company"
        textArea={true}
        textAreaStyle={styles.textArea}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "90%",
    marginHorizontal: 10,
    marginVertical: 5,
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
    backgroundColor: "white",
    padding: 10,
  },
  textArea: {
    /* height: 150, */
    justifyContent: "flex-start",
    borderColor: Colors.textMuted,
    borderWidth: 1,
    padding: 5,
    paddingTop: 10,
  },
});
