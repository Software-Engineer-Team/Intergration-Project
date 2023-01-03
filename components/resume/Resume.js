import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Resume({
  imgUrl,
  name,
  experience,
  qualification,
  university,
  skills,
  onPress,
}) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={{ flex: 1 }}>
        <View style={styles.locationContainer}>
          <ImageBackground
            source={imgUrl}
            style={{ width: 80, height: 80 }}
            resizeMode="cover"
          />
          <View style={styles.company}>
            <Text style={styles.text}>{name || "Unknown"}</Text>
            <Text style={{ color: "#9b9b9b", fontSize: 13 }}>
              {qualification + university || "Graduation, BK VN"}
            </Text>
            <Text style={{ color: "#9b9b9b", fontSize: 13 }}>
              {experience || "3"} yrs experience
            </Text>
            <Text style={{ color: "#9b9b9b", fontSize: 13 }}>
              {skills || "Java, PHP"}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "90%",
    /* height: 110, */
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
  locationContainer: {
    flexDirection: "row",
    /* borderBottomWidth: 1, */
    marginTop: 2,
  },
  company: {
    marginLeft: 15,
    marginBottom: 10,
  },
  text: {
    lineHeight: 18,
    fontSize: 16,
    fontWeight: "bold",
    /* marginBottom: 4, */
  },
});
