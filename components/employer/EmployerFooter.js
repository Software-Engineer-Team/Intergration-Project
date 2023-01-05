import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import IconFontAwesome5 from "react-native-vector-icons/FontAwesome5";
import IconFontAwesome from "react-native-vector-icons/FontAwesome";
import { IconColors } from "../../constants/colors";
import Icon from "../ui/Icon";
import { useNavigation } from "@react-navigation/native";

export default function EmployerFooter() {
  const { navigate } = useNavigation();
  return (
    <View style={styles.rootFooter}>
      <Icon
        customStyle={styles.itemFooter}
        onPress={() => {
          navigate("Employer");
        }}
      >
        <IconFontAwesome5 name="home" size={23} color={IconColors.iconBrown} />
        <Text style={[styles.rootFooterText, { color: IconColors.iconBrown }]}>
          Home
        </Text>
      </Icon>

      <Icon
        customStyle={styles.itemFooter}
        onPress={() => {
          navigate("Candidate Resumes");
        }}
      >
        <IconFontAwesome5
          name="users"
          size={23}
          color={IconColors.iconBrownAlt}
        />
        <Text
          style={[styles.rootFooterText, { color: IconColors.iconBrownAlt }]}
        >
          Candidates
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

      <Icon
        customStyle={styles.itemFooter}
        onPress={() => {
          navigate("Posted Jobs");
        }}
      >
        <IconFontAwesome5
          name="globe"
          size={23}
          color={IconColors.iconBrownAlt}
        />
        <Text
          style={[styles.rootFooterText, { color: IconColors.iconBrownAlt }]}
        >
          Jobs
        </Text>
      </Icon>
      <Icon
        customStyle={styles.itemFooter}
        onPress={() => {
          navigate("PostJob");
        }}
      >
        <IconFontAwesome5
          name="address-card"
          size={23}
          color={IconColors.iconBrownAlt}
        />
        <Text
          style={[styles.rootFooterText, { color: IconColors.iconBrownAlt }]}
        >
          Post Job
        </Text>
      </Icon>
    </View>
  );
}

const styles = StyleSheet.create({
  rootFooter: {
    flexDirection: "row",
    flex: 1,
    maxHeight: 80,
    padding: 10,
    paddingHorizontal: 20,
    width: "100%",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "space-between",
    bottom: 0,
    position: "absolute",
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
