import { useRoute } from "@react-navigation/native";
import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import IconFontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { Colors } from "../../constants/colors";
import { Sizes } from "../../constants/sizes";
import Button from "../ui/Button";
import Line from "../ui/Line";
import Toast from "react-native-toast-message";
import Loader from "../ui/Loader";

export default function CandidateDetail() {
  const [isFetching, setIsFetching] = useState(false);
  const {
    params: {
      name,
      email,
      address,
      description,
      skills,
      experience,
      education,
    },
  } = useRoute();

  return (
    <View style={styles.container}>
      {isFetching && <Loader />}
      <View style={styles.titleContainer}>
        <Text style={styles.text}>{name ? name : "TEST"}</Text>
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.dateText}>{email ? email : "EMAIL TEST"}</Text>
      </View>
      <Line lineStyle={{ marginVertical: 15 }} />
      <View style={styles.typeContainer}>
        <View style={styles.type}>
          <IconFontAwesome5
            name="calendar"
            size={Sizes.iconSize1}
            color={Colors.textMuted}
          />
          <View style={{ marginLeft: 20 }}>
            <Text style={styles.iconText}>{education}</Text>
          </View>
        </View>

        <View style={styles.type}>
          <IconFontAwesome5
            name="map-marker-alt"
            size={Sizes.iconSize1}
            color={Colors.textMuted}
          />
          <View style={{ marginLeft: 20 }}>
            <Text style={styles.iconText}>{address}</Text>
          </View>
        </View>
        <View style={styles.type}>
          <IconFontAwesome5
            name="user-tie"
            size={Sizes.iconSize1}
            color={Colors.textMuted}
          />
          <View style={{ marginLeft: 20 }}>
            <Text style={styles.iconText}>{experience || "3 years"}</Text>
          </View>
        </View>
      </View>
      <Line lineStyle={{ marginVertical: 12 }} />
      <View style={styles.titleContainer}>
        <Text style={styles.text}>Resume Description</Text>
      </View>
      <View style={styles.description}>
        <Text style={[styles.text, styles.descriptionText]}>{description}</Text>
      </View>
      <Line lineStyle={{ marginVertical: 12 }} />
      <View style={styles.titleContainer}>
        <Text style={styles.text}>Skills</Text>
      </View>
      <ScrollView style={styles.skillsContainer} horizontal>
        <View style={styles.skillsContent}>
          <Text style={styles.skillsItem}>
            {skills ? skills : "SKILL TEST"}
          </Text>
        </View>
      </ScrollView>
      <Button
        title="Accept"
        buttonStyle={{
          backgroundColor: "#000000",
          marginTop: 0,
          paddingVertical: 10,
          paddingHorizontal: 0,
          bottom: 0,
        }}
        textStyle={{ fontSize: 15, lineHeight: 15 }}
        onPress={() => {
          setIsFetching(true);
          setTimeout(() => {
            setIsFetching(false);
            Toast.show({
              type: "success",
              text1: "Send Notification",
              text2:
                "You have sent an invitation to your candidate successfully 👋",
              position: "top",
              visibilityTime: 3000,
              topOffset: -50,
            });
          }, 2000);
        }}
      />
      <Toast />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
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
    marginVertical: 1,
  },
  text: {
    lineHeight: 16,
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.titleColor,
  },
  dateText: {
    fontSize: 13.5,
    fontWeight: "600",
    color: Colors.color1,
  },
  salaryText: {
    fontSize: 13.5,
    fontWeight: "800",
    color: Colors.color1,
  },
  typeContainer: {
    padding: 5,
    flexDirection: "row",
  },
  type: {
    flexDirection: "row",
  },
  description: {
    paddingVertical: 5,
    fontSize: 10,
  },
  descriptionText: {
    fontSize: 15,
    fontWeight: "400",
    color: Colors.color1,
    padding: 5,
    paddingBottom: 0,
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
  skillsContainer: {
    flexDirection: "row",
    marginVertical: 5,
    padding: 5,
  },
  skillsContent: {
    backgroundColor: Colors.skillsBg,
    flexDirection: "row",
    marginHorizontal: 5,
    marginVertical: 3,
    borderRadius: 4,
  },
  skillsItem: {
    padding: 5,
    color: Colors.titleColor,
    fontWeight: "600",
  },
});
