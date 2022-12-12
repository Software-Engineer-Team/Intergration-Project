import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Colors } from "../../constants/colors";

const Member = ({ onPress, name, imgUrl, skill }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={{ flex: 1, flexDirection: "column" }}>
        <View style={styles.iconContainer}>
          <ImageBackground
            source={imgUrl}
            resizeMode="cover"
            style={styles.imgContainer}
            imageStyle={[{ borderRadius: 5 }, styles.imgContainer]}
          />
        </View>
        <View style={[styles.textContainer]}>
          <Text
            style={{
              fontWeight: "bold",
              color: Colors.titleColor,
              fontSize: 12,
            }}
          >
            {name}
          </Text>
          <Text
            style={{
              fontWeight: "500",
              color: Colors.textMutedAlt,
              fontSize: 13,
            }}
          >
            {skill}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Member;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 100,
    height: 170,
    marginHorizontal: 10,
    /**/
  },
  imgContainer: {
    height: 100,
    width: 100,
    borderRadius: 5,
    /* backgroundColor: "red", */
  },
  iconContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  textContainer: {
    width: 100,
    height: 50,
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
  },
});
