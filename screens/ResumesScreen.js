import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet } from "react-native";
import Card from "../components/ui/Card";
import EmployerFooter from "../components/employer/EmployerFooter";
import Resume from "../components/resume/Resume";
import { useNavigation } from "@react-navigation/native";
import { REACT_APP_ENDPOINT_SERVER } from "@env";
import { useSelector } from "react-redux";
import { selectUser } from "../features/user";
import { fetchDataWithToken } from "../utils/fetch-utils";
import Loader from "../components/ui/Loader";

export default function ResumesScreen() {
  const { navigate } = useNavigation();
  const user = useSelector(selectUser);
  const [isFetching, setIsFetching] = useState(false);
  const [resumes, setResumes] = useState([]);

  useEffect(() => {
    if (user?.id) {
      // need to change
      setIsFetching(true);
      fetchDataWithToken(
        `${REACT_APP_ENDPOINT_SERVER}/companies/${user.id}/applications`,
        user.token
      )
        .then((res) => {
          res.jobs.forEach((job) => {
            const applications = job.applications.map((application) => {
              return {
                qualification: application.qualifications,
                university: application.educations,
                experience: application.experiences,
                name: application.jobseeker.name,
                email: application.jobseeker.email,
                skills: application.skills,
                id: Math.random().toString(),
                imgUrl: require("../assets/images/user-img.jpg"),
              };
            });
            setResumes((preResumes) => {
              preResumes.push(...applications);
              return preResumes;
            });
          });
        })
        .finally(() => {
          setIsFetching(false);
        });
    }
  }, [user, resumes]);
  return (
    <Card cardStyle={styles.container}>
      {isFetching && <Loader />}
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
                  skills,
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
      {/* <EmployerFooter /> */}
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
