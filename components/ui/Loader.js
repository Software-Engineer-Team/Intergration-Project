import React from "react";
import { StyleSheet, View } from "react-native";
import Lottie from "lottie-react-native";

export default function Loader() {
  return (
    <View style={[styles.container, StyleSheet.absoluteFillObject]}>
      <Lottie
        source={require("../../assets/jsons/scroll-loader.json")}
        style={{
          width: 150,
          height: 150,
        }}
        autoPlay
        loop
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 100,
  },
});
