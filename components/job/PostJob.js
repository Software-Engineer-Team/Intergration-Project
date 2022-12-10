import React from "react";
import { ScrollView, StyleSheet, Text } from "react-native";
import { Colors } from "../../constants/colors";
import JobTitle from "../home/JobTitle";
import Card from "../ui/Card";
import PostJobDetail from "./PostJobDetail";

export default function PostJob() {
  return (
    <Card>
      <JobTitle textMuted="JOBS" text="DETAILS" styleContainer={{ flex: 0 }} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <PostJobDetail />
      </ScrollView>
    </Card>
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
