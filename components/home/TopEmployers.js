import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import IconFontAwesome from "react-native-vector-icons/FontAwesome";
import { Colors } from "../../constants/colors";
import Button from "../ui/Button";
export default function TopEmployers({ imgUrl, companyName, numOfJobs }) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={imgUrl}
        style={{ width: 240, height: 150 }}
        resizeMode="cover"
      />
      <Text style={styles.companyName}>{companyName}</Text>
      <View style={styles.jobsContainer}>
        <IconFontAwesome
          name="users"
          color={Colors.textMutedAlt + "90"}
          size={15}
        />
        <Text style={styles.jobsText}>{numOfJobs}</Text>
      </View>
      <Button
        title="READ MORE"
        buttonStyle={{
          backgroundColor: "#00000095",
          width: 100,
          paddingVertical: 2,
          paddingHorizontal: 0,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    /* height: 239, */
    marginHorizontal: 10,
    marginVertical: 5,
    left: 10,
  },
  companyName: {
    marginTop: 12,
    fontSize: 15,
    fontWeight: "bold",
  },
  jobsContainer: {
    flexDirection: "row",
    marginTop: 8,
  },
  jobsText: { color: Colors.textMutedAlt, marginLeft: 7, fontSize: 11 },
});
