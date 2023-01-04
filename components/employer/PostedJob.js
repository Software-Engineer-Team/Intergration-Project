import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function PostedJob({
  imgUrl,
  jobName,
  requirements,
  address,
  description,
  benefits,
}) {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={{ flex: 1 }}>
        <View style={styles.locationContainer}>
          <View style={styles.company}>
            <Text style={styles.text}>{jobName || "Unknown"}</Text>
            <Text style={{ color: "#333" }}>Address: {address}</Text>
            <Text style={{ color: "#333" }}>Description: {description}</Text>
            <Text style={{ color: "#333" }}>Requirements: {requirements}</Text>
            <Text style={{ color: "#333" }}>
              Benefits: {benefits || "Unknown"}
            </Text>
          </View>
          <ImageBackground
            source={imgUrl || require("../../assets/images/dell.png")}
            style={{ width: 40, height: 40 }}
            resizeMode="cover"
          />
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "90%",
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
    justifyContent: "space-between",
    /* borderBottomWidth: 1, */
    /* borderBottomColor: Colors.textMuted, */
    marginTop: 2,
  },
  company: {
    width: "70%",
    marginLeft: 15,
    marginBottom: 10,
  },
  text: {
    lineHeight: 18,
    fontSize: 16,
    fontWeight: "bold",
    /* marginBottom: 4, */
  },
  languagesContainer: {
    padding: 10,
    marginTop: 2,
    flex: 1,
    flexDirection: "row",
  },
});
