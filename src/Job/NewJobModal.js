import {
  Box,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FilledInput,
  Grid,
  IconButton,
  MenuItem,
  Select,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import React, { useState } from "react";
import "./JobCard.css";

const initState={
  title: "",
  type: "Full time",
  companyName: "",
  companyUrl: "",
  skills: [],
  description: "",
  location: "Remote",
}


const NewJobModal = (props) => {
  const [loading, setLoading] = useState(false);
  const [jobDetails, setJobDetails] = useState(initState);

  const handleChange = (e) => {
    e.persist = () => {};
    setJobDetails((oldState) => ({
      ...oldState,
      [e.target.name]: e.target.value,
    }));
  };

  const addRemoveSkill = (skill) =>
    jobDetails.skills.includes(skill)
      ? setJobDetails((oldState) => ({
          ...oldState,
          skills: oldState.skills.filter((s) => s !== skill),
        }))
      : setJobDetails((oldState) => ({
          ...oldState,
          skills: oldState.skills.concat(skill),
        }));

  const handleSubmit = async () => {
    for (const field in jobDetails){
      if(typeof jobDetails[field] === "string" && !jobDetails[field]) return;
  }
  if (!jobDetails.skills.length) return;
    setLoading(true);
    await props.postJobs(jobDetails);
    closeModal();
  };

  const closeModal = () => {
    setJobDetails(initState)
    setLoading(false);
    props.closeNewJobModel();
 };

  const skills = [
    "Javascript",
    "React",
    "Node",
    "Vue",
    "Firebase",
    "MongoDB",
    "SOL",
  ];
  
  return (
    <Dialog open={props.newJobModel} fullWidth>
      <DialogTitle>
        <Box className="flex justify-between items-center">
          Post Job
          <IconButton onClick={()=>closeModal()}>
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <FilledInput
              required
              onChange={handleChange}
              name="title"
              value={jobDetails.title}
              autoComplete="off"
              fullWidth
              hiddenLabel
              placeholder="Job Title*"
              disableUnderline
              size="small"
            />
          </Grid>
          <Grid item xs={6}>
            <Select
              onChange={handleChange}
              name="type"
              value={jobDetails.type}
              size="small"
              fullWidth
              disableUnderline
              hiddenLabel
              variant="filled"
            >
              <MenuItem value="Full time">Full time</MenuItem>
              <MenuItem value="Part time">Part time</MenuItem>
              <MenuItem value="Contract">Contract</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={6}>
            <FilledInput
              required
              onChange={handleChange}
              name="companyName"
              value={jobDetails.companyName}
              autoComplete="off"
              fullWidth
              hiddenLabel
              placeholder="Company Name*"
              disableUnderline
              size="small"
            />
          </Grid>
          <Grid item xs={6}>
            <FilledInput
              required
              onChange={handleChange}
              name="companyUrl"
              value={jobDetails.companyUrl}
              autoComplete="off"
              fullWidth
              hiddenLabel
              placeholder="Company Url*"
              disableUnderline
              size="small"
            />
          </Grid>
          <Grid item xs={6}>
            <Select
              onChange={handleChange}
              name="location"
              value={jobDetails.location}
              size="small"
              fullWidth
              disableUnderline
              hiddenLabel
              variant="filled"
            >
              <MenuItem value="Remote">Remote</MenuItem>
              <MenuItem value="In-office">In-office</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={12}>
            <FilledInput
              required
              onChange={handleChange}
              name="description"
              value={jobDetails.description}
              autoComplete="off"
              fullWidth
              placeholder="Job Description*"
              multiline
              rows={3}
              disableUnderline
              size="small"
            />
          </Grid>
        </Grid>
        <Box mt={2}>
          <h2 className="font-medium ml-1">Skills</h2>
          <Box className="flex mx-2 mt-1 gap-2">
            {skills.map((skill) => (
              <Box
                onClick={() => addRemoveSkill(skill)}
                className={`hover:bg-black text-[14.5px] font-medium text-black cursor-pointer py-1 px-2 rounded-md hover:text-white border border-black bg-gray-100  ${
                  jobDetails.skills.includes(skill) && "included"
                }`}
                key={skill}
              >
                {" "}
                {skill}
              </Box>
            ))}
          </Box>
        </Box>
      </DialogContent>
      <DialogActions>
        <Box className="w-full flex justify-between text-red-700 px-4">
          <h3>Required Fields*</h3>
          <button
            onClick={handleSubmit}
            disabled={loading}
            className={` bg-[#2c7dff] min-w-[80px] h-[40px] rounded-md py-1 px-2 mb-2  hover:bg-[#3d87ff] font-medium text-white ${loading&&"bg-gray-300 hover:bg-gray-300" } `}
          >{loading?<CircularProgress size={22} />:
            "Post Job"}
          </button>
        </Box>
      </DialogActions>
    </Dialog>
  );
};

export default NewJobModal;
