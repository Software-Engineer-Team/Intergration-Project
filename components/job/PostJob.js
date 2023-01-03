import React, { useState } from "react";
import { ScrollView, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import { Colors } from "../../constants/colors";
import { selectJob } from "../../features/job";
import { postDataWithToken } from "../../utils/fetch-utils";
import JobTitle from "../home/JobTitle";
import Button from "../ui/Button";
import Card from "../ui/Card";
import PostJobDetail from "./PostJobDetail";
import { REACT_APP_ENDPOINT_SERVER } from "@env";
import { selectUser } from "../../features/user";
import Loader from "../ui/Loader";

export default function PostJob() {
  const job = useSelector(selectJob);
  const user = useSelector(selectUser);
  const [isFetch, setIsFetch] = useState(false);
  const postJobHandler = () => {
    setIsFetch(true);
    postDataWithToken(
      { ...job, company_id: user?.id },
      REACT_APP_ENDPOINT_SERVER + "/companies/" + user?.id + "/jobs",
      user?.token
    ).then(() => {
      setIsFetch(false);
    });
  };

  return (
    <Card>
      <ScrollView showsVerticalScrollIndicator={false}>
        <JobTitle
          textMuted="JOBS"
          text="DETAILS"
          styleContainer={{ flex: 0 }}
        />
        <PostJobDetail />
        {/* <JobTitle */}
        {/*   textMuted="COMPANY" */}
        {/*   text="DETAILS" */}
        {/*   styleContainer={{ flex: 0 }} */}
        {/* /> */}
        {/* <FirmDetail style={{ marginBottom: 20 }} /> */}
        <Button
          title={"Submit a Job"}
          color={Colors.buttonColor}
          onPress={postJobHandler}
          buttonStyle={{ borderRadius: 0 }}
          textStyle={{ fontSize: 15 }}
        />
      </ScrollView>
      {isFetch && <Loader />}
    </Card>
  );
}
