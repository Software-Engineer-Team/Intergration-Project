import React from "react";
import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import IconFontAwesome from "react-native-vector-icons/FontAwesome";
import IconMaterialIcons from "react-native-vector-icons/MaterialIcons";

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.rootScreen}>
      <View style={styles.rootHeader}>
        <IconFontAwesome name="bars" size={18} />
        <View style={styles.rootHeaderTextContainer}>
          <Text style={styles.rootHeaderText}>PaySit</Text>
        </View>
      </View>

      <ScrollView style={styles.rootBody}>
        <ImageBackground
          source={require("../assets/images/home-header.jpg")}
          style={styles.rootBodyImg}
          imageStyle={{ top: -20 }}
          resizeMode="contain"
        >
          <View style={styles.rootBodySearch}>
            <TextInput
              placeholder="ie.Php,WebDesigner,Javascript"
              placeholderTextColor={"#00000050"}
              keyboardType="default"
              style={styles.rootBodySearchInput}
            />
            <IconMaterialIcons
              name="search"
              size={25}
              style={styles.rootBodySearchIcon}
            />
          </View>
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  rootScreen: {
    paddingTop: 25,
    backgroundColor: "white",
    position: "relative",
  },
  rootHeader: {
    flexDirection: "row",
    padding: 20,
  },
  rootHeaderTextContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  rootHeaderText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  rootBodyImg: {
    height: 261,
    fontSize: 40,
    position: "relative",
    backgroundColor: "#f2f2f2",
  },
  rootBodySearch: {
    position: "relative",
    left: 10,
    top: 200,
    flexDirection: "row",
  },
  rootBodySearchInput: {
    backgroundColor: "white",
    width: 330,
    height: 45,
    padding: 10,
    paddingHorizontal: 20,
    borderRadius: 23,
    borderBottomRightRadius: 0,
    borderTopRightRadius: 0,
  },
  rootBodySearchIcon: {
    backgroundColor: "white",
    lineHeight: 45,
    paddingRight: 15,
    borderTopRightRadius: 23,
    borderBottomRightRadius: 23,
  },
});
