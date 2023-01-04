import React, { useEffect } from "react";
import { ScrollView, StyleSheet } from "react-native";
import Card from "../components/ui/Card";
import EmployerFooter from "../components/employer/EmployerFooter";
import Resume from "../components/resume/Resume";
import { useNavigation } from "@react-navigation/native";
import { REACT_APP_ENDPOINT_SERVER } from "@env";
import { useSelector } from "react-redux";
import { selectUser } from "../features/user";

export default function ResumesScreen() {
  const { navigate } = useNavigation();
  const user = useSelector(selectUser);

  useEffect(() => {
    if (user?.id) {
      // need to change
      fetch(`${REACT_APP_ENDPOINT_SERVER}/jobs/${user.id}/applications`)
        .then((res) => res.json())
        .then(() => {});
    }
  }, [user]);
  const resumes = [
    {
      id: Math.random().toString(),
      name: "Aara Sittoria",
      skills: "Web Designer",
      imgUrl: require("../assets/images/member-4.png"),
    },
    {
      id: Math.random().toString(),
      name: "John",
      skill: "Front End",
      imgUrl: require("../assets/images/member-3.png"),
    },
    {
      id: Math.random().toString(),
      name: "John Dow",
      skills: "SEO Expert",
      imgUrl: require("../assets/images/member-2.png"),
    },
    {
      id: Math.random().toString(),
      name: "Cindrella",
      skills: "PHP Developer",
      imgUrl: require("../assets/images/member-1.png"),
    },
  ];

  return (
    <Card cardStyle={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {resumes?.map(
          ({
            qualification,
            university,
            experience,
            name,
            email,
            skills,
            id,
            imgUrl,
          }) => (
            <Resume
              key={id || Math.random().toString()}
              onPress={() => {
                return navigate("Candidate Detail", {
                  name,
                  email,
                  address: "Address Test",
                  description: "None",
                  skills: "React Native",
                  experience,
                  education: university || "None",
                });
              }}
              imgUrl={imgUrl}
              experience={experience}
              qualification={qualification}
              university={university}
              skills={skills}
              name={name}
            />
          )
        )}
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
