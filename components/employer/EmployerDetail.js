import React from "react";
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import IconFontAwesome5 from "react-native-vector-icons/FontAwesome5";
import IconFontAwesome from "react-native-vector-icons/FontAwesome";
import { Colors } from "../../constants/colors";
import { Sizes } from "../../constants/sizes";
export default function EmployerDetail() {
  return (
    <View style={styles.content}>
      <ImageBackground
        source={require("../../assets/images/wipro.jpg")}
        style={{
          width: 120,
          height: 100,
        }}
        resizeMode="cover"
      />
      <View style={styles.rightContent}>
        <View style={{ flexDirection: "row", marginBottom: 5 }}>
          <IconFontAwesome name="star" color={"yellow"} size={17.5} />
          <IconFontAwesome name="star" color={"yellow"} size={17.5} />
          <IconFontAwesome5 name="star" color={"yellow"} size={15} />
          <IconFontAwesome5 name="star" color={"yellow"} size={15} />
          <IconFontAwesome name="star-half" color={"yellow"} size={17.5} />
        </View>

        <View style={styles.typeContainer}>
          <View style={styles.type}>
            <IconFontAwesome5
              name="globe"
              size={Sizes.iconSize1}
              color={Colors.color1}
            />
            <View style={{ marginLeft: 20 }}>
              <Text style={styles.iconText}>wipro.com</Text>
            </View>
          </View>

          <View style={styles.type}>
            <IconFontAwesome5
              name="calendar"
              size={Sizes.iconSize1}
              color={Colors.color1}
            />
            <View style={{ marginLeft: 20 }}>
              <Text style={styles.iconText}>74 Years Old</Text>
            </View>
          </View>
        </View>

        <View style={styles.typeContainer}>
          <View style={styles.type}>
            <IconFontAwesome5
              name="users"
              size={Sizes.iconSize1}
              color={Colors.color1}
            />
            <View style={{ marginLeft: 20 }}>
              <Text style={styles.iconText}>9000+</Text>
            </View>
          </View>

          <View style={styles.type}>
            <IconFontAwesome5
              name="map"
              size={Sizes.iconSize1}
              color={Colors.color1}
            />
            <View style={{ marginLeft: 20 }}>
              <Text style={styles.iconText}>Viet Nam</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    flexDirection: "row",
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
    borderRadius: 5,
    backgroundColor: "white",
    paddingHorizontal: 10,
  },
  rightContent: {
    flexDirection: "column",
    justifyContent: "center",
    padding: 10,
  },
  companyName: {
    marginTop: 12,
    fontSize: 15,
    fontWeight: "bold",
  },
  typeContainer: {
    paddingVertical: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  type: {
    flexDirection: "row",
    width: 100,
  },

  iconText: {
    color: Colors.color1,
    lineHeight: 21,
    fontSize: 12,
    left: -15,
    bottom: 2,
  },
});
