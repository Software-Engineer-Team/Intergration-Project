import { useNavigation } from "@react-navigation/native";
import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { Colors } from "../../constants/colors";
import Card from "../ui/Card";
import Job from "./Job";
export default function Jobs() {
  const { navigate } = useNavigation();
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Card cardStyle={{ marginVertical: 10 }}>
        {Array(10)
          .fill(undefined)
          .map((_el, idx) => {
            return (
              <Job
                key={idx}
                onPress={() => {
                  navigate("JobDetail", {});
                }}
              />
            );
          })}
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "90%",
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
    left: 10,
    borderRadius: 5,
    backgroundColor: "white",
    padding: 10,
  },
  locationContainer: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: Colors.textMuted,
    marginTop: 2,
  },
  company: {
    marginLeft: 15,
    marginBottom: 10,
  },
  text: {
    lineHeight: 18,
    fontSize: 16,
    fontWeight: "bold",
    /* marginBottom: 4, */
  },
  languagesContainer: {
    padding: 10,
    marginTop: 2,
    flex: 1,
    flexDirection: "row",
  },
});
