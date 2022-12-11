import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Colors } from "../../constants/colors";

export default function Function({ onPress, imgUrl, text }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View>
        <View style={styles.imgContainer}>
          <ImageBackground
            source={imgUrl}
            style={{ width: 80, height: 80 }}
            imageStyle={{ width: 80, height: 80 }}
          />
        </View>
        <View style={[styles.textContainer]}>
          <Text
            style={{
              fontSize: 13,
              color: Colors.textMutedAlt,
              fontWeight: "bold",
            }}
          >
            {text}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
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
    /* paddingHorizontal: 10, */
    padding: 10,
  },
  imgContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  textContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
});
