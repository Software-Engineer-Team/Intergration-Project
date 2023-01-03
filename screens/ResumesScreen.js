import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import Card from "../components/ui/Card";
import EmployerFooter from "../components/employer/EmployerFooter";
import Resume from "../components/resume/Resume";
import { useNavigation } from "@react-navigation/native";
export default function ResumesScreen() {
  const { navigate } = useNavigation();
  const resumes = [
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

  return (
    <Card cardStyle={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {resumes?.map((item) => (
          <Resume
            key={item.id || Math.random().toString()}
            onPress={() => {
              return navigate("Candidate Detail", {
                name: "Name  Test",
                email: "Email Test",
                address: "Address Test",
                description: "Something",
                skills: "React Native",
                experience: "3 years",
                education: "BK",
              });
            }}
            imgUrl={item.imgUrl}
            jobName={item.jobName}
            companyAddress={item.companyAddress}
            languages={item.languages}
          />
        ))}
      </ScrollView>
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
});
