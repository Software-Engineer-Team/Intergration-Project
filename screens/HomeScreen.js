import React from "react";
import {
  FlatList,
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
import ApplyJob from "../components/home/ApplyJob";
import Category from "../components/home/Category";
import JobTitle from "../components/home/JobTitle";
import Card from "../components/ui/Card";
import { Colors } from "../constants/colors";

const HomeScreen = () => {
  const categories = [
    {
      id: Math.random().toString(),
      iconName: "address-book-o",
      iconColor: "#3a59e8",
      iconSize: 100,
      backgroundBox: { backgroundColor: "#f4f7fe" },
      categoryName: "IT",
      numOfJobs: "31072-jobs",
    },
    {
      id: Math.random().toString(),
      iconName: "address-book-o",
      iconColor: "#7cb92e",
      iconSize: 100,
      backgroundBox: { backgroundColor: "#f9fcf5" },
      categoryName: "IT",
      numOfJobs: "31072-jobs",
    },
    {
      id: Math.random().toString(),
      iconName: "address-book-o",
      iconColor: "#fbbe5d",
      iconSize: 100,
      backgroundBox: { backgroundColor: "#fffcf7" },
      categoryName: "IT",
      numOfJobs: "31072-jobs",
    },
    {
      id: Math.random().toString(),
      iconName: "address-book-o",
      iconColor: "#f7751f",
      iconSize: 100,
      backgroundBox: { backgroundColor: "#fffaf6" },
      categoryName: "IT",
      numOfJobs: "31072-jobs",
    },
    {
      id: Math.random().toString(),
      iconName: "address-book-o",
      iconColor: "#8274fb",
      iconSize: 100,
      backgroundBox: { backgroundColor: "#fbfaff" },
      categoryName: "IT",
      numOfJobs: "31072-jobs",
    },
    {
      id: Math.random().toString(),
      iconName: "address-book-o",
      iconColor: "#f64e89",
      iconSize: 100,
      backgroundBox: { backgroundColor: "#fdf7f9" },
      categoryName: "IT",
      numOfJobs: "31072-jobs",
    },
  ];

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

        {/* // TOP EMPLOYERS */}
        <Card>
          <JobTitle textMuted="TOP" text="EMPLOYERS" />
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              paddingBottom: 35,
              paddingRight: 20,
            }}
            data={categories}
            renderItem={({ item }) => {
              return (
                <Category
                  iconName={item.iconName}
                  iconSize={item.iconSize}
                  iconColor={item.iconColor}
                  backgroundBox={item.backgroundBox}
                  categoryName={item.categoryName}
                  numOfJobs={item.numOfJobs}
                  onPress={() => {}}
                />
              );
            }}
            keyExtractor={(item, _index) => {
              return item.id;
            }}
            alwaysBounceVertical={false}
          />
        </Card>

        <Card>
          <JobTitle textMuted="FEATURED" text="JOBS" />
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              paddingBottom: 35,
              paddingRight: 20,
            }}
            data={categories}
            renderItem={({ item }) => {
              return <ApplyJob />;
            }}
            keyExtractor={(item) => {
              return item.id;
            }}
            alwaysBounceVertical={false}
          />
        </Card>

        <Card>
          <JobTitle textMuted="FEATURED" text="JOBS" />
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              paddingBottom: 35,
              paddingRight: 20,
            }}
            data={categories}
            renderItem={({ item }) => {
              return <ApplyJob />;
            }}
            keyExtractor={(item) => {
              return item.id;
            }}
            alwaysBounceVertical={false}
          />
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  rootScreen: {
    paddingTop: 15,
    backgroundColor: Colors.rootBodyImg,
    position: "relative",
  },
  rootHeader: {
    flexDirection: "row",
    padding: 20,
    backgroundColor: Colors.color,
    paddingBottom: 15,
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
    backgroundColor: Colors.rootBodyImg,
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
