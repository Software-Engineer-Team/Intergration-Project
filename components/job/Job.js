import React from "react";
import { StyleSheet, Text, View } from "react-native";
import IconFontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { Colors } from "../../constants/colors";
import { Sizes } from "../../constants/sizes";
import Button from "../ui/Button";
export default function Job({
  title,
  description,
  requirements,
  address,
  experience,
  onPress,
}) {
  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <View style={styles.titleContainer}>
          <Text style={styles.text}>{title}</Text>
        </View>
        <View style={styles.yearAndLocationContainer}>
          <View style={styles.yearAndLocation}>
            <IconFontAwesome5
              name="user-tie"
              size={Sizes.iconSize1}
              color={Colors.textMuted}
            />
            <View style={{ marginLeft: 20 }}>
              <Text style={styles.iconText}>{experience} years</Text>
            </View>
          </View>
          <View style={styles.yearAndLocation}>
            <IconFontAwesome5
              name="map-marker-alt"
              size={Sizes.iconSize1}
              color={Colors.textMuted}
            />
            <View style={{ marginLeft: 20 }}>
              <Text style={styles.iconText} numberOfLines={1}>
                {address}
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.description}>
          <Text style={[styles.text, styles.descriptionText]} numberOfLines={3}>
            {description}
          </Text>
        </View>
        <View style={styles.iconContainer}>
          <IconFontAwesome5 name="tags" size={18} color={Colors.textMuted} />
          <View style={{ marginLeft: 20 }}>
            <Text style={styles.iconText} numberOfLines={1}>
              {requirements}
            </Text>
          </View>
        </View>

        <Button
          title="Apply Now"
          buttonStyle={{
            backgroundColor: "#000000",
            width: 90,
            marginTop: 0,
            paddingVertical: 6,
            paddingHorizontal: 0,
          }}
          onPress={onPress}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "90%",
    margin: 10,
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
  titleContainer: {
    flexDirection: "row",
    marginVertical: 4,
  },
  text: {
    lineHeight: 16,
    fontSize: 16,
    fontWeight: "bold",
  },
  yearAndLocationContainer: {
    paddingVertical: 5,
    flexDirection: "row",
  },
  yearAndLocation: {
    flexDirection: "row",
  },
  description: {
    paddingVertical: 5,
    fontSize: 10,
  },
  descriptionText: {
    fontSize: 15,
    fontWeight: "400",
    color: Colors.colorAlt,
  },
  iconContainer: {
    /* padding: 10, */
    marginVertical: 5,
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  iconText: {
    color: Colors.colorAlt,
    lineHeight: 21,
    fontSize: 12,
    left: -15,
    bottom: 2,
  },
});
