import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import IconFontAwesome5 from "react-native-vector-icons/FontAwesome5";
import IconFontAwesome from "react-native-vector-icons/FontAwesome";
import { IconColors } from "../../constants/colors";
import Icon from "../ui/Icon";

export default function Footer() {
  return (
    <View style={styles.rootFooter}>
      <Icon customStyle={styles.itemFooter}>
        <IconFontAwesome5 name="home" size={23} color={IconColors.iconBlue} />
        <Text style={[styles.rootFooterText, { color: IconColors.iconBlue }]}>
          Home
        </Text>
      </Icon>
      <Icon customStyle={styles.itemFooter}>
        <IconFontAwesome5 name="globe" size={23} color={IconColors.iconGreen} />
        <Text style={[styles.rootFooterText, { color: IconColors.iconGreen }]}>
          Jobs
        </Text>
      </Icon>
      <TouchableOpacity
        style={[
          styles.itemFooter,
          {
            backgroundColor: "rgba(0, 0, 0, .75)",
            borderRadius: 9999,
            padding: 16,
            width: 80,
            height: 80,
            bottom: 20,
          },
        ]}
      >
        <IconFontAwesome name="user" size={26} color="white" />
        <Text
          style={[styles.rootFooterText, { fontWeight: "bold", fontSize: 16 }]}
        >
          Profile
        </Text>
      </TouchableOpacity>
      <Icon customStyle={styles.itemFooter}>
        <IconFontAwesome5
          name="address-card"
          size={23}
          color={IconColors.iconOrange}
        />
        <Text style={[styles.rootFooterText, { color: IconColors.iconOrange }]}>
          Post Job
        </Text>
      </Icon>
      <Icon customStyle={styles.itemFooter}>
        <IconFontAwesome5
          name="building"
          size={23}
          color={IconColors.iconPink}
        />
        <Text style={[styles.rootFooterText, { color: IconColors.iconPink }]}>
          Firms
        </Text>
      </Icon>
    </View>
  );
}

const styles = StyleSheet.create({
  rootFooter: {
    flexDirection: "row",
    position: "absolute",
    bottom: 0,
    padding: 10,
    paddingHorizontal: 20,
    height: 70,
    width: "100%",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "space-between",
  },
  itemFooter: {
    flexDirection: "column",
    alignItems: "center",
    padding: 0,
    marginHorizontal: 0,
    width: "auto",
    height: "auto",
  },
  rootFooterText: {
    color: "white",
    fontSize: 11,
    marginTop: 4,
    fontWeight: "bold",
  },
});
