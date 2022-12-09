import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import IconFontAwesome from "react-native-vector-icons/FontAwesome";
import { Colors } from "../../constants/colors";

export default function LatestJobs({
  imgUrl,
  jobName,
  companyAddress,
  languages,
}) {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={{ flex: 1 }}>
        <View style={styles.locationContainer}>
          <ImageBackground
            source={imgUrl}
            style={{ width: 40, height: 40 }}
            resizeMode="cover"
          />
          <View style={styles.company}>
            <Text style={styles.text}>{jobName}</Text>
            <Text style={{ color: "#333" }}>{companyAddress}</Text>
          </View>
        </View>
        <View style={styles.languagesContainer}>
          <IconFontAwesome name="tags" size={20} color={Colors.textMuted} />
          <View style={{ marginLeft: 20 }}>
            <Text style={{ color: "#9b9b9b" }}>{languages}</Text>
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
    height: 110,
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
    borderBottomWidth: 1,
    borderBottomColor: Colors.textMuted,
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
  languagesContainer: {
    padding: 10,
    marginTop: 2,
    flex: 1,
    flexDirection: "row",
  },
});
