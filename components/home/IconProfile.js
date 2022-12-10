import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import IconFontAwesome from "react-native-vector-icons/FontAwesome";
import { useDispatch } from "react-redux";
import { setShowProfile } from "../../features/profile";

export default function IconProfile({ customStyle, iconName }) {
  const dispatch = useDispatch();

  return (
    <TouchableOpacity
      style={[styles.container, customStyle]}
      onPress={() => dispatch(setShowProfile({ showProfile: true }))}
    >
      <IconFontAwesome name={iconName} size={18} />
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
});
