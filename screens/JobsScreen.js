import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet } from "react-native";
import Card from "../components/ui/Card";
import EmployerFooter from "../components/employer/EmployerFooter";
import PostedJob from "../components/employer/PostedJob";
import { REACT_APP_ENDPOINT_SERVER } from "@env";
import { useSelector } from "react-redux";
import { selectUser } from "../features/user";
import Loader from "../components/ui/Loader";

export default function JobsScreen() {
  const user = useSelector(selectUser);
  const [postedJobs, setPostedJobs] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  useEffect(() => {
    if (user?.id) {
      setIsFetching(true);
      fetch(`${REACT_APP_ENDPOINT_SERVER}/companies/${user.id}/jobs`)
        .then((res) => res.json())
        .then((jobsInCompany) => {
          const postedJobsTemp = jobsInCompany.map(
            ({ title, id, address, description, requirements, benefits }) => {
              return {
                id,
                imgUrl: "",
                jobName: title,
                address,
                requirements,
                benefits,
                description,
              };
            }
          );
          setPostedJobs(postedJobsTemp);
        })
        .finally(() => {
          setIsFetching(false);
        });
    }
  }, [user]);
  return (
    <Card cardStyle={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {postedJobs.map(
          ({
            id,
            imgUrl,
            jobName,
            benefits,
            requirements,
            description,
            address,
          }) => {
            return (
              <PostedJob
                key={id}
                imgUrl={imgUrl}
                address={address}
                jobName={jobName}
                benefits={benefits}
                requirements={requirements}
                description={description}
              />
            );
          }
        )}
      </ScrollView>
      {isFetching && <Loader />}
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    maxHeight: 900,
    paddingTop: 10,
  },
});
