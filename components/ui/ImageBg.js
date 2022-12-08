import React from "react";
/* import { LinearGradient } from "expo-linear-gradient"; */
import { ImageBackground, StyleSheet } from "react-native";
import { Colors } from "../../constants/colors";

export default function ImageBg({ children, source }) {
  return (
    <ImageBackground
      source={source}
      resizeMode="cover"
      style={styles.rootScreen}
      imageStyle={styles.bgImage}
    >
      {children}
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    backgroundColor: Colors.backdrop,
  },
  bgImage: {
    opacity: 0.45,
  },
});
