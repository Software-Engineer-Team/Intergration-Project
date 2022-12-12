import { useNavigation } from "@react-navigation/native";
import React, { useRef, useState } from "react";
import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TextInput,
  View,
} from "react-native";
import IconMaterialIcons from "react-native-vector-icons/MaterialIcons";
import ApplyJob from "../components/home/ApplyJob";
import Category from "../components/home/Category";
import Footer from "../components/home/Footer";
import JobTitle from "../components/home/JobTitle";
import Profile from "../components/Profile/Profile";
import LatestJobs from "../components/home/LatestJobs";
import TopEmployers from "../components/home/TopEmployers";
import Card from "../components/ui/Card";
import { Colors, IconColors } from "../constants/colors";
import { useDispatch, useSelector } from "react-redux";
import { selectShowProfile, setShowProfile } from "../features/profile";

const HomeScreen = () => {
  const showProfile = useSelector(selectShowProfile);
  const { navigate } = useNavigation();
  const dispatch = useDispatch();
  const categories = [
    {
      id: Math.random().toString(),
      iconName: "address-book-o",
      iconColor: IconColors.iconBlue,
      iconSize: 100,
      backgroundBox: { backgroundColor: "#f4f7fe" },
      categoryName: "IT",
      numOfJobs: "31072-jobs",
    },
    {
      id: Math.random().toString(),
      iconName: "address-book-o",
      iconColor: IconColors.iconGreen,
      iconSize: 100,
      backgroundBox: { backgroundColor: "#f9fcf5" },
      categoryName: "IT",
      numOfJobs: "31072-jobs",
    },
    {
      id: Math.random().toString(),
      iconName: "address-book-o",
      iconColor: IconColors.iconYellow,
      iconSize: 100,
      backgroundBox: { backgroundColor: "#fffcf7" },
      categoryName: "IT",
      numOfJobs: "31072-jobs",
    },
    {
      id: Math.random().toString(),
      iconName: "address-book-o",
      iconColor: IconColors.iconOrange,
      iconSize: 100,
      backgroundBox: { backgroundColor: "#fffaf6" },
      categoryName: "IT",
      numOfJobs: "31072-jobs",
    },
    {
      id: Math.random().toString(),
      iconName: "address-book-o",
      iconColor: IconColors.iconBlueAlt,
      iconSize: 100,
      backgroundBox: { backgroundColor: "#fbfaff" },
      categoryName: "IT",
      numOfJobs: "31072-jobs",
    },
    {
      id: Math.random().toString(),
      iconName: "address-book-o",
      iconColor: IconColors.iconPink,
      iconSize: 100,
      backgroundBox: { backgroundColor: "#fdf7f9" },
      categoryName: "IT",
      numOfJobs: "31072-jobs",
    },
  ];

  const featuredJobs = [
    {
      id: Math.random().toString(),
      backgroundBox: { backgroundColor: "#627aee" },
      backgroundContainer: { backgroundColor: IconColors.iconBlue },
      textDescription1: "IT Department Manager",
      textDescription2: "Infosys Ltd",
      textDescription3: "Delhi",
    },
    {
      id: Math.random().toString(),
      backgroundBox: { backgroundColor: "#91c352" },
      backgroundContainer: { backgroundColor: IconColors.iconGreen },
      textDescription1: "IT Department Manager",
      textDescription2: "Infosys Ltd",
      textDescription3: "Delhi",
    },
    {
      id: Math.random().toString(),
      backgroundBox: { backgroundColor: "#fcc575" },
      backgroundContainer: { backgroundColor: IconColors.iconYellow },
      textDescription1: "IT Department Manager",
      textDescription2: "Infosys Ltd",
      textDescription3: "Delhi",
    },
    {
      id: Math.random().toString(),
      backgroundBox: { backgroundColor: "#f7924e" },
      backgroundContainer: { backgroundColor: IconColors.iconOrange },
      textDescription1: "IT Department Manager",
      textDescription2: "Infosys Ltd",
      textDescription3: "Delhi",
    },
    {
      id: Math.random().toString(),
      backgroundBox: { backgroundColor: "#9b92fb" },
      backgroundContainer: { backgroundColor: IconColors.iconBlueAlt },
      textDescription1: "IT Department Manager",
      textDescription2: "Infosys Ltd",
      textDescription3: "Delhi",
    },
  ];

  const latestJobs = [
    {
      id: Math.random().toString(),
      imgUrl: undefined,
      jobName: "SEO Expert",
      companyAddress: "Google Inc, Manchester, UK",
      languages: "javascript,React native,React js",
    },
    {
      id: Math.random().toString(),
      imgUrl: undefined,
      jobName: "Web Designer",
      companyAddress: "Appple Inc,Newyork,USA",
      languages: "Php Develper,Asp,Asp.net",
    },
    {
      id: Math.random().toString(),
      imgUrl: require("../assets/images/dell.png"),
      jobName: "Project Manager",
      companyAddress: "Dell,Bangalore",
      languages: "Full Time/Permanant-canoncity",
    },
    {
      id: Math.random().toString(),
      imgUrl: require("../assets/images/linkedin.jpg"),
      jobName: "Senior PHP Developer",
      companyAddress: "LinkedIn Corp,Chennai",
      languages: "Php,React js",
    },
    {
      id: Math.random().toString(),
      imgUrl: require("../assets/images/wipro.jpg"),
      jobName: "Project Manager",
      companyAddress: "Wipro corp,Chennai",
      languages: "javascript,React native,React js",
    },
  ];

  const topJobs = [
    {
      id: Math.random().toString(),
      imgUrl: require("../assets/images/apple.jpeg"),
      companyName: "Apple Inc",
      numOfJobs: "45584 jobs",
    },
    {
      id: Math.random().toString(),
      imgUrl: require("../assets/images/google.jpeg"),
      companyName: "Google Inc",
      numOfJobs: "45584 jobs",
    },
    {
      id: Math.random().toString(),
      imgUrl: require("../assets/images/linkedin.png"),
      companyName: "Google Inc",
      numOfJobs: "45584 jobs",
    },
    {
      id: Math.random().toString(),
      imgUrl: require("../assets/images/dell.jpeg"),
      companyName: "Dell Inc",
      numOfJobs: "45584 jobs",
    },
    {
      id: Math.random().toString(),
      imgUrl: require("../assets/images/wipro-company.png"),
      companyName: "Wipro Inc",
      numOfJobs: "45584 jobs",
    },
  ];

  return (
    <SafeAreaView style={styles.rootScreen}>
      <Profile
        showProfile={showProfile}
        toggleShowProfile={() => {
          dispatch(setShowProfile({ showProfile: false }));
        }}
      />

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
          <JobTitle textMuted="JOB" text="CATEGORIES" />
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              paddingBottom: 35,
              paddingRight: 20,
            }}
          >
            {categories?.map((item) => {
              return (
                <Category
                  key={item.id}
                  iconName={item.iconName}
                  iconSize={item.iconSize}
                  iconColor={item.iconColor}
                  backgroundBox={item.backgroundBox}
                  categoryName={item.categoryName}
                  numOfJobs={item.numOfJobs}
                  onPress={() => {}}
                />
              );
            })}
          </ScrollView>
        </Card>

        {/*FEATURED JOBS*/}
        <Card>
          <JobTitle textMuted="FEATURED" text="JOBS" />
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              paddingBottom: 35,
              paddingRight: 20,
            }}
          >
            {featuredJobs?.map((item) => {
              return (
                <ApplyJob
                  key={item.id}
                  backgroundContainer={item.backgroundContainer}
                  backgroundBox={item.backgroundBox}
                  textDescription1={item.textDescription1}
                  textDescription2={item.textDescription2}
                  textDescription3={item.textDescription3}
                />
              );
            })}
          </ScrollView>
        </Card>

        {/*LATEST JOBS*/}
        <Card>
          <JobTitle textMuted="LATEST" text="JOBS" />
          <ScrollView showsVerticalScrollIndicator={false}>
            {latestJobs?.map((item) => (
              <LatestJobs
                key={item.id}
                imgUrl={item.imgUrl}
                jobName={item.jobName}
                companyAddress={item.companyAddress}
                languages={item.languages}
              />
            ))}
          </ScrollView>
        </Card>

        {/*TOP EMPLOYERS*/}
        <Card cardStyle={{ marginBottom: 100 }}>
          <JobTitle textMuted="TOP" text="EMPLOYERS" />
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {topJobs?.map((item) => (
              <TopEmployers
                imgUrl={item.imgUrl}
                numOfJobs={item.numOfJobs}
                companyName={item.companyName}
                key={item.id}
                onPress={() => {
                  navigate("Employer");
                }}
              />
            ))}
          </ScrollView>
        </Card>
      </ScrollView>

      <Footer />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  rootScreen: {
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
