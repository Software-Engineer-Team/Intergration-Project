import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from "../ui/Icon";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { Colors } from "../../constants/colors";
import { Sizes } from "../../constants/sizes";
export default function SocialLogin() {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>OR</Text>
      </View>
      <View style={styles.iconsContainer}>
        <Icon
          customStyle={{
            backgroundColor: Colors.faceBookBg,
          }}
        >
          <FontAwesome5
            name="facebook-f"
            size={Sizes.iconSize}
            color={Colors.iconColor}
          />
        </Icon>
        <Icon
          customStyle={{
            backgroundColor: Colors.googleBg,
          }}
        >
          <FontAwesome5
            name="google"
            size={Sizes.iconSize}
            color={Colors.iconColor}
          />
        </Icon>
        <Icon
          customStyle={{
            backgroundColor: Colors.twitterBg,
          }}
        >
          <FontAwesome5
            name="twitter"
            size={Sizes.iconSize}
            color={Colors.iconColor}
          />
        </Icon>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  textContainer: {
    paddingTop: 30,
    paddingBottom: 20,
  },
  text: {
    color: Colors.color,
    fontSize: 16,
    lineHeight: 21,
  },
  iconsContainer: {
    flexDirection: "row",
  },
});
