import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import IconFontAwesome5 from "react-native-vector-icons/FontAwesome5";
import IconFontAwesome from "react-native-vector-icons/FontAwesome";
import { Colors } from "../constants/colors";
import Card from "../components/ui/Card";
import { Sizes } from "../constants/sizes";
import Function from "../components/employer/Function";
export default function EmployerScreen() {
  const functionsEmployer = [
    {
      id: Math.random().toString(),
      imgUrl: require("../assets/images/job-listing.png"),
      text: "Job Listing",
    },
    {
      id: Math.random().toString(),
      imgUrl: require("../assets/images/candidate.png"),
      text: "Candidate",
    },
    {
      id: Math.random().toString(),
      imgUrl: require("../assets/images/package.png"),
      text: "Package",
    },
    {
      id: Math.random().toString(),
      imgUrl: require("../assets/images/settings.png"),
      text: "Settings",
    },
    {
      id: Math.random().toString(),
      imgUrl: require("../assets/images/order-history.png"),
      text: "Order History",
    },
    {
      id: Math.random().toString(),
      imgUrl: require("../assets/images/message.png"),
      text: "Message",
    },
  ];
  return (
    <Card cardStyle={styles.container}>
      <View style={styles.content}>
        <ImageBackground
          source={require("../assets/images/dell.png")}
          style={{
            width: 120,
            height: 120,
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

      <View style={styles.functionContainer}>
        {functionsEmployer?.map((item) => {
          return (
            <Function
              onPress={() => {}}
              imgUrl={item.imgUrl}
              text={item.text}
              key={item.id}
            />
          );
        })}
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    padding: 10,
  },
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
  functionContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
  },
});
