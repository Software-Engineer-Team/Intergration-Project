import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet } from "react-native";
import { REACT_APP_ENDPOINT_SERVER } from "@env";
import Card from "../ui/Card";
import Job from "./Job";
import Loader from "../ui/Loader";
export default function Jobs() {
  const { navigate } = useNavigation();
  const [jobs, setJobs] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    setIsFetching(true);
    fetch(`${REACT_APP_ENDPOINT_SERVER}/jobs/`)
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
        /* const latestJobsData = jobs.map( */
        /*   ({ id, title, address, description, requirements }) => { */
        /*     return { */
        /*       id, */
        /*       imgUrl: undefined, */
        /*       jobName: title || "SEO Expert", */
        /*       companyAddress: address || "Google Inc, Manchester, UK", */
        /*       languages: requirements || "javascript,React native,React js", */
        /*     }; */
        /*   } */
        /* ); */
      })
      .finally(() => {
        setIsFetching(false);
      });
  }, []);

  return (
    <Card cardStyle={styles.container}>
      {isFetching ? (
        <Loader />
      ) : (
        <ScrollView showsVerticalScrollIndicator={false}>
          {jobs.map(
            ({
              id,
              title,
              address,
              description,
              requirements,
              experience,
              updated_at,
              min_salary,
              max_salary,
              company_id,
            }) => {
              return (
                <Job
                  key={id}
                  title={title}
                  address={address || "Unknown"}
                  description={description || "Unknown"}
                  requirements={requirements || "Unknown"}
                  experience={experience || "1-2"}
                  onPress={() => {
                    navigate("JobDetail", {
                      job_id: id,
                      company_id,
                      title,
                      address,
                      description,
                      requirements,
                      experience,
                      updated_at,
                      min_salary,
                      max_salary,
                    });
                  }}
                />
              );
            }
          )}
        </ScrollView>
      )}
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    maxHeight: 900,
    paddingTop: 10,
    marginVertical: 10,
  },
});
