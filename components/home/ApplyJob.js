import { useRoute } from "@react-navigation/native";
import React, { useState } from "react";
import { ScrollView } from "react-native";
import { useSelector } from "react-redux";
import { selectResume } from "../../features/resume";
import { selectUser } from "../../features/user";
import { postDataWithToken } from "../../utils/fetch-utils";
import Card from "../ui/Card";
import Loader from "../ui/Loader";
import ApplyJobForm from "./ApplyJobForm";
import JobTitle from "./JobTitle";
import { REACT_APP_ENDPOINT_SERVER } from "@env";
import Toast from "react-native-toast-message";

export default function ApplyJob() {
  const [isFetch, setIsFetch] = useState(false);
  const user = useSelector(selectUser);
  const {
    skills,
    experience,
    position,
    description,
    qualifications,
    university,
  } = useSelector(selectResume);

  const {
    params: { company_id },
  } = useRoute();

  const applyJobHandler = () => {
    setIsFetch(true);
    postDataWithToken(
      {
        company_id,
        jobseeker_id: user?.id,
        qualifications,
        educations: university,
        experiences: experience,
        description,
        skills,
        position,
      },
      REACT_APP_ENDPOINT_SERVER + "/applications",
      user?.token
    )
      .then(() => {
        Toast.show({
          type: "success",
          text1: "Submit a resume",
          text2: "You have submit a resume to company successfully 👋",
          position: "top",
          visibilityTime: 3000,
          topOffset: 10,
        });
      })
      .finally(() => {
        setIsFetch(false);
      });
  };

  return (
    <Card>
      <ScrollView showsVerticalScrollIndicator={false}>
        <JobTitle
          textMuted="PERSONAL"
          text="DETAILS"
          styleContainer={{ flex: 0 }}
        />
        <ApplyJobForm applyJobHandler={applyJobHandler} />
      </ScrollView>
      {isFetch && <Loader />}
    </Card>
  );
}
