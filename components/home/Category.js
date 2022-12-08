import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import IconFontAwesome from "react-native-vector-icons/FontAwesome";
import { Colors } from "../../constants/colors";

const Category = ({
  onPress,
  iconName,
  iconColor,
  iconSize,
  backgroundBox,
  categoryName,
  numOfJobs,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={{ flex: 1 }}>
        <View style={styles.iconContainer}>
          <View style={[styles.box1, backgroundBox]} />
          <IconFontAwesome name={iconName} size={iconSize} color={iconColor} />
          <View style={[styles.box2, backgroundBox]} />
        </View>
        <View style={[styles.textContainer, backgroundBox]}>
          <Text style={{ fontWeight: "bold" }}>{categoryName}</Text>
          <Text style={{ color: Colors.textMuted }}>{numOfJobs}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Category;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 170,
    height: 230,
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
    backgroundColor: "white",
  },
  iconContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 0.7,
  },
  box1: {
    height: 55,
    width: 55,
    position: "absolute",
    left: 20,
    top: 30,
    borderRadius: 4,
    zIndex: -1,
  },
  box2: {
    height: 40,
    width: 40,
    position: "absolute",
    right: 20,
    top: 10,
    borderRadius: 4,
    zIndex: -1,
  },
  textContainer: {
    flex: 0.25,
    left: 15,
    width: 140,
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
  },
});
