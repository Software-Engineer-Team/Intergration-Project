import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import Card from "../components/ui/Card";
import Function from "../components/employer/Function";
import JobTitle from "../components/home/JobTitle";
import Member from "../components/employer/Member";
import EmployerDetail from "../components/employer/EmployerDetail";
import EmployerFooter from "../components/employer/EmployerFooter";
import { useNavigation } from "@react-navigation/native";
export default function EmployerScreen() {
  const { navigate } = useNavigation();
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
  const members = [
    {
      name: "Aara Sittoria",
      skill: "Web Designer",
      imgUrl: require("../assets/images/member-4.png"),
    },
    {
      name: "John",
      skill: "Front End",
      imgUrl: require("../assets/images/member-3.png"),
    },
    {
      name: "John Dow",
      skill: "SEO Expert",
      imgUrl: require("../assets/images/member-2.png"),
    },
    {
      name: "Cindrella",
      skill: "PHP Developer",
      imgUrl: require("../assets/images/member-1.png"),
    },
  ];

  const navigationHandler = (type) => {
    switch (type) {
      case "Job Listing":
        break;
      case "Candidate":
        navigate("Candidate Resumes");
        break;

      default:
        break;
    }
  };
  return (
    <Card cardStyle={styles.container}>
      <EmployerDetail />

      <View style={styles.functionContainer}>
        {functionsEmployer?.map((item) => {
          return (
            <Function
              onPress={() => {
                navigationHandler(item.text);
              }}
              imgUrl={item.imgUrl}
              text={item.text}
              key={item.id}
            />
          );
        })}
      </View>
      <View>
        <JobTitle textMuted="OUR" text="MEMBERS" styleContainer={{ flex: 0 }} />
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {members.map(({ name, skill, imgUrl }, idx) => {
            return (
              <Member skill={skill} name={name} imgUrl={imgUrl} key={idx} />
            );
          })}
        </ScrollView>
      </View>
      <EmployerFooter />
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    paddingTop: 10,
  },
  functionContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
  },
});
