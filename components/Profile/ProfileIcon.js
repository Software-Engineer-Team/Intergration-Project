import React, { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { Colors } from "../../constants/colors";
import { Sizes } from "../../constants/sizes";
export default function ProfileIcon({ title, iconName }) {
  return (
    <Pressable
      style={[styles.container]}
      android_ripple={{ color: Colors.rippleColor }}
    >
      <View style={styles.iconContainer}>
        <FontAwesome5
          name={iconName}
          size={Sizes.iconSizeAlt}
          color={Colors.iconColorAlt}
        />
      </View>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 12,
  },
  iconContainer: {
    /* backgroundColor: "blue", */
    padding: 2,
    width: 60,
  },
  text: {
    flex: 1,
    color: Colors.iconColorAlt,
    fontSize: 13,
    fontWeight: "500",
    /* backgroundColor: "blue", */
  },
});
