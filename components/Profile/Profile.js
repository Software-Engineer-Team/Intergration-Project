import React from "react";
import {
  Dimensions,
  ImageBackground,
  Platform,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";

import Modal from "react-native-modal";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";
import { Colors } from "../../constants/colors";
import { Sizes } from "../../constants/sizes";
import Icon from "../ui/Icon";
import Line from "../ui/Line";
import ProfileIcon from "./ProfileIcon";

export default function Profile({ showProfile, toggleShowProfile }) {
  const profileCategories = {
    home: [
      {
        iconName: "home",
        title: "Home",
      },
      {
        iconName: "globe-asia",
        title: "Jobs",
      },
      {
        iconName: "building",
        title: "Job Detail",
      },
      {
        iconName: "handshake",
        title: "Our Partners",
      },
      {
        iconName: "user-circle",
        title: "Profile",
      },
      {
        iconName: "lock",
        title: "Change Password",
      },
      {
        iconName: "info-circle",
        title: "About Us",
      },
      {
        iconName: "envelope",
        title: "Contact",
      },
    ],
    employerHome: [
      {
        iconName: "home",
        title: "Emplyer Home",
      },
      {
        iconName: "globe-asia",
        title: "Jobs",
      },
      {
        iconName: "info-circle",
        title: "About Us",
      },
      {
        iconName: "envelope",
        title: "Contact Us",
      },
    ],
    jobSeekerHome: [
      {
        iconName: "home",
        title: "JobSeeker Home",
      },
      {
        iconName: "globe-asia",
        title: "Jobs",
      },
      {
        iconName: "user-circle",
        title: "Resume",
      },
      {
        iconName: "bell",
        title: "Alert",
      },
    ],
  };
  return (
    <Modal
      isVisible={showProfile}
      animationIn="fadeInLeft"
      animationOut="fadeOutLeft"
      backdropTransitionOutTiming={0}
      style={{ margin: 0 }}
      coverScreen={true}
    >
      <View style={styles.container}>
        <View style={styles.content}>
          <ImageBackground
            source={require("../../assets/images/profile-img.jpeg")}
            resizeMode="cover"
            imageStyle={styles.imgStyle}
            style={styles.imgContainer}
          >
            <Icon
              customStyle={{
                width: "100%",
                alignItems: "flex-end",
                marginHorizontal: 0,
                paddingRight: 30,
              }}
              onPress={toggleShowProfile}
            >
              <FontAwesome5Icon
                name="arrow-left"
                size={Sizes.iconSizeAlt}
                color={Colors.color}
              />
            </Icon>
          </ImageBackground>
          <ScrollView style={styles.scrollViewContainer}>
            <View style={styles.scrollViewContainer}>
              {profileCategories.home.map(({ iconName, title }, idx) => {
                return (
                  <ProfileIcon title={title} iconName={iconName} key={idx} />
                );
              })}
            </View>
            <Line />
            <View style={styles.scrollViewContainer}>
              {profileCategories.employerHome.map(
                ({ iconName, title }, idx) => {
                  return (
                    <ProfileIcon title={title} iconName={iconName} key={idx} />
                  );
                }
              )}
            </View>
            <Line />
            <View style={styles.scrollViewContainer}>
              {profileCategories.jobSeekerHome.map(
                ({ iconName, title }, idx) => {
                  return (
                    <ProfileIcon title={title} iconName={iconName} key={idx} />
                  );
                }
              )}
            </View>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  scrollViewContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    zIndex: -1,
  },
  content: {
    flex: 1,
    width: "85%",
    backgroundColor: "white",
    flexDirection: "column",
  },
  imgStyle: {
    opacity: 0.95,
  },
  imgContainer: {
    flex: 0.5,
    zIndex: 10,
  },
});
