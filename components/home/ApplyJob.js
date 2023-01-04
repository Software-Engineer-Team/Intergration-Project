import { useRoute } from "@react-navigation/native";
import React, { useState } from "react";
import { ScrollView } from "react-native";
import { useSelector } from "react-redux";
import { selectResume } from "../../features/resume";
import Card from "../ui/Card";
import Loader from "../ui/Loader";
import ApplyJobForm from "./ApplyJobForm";
import JobTitle from "./JobTitle";

export default function ApplyJob() {
  const [isFetch, setIsFetch] = useState(false);
  const { skills, experience, position, description } =
    useSelector(selectResume);

  console.log(skills);
  const applyJobHandler = () => {};
  /* const { */
  /*   params: { company_id }, */
  /* } = useRoute(); */

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
