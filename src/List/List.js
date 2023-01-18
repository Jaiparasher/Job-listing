import { Box, Button, CircularProgress, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import JobCard from "../Job/JobCard";
import Header from "./Header";
import SearchBar from "./SearchBar";
import "./Dummydata";
import { Close } from "@mui/icons-material"
import NewJobModal from "../Job/NewJobModal";
import { app, firestore } from "../Firebase/config";
import ViewJobModal from "../Job/ViewJobModal";

const List = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [customSearch, setCustomSearch] = useState(false);
  const [newJobModel, setNewJobModel] = useState(false);
  const [viewJob, setViewJob] = useState({});


  const fetchJobs = async () => {
    setCustomSearch(false);
    setLoading(true);
    const req = await firestore
      .collection("jobs")
      .orderBy("postedOn", "desc")
      .get();
    const temp = req.docs.map((job) => ({
      ...job.data(),
      id: job.id,
      postedOn: job.data().postedOn.toDate(),
    }));
    setJobs(temp);
    setLoading(false);
  };

  const fetchJobsCustom = async (jobSearch) => {
    setLoading(true);
    setCustomSearch(true);
    const req = await firestore
      .collection("jobs")
      .orderBy("postedOn", "desc")
      .where("location",'==',jobSearch.location)
      .where("type",'==',jobSearch.type)
      .get();
    const temp = req.docs.map((job) => ({
      ...job.data(),
      id: job.id,
      postedOn: job.data().postedOn.toDate(),
    }));
    setJobs(temp);
    setLoading(false);
  };

  const postJobs = async (jobDetails) => {
    await firestore.collection("jobs").add({
      ...jobDetails,
      postedOn: app.firestore.FieldValue.serverTimestamp(),
    });
    fetchJobs();
  };
  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <>
      <Header openNewJobModel={() => setNewJobModel(true)} />
      <NewJobModal
        newJobModel={newJobModel}
        closeNewJobModel={() => setNewJobModel(false)}
        postJobs={postJobs}
      />
      <ViewJobModal job={viewJob} closeModal={() => setViewJob({})}/>
      <Box mb={3}>
        <Grid className="justify-center" container>
          <Grid className="flex flex-wrap justify-center" item xs={10}>
            <SearchBar fetchJobsCustom={fetchJobsCustom} />
            {loading ? (
              <CircularProgress className="mt-10" />
            ) : (
              <>
              {customSearch && (
                <Box my={1} className="flex justify-end w-full">
                <Button onClick={fetchJobs} className="flex items-center h-10 gap-1">
                <span className="mt-1">Custom Search</span>
                  <Close size={5}/>
                </Button>
              </Box>)}
              {jobs.map((job) => (
                <JobCard
                  open ={() => setViewJob(job)} 
                  key={job.id}
                  {...job}
                />
                ))}
              </>
            )}
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default List;
